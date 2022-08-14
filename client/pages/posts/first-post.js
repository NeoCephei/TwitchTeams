import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Layout from 'Components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        {/* Okay so I can change the title of each page/components thats quite cool!! */}
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  );
}