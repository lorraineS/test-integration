import Hello from '@components/Hello';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <p>MouteHard&apos;s boilerplate</p>
      <Hello />
    </div>
  );
};

export default Home;
