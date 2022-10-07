import Hello from '@components/Hello';
import Footer from '@components/Footer';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-end gap-4">
      {/* <p>MouteHard&apos;s boilerplate</p>
      <Hello /> */}
      <Footer />
    </div>
  );
};

export default Home;
