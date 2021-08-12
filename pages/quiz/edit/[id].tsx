import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getQuiz } from 'src/firebase/firestore';
import { OnQuizBoard } from 'src/Quiz/OnQuizBoard';

const QuizEditPage = () => {
  const router = useRouter();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    if (!process.browser) return;
    const id = router.asPath.split('/')[2];
    console.log(id);
  }, [router]);

  return (
    <div>
      <h1>QuizEditPage</h1>
    </div>
  );
};

export default QuizEditPage;
