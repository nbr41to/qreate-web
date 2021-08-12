import { auth, db, firebase } from '.';
import { User } from '../type';

export const signinGoogle = async (): Promise<User> => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const userCredential = await firebase.auth().signInWithPopup(provider);
    const userId = userCredential.user.uid;
    let userDoc = await db.collection('users').doc(userId).get();
    if (!userDoc.data()) {
      await db
        .collection('users')
        .doc(userId)
        .set({
          id: userId,
          name: userCredential.user.displayName || 'なまえがない',
          photoUrl: userCredential.user.photoURL || '',
          followIds: [],
          followedIds: [],
          favoriteQuizIds: [],
          favoriteQuizGroupIds: [],
        });
      userDoc = await db.collection('users').doc(userId).get();
    }
    return userDoc.data() as User;
  } catch (error) {
    console.error(error);
  }
};

export const observeUser = (setUserNull: () => void): firebase.Unsubscribe => {
  return auth.onAuthStateChanged((user) => {
    if (!user) {
      setUserNull();
    }
  });
};

export const logout = async (): Promise<void> => {
  await auth.signOut();
};
