import { VFC } from 'react';
import { LoginModal } from 'src/LoginModal';
import { QuizCardList } from 'src/Quiz/QuizCardList';

const Home: VFC = () => {
  return (
    <div>
      <h2>クイズSNS</h2>
      <p>勉強した内容をクイズ化して投稿しよう！</p>
      <p>クイズ化は効率の良い学習方法のひとつです。</p>
      <h2>最近のクイズ一覧</h2>
      <div></div>
      <QuizCardList />
    </div>
  );
};

export default Home;
