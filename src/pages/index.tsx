import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import MessageTemplate from '../components/templates/MessageTemplate';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>
      <MessageTemplate />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
