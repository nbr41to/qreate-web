import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { OnQuizBoard } from 'src/Quiz/OnQuizBoard';

const QuizDetailPage = () => {
  const router = useRouter();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    if (!process.browser) return;
    const id = router.asPath.split('/')[2];
    console.log(id);
    // getQuiz(id).then((res) => setQuiz(res));
  }, [router]);

  return (
    <div>
      <h1>QuizDetailPage</h1>
      <OnQuizBoard quiz={quiz} />
    </div>
  );
};

export default QuizDetailPage;
