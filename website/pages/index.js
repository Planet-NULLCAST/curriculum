import Head from 'next/head';

import Layout from '../component/layout/Layout.jsx';
import Description from '../component/layout/common/Discription.jsx';

export default function Home() {
  return (
    <Layout>
      <div className="">
          <Description />
      </div>
    </Layout>
  )
}
