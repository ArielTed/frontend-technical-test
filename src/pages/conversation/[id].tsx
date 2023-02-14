import axios from 'axios';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { Message } from '../../types/message';
import ConversationTemplate from '../../components/templates/ConversationTemplate';

interface ConversationPageProps {
  initialData: { messages: Message[]; conversationId: string };
}

const ConversationPage: NextPage<ConversationPageProps> = ({ initialData }) => {
  return (
    <>
      <Head>
        <title>Conversation details</title>
      </Head>
      <ConversationTemplate initialData={initialData} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const conversationId = ctx.params.id;

  try {
    const { data: messages } = await axios.get<Message[]>(`http://localhost:3005/messages/${conversationId}`);

    if (!messages.length) return { redirect: { destination: '/', permanent: false } };

    return {
      props: { initialData: { messages, conversationId } },
    };
  } catch (_) {
    return { redirect: { destination: '/', permanent: false } };
  }
};

export default ConversationPage;
