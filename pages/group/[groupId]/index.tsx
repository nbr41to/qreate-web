import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CreateQuizForm } from '../../../src/CreateQuizForm';

const GroupDetailPage = () => {
  const router = useRouter();

  const groupId = router.asPath.split('/')[2];
  useEffect(() => {
    // if (!process.browser) return;
  }, [router]);

  return (
    <div>
      <h1>GroupDetailPage</h1>
      <CreateQuizForm groupIn={groupId} />
    </div>
  );
};

export default GroupDetailPage;
