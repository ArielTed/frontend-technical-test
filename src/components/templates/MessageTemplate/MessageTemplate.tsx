import { FC } from 'react';
// import axios from 'axios';
import MessageList from '../../modules/MessageList';
import useMessageContext from '../../../hooks/useMessageContext';
import CreateIcon from '../../svg/CreateIcon';

import * as S from './MessageTemplate.styled';
// import { useRouter } from 'next/router';

const MessageTemplate: FC = () => {
  // const router = useRouter();
  const { user, conversations, isLoading /*mutateConversations*/ } = useMessageContext();

  // IDEA for Bonus 1 create new conversation
  // What's missing is a window to select the user I want to create the conversation with
  // const handleNewConversation = async () => {
  //   const conversation = {
  //     recipientId: 2,
  //     recipientNickname: 'Jeremie',
  //     senderId: user.id,
  //     senderNickname: user.nickname,
  //   };

  //   await axios.post(`/api/conversations/${user.id}`, conversation);
  //   await mutateConversations();
  //   router.push(`/conversations/${conversations[conversations.length - 1].id + 1}`);
  // };

  return (
    <S.Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <S.Header>
            <p>Logged as {user.nickname}</p>
            <S.IconContainer /*onClick={handleNewConversation}*/>
              <CreateIcon fillColor="#050505" />
            </S.IconContainer>
          </S.Header>
          <MessageList conversations={conversations} />
        </>
      )}
    </S.Container>
  );
};

export default MessageTemplate;
