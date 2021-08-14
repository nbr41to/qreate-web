import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { QuizList } from 'src/Quiz/QuizList';
import { CreateQuizForm } from '../../../src/CreateQuizForm';

const GroupEditPage = () => {
  const router = useRouter();

  const groupId = router.asPath.split('/')[2];

  useEffect(() => {
    // if (!process.browser) return;
  }, [router]);

  return (
    <div>
      <h1>GroupEditPage</h1>
      <CreateQuizForm groupIn={groupId} />
      {/* <QuizList /> */}
    </div>
  );
};

export default GroupEditPage;
