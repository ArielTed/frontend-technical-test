import { FC } from 'react';
import { Conversation } from '../../../types/conversation';
import MessageCard from '../../common/MessageCard';
import useMessageContext from '../../../hooks/useMessageContext';
import { getDate } from '../../../utils/getDate';

import * as S from './MessageList.styled';

interface MessageListProps {
  conversations: Conversation[];
}

const MessageList: FC<MessageListProps> = ({ conversations }) => {
  const { user } = useMessageContext();

  return (
    <S.Container>
      {conversations.map((conversation) => (
        <MessageCard
          key={conversation.id}
          name={user.id !== conversation.recipientId ? conversation.recipientNickname : conversation.senderNickname}
          lastMessageDate={getDate(conversation.lastMessageTimestamp)}
          id={conversation.id}
        />
      ))}
    </S.Container>
  );
};

export default MessageList;
