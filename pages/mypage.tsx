import { VFC, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { logout } from 'src/firebase/auth';
import { QuizList } from '../src/Quiz/QuizList';
import { userState, modalState } from '../src/recoil/atom';
import { Button } from 'react-bootstrap';
import { observeUser } from '../src/firebase/auth';
import { useRouter } from 'next/router';
import { SignOut } from 'akar-icons';

const MyPage: VFC = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const setModal = useSetRecoilState(modalState);

  useEffect(() => {
    const unscribe = observeUser(() => setUser(null));
    if (!user) router.push('/');
    return () => unscribe();
  }, []);

  const singOut = () => {
    setModal({
      type: 'confirm',
      message: 'ログアウトしてよろしいですか？',
      clicked: () => {
        logout();
        setModal({ type: '' });
        router.push('/');
      },
    });
    setUser(null);
  };

  return (
    <div>
      <h1>MyPage</h1>
      <h3>ユーザ名:{user?.name || 'ログインしてない'}</h3>
      <h3>あなたのクイズ</h3>
      <QuizList />
      <Button onClick={singOut}>
        <span>ログアウト</span>
        <SignOut />
      </Button>
    </div>
  );
};

export default MyPage;
