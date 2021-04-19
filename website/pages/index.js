import Head from 'next/head';

import Layout from '../component/layout/Layout.jsx';
import Description from '../component/layout/common/Discription.jsx';
import Monoco from '../component/editor/Editor.js';

export default function Home() {
  return (
    <Layout>
      <div className="">
          <Description />
      </div>
    </Layout>
  )
}
