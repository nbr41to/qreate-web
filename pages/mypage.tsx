import { VFC } from 'react';
import { auth } from 'src/firebase';

const MyPage: VFC = () => {
  return (
    <div>
      <h1>MyPage</h1>
      <h3>ユーザ名:{auth.currentUser?.displayName || 'ログインしてない'}</h3>
      <h3>あなたのクイズ</h3>
    </div>
  );
};

export default MyPage;
