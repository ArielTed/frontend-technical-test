import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Message } from '../../../types/message';
import MessageBubble from '../../common/MessageBubble';
import useMessageContext from '../../../hooks/useMessageContext';
import TextInput from '../../common/TextInput';
import ChevronLeft from '../../svg/ChevronLeft';
import SendIcon from '../../svg/SendIcon';

import * as S from './ConversationTemplate.styled';

interface ConversationTemplateProps {
  initialData: { messages: Message[]; conversationId: string };
}

const ConversationTemplate: FC<ConversationTemplateProps> = ({ initialData }) => {
  const router = useRouter();
  const { user, conversations, isLoading } = useMessageContext();
  const [messages, setMessages] = useState<Message[]>(initialData.messages);
  const [newMessage, setNewMessage] = useState('');
  const [recipientNickname, setRecipientNickname] = useState('');

  useEffect(() => {
    if (!isLoading) {
      const conversation = conversations.find((conversation) => conversation.id === Number(initialData.conversationId));
      setRecipientNickname(
        conversation.recipientId === user.id ? conversation.senderNickname : conversation.recipientNickname
      );
    }
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleNewMessage = async () => {
    const message = {
      conversationId: initialData.conversationId,
      timestamp: new Date().getTime(),
      authorId: user.id,
      body: newMessage,
    };

    await axios.post(`/api/messages/${initialData.conversationId}`, message);
    const { data } = await axios.get<Message[]>(`/api/messages/${initialData.conversationId}`);
    setMessages(data);
    setNewMessage('');
  };

  return (
    <S.Container>
      <S.Header>
        <S.ButtonContainer
          onClick={() => {
            router.push('/');
          }}
          style={{ height: 18 }}
        >
          <ChevronLeft />
        </S.ButtonContainer>
        <S.Image src="/img_avatar.png" alt="avatar" />
        <p>{recipientNickname}</p>
      </S.Header>
      <S.MessagesContainer>
        {!isLoading &&
          messages.map((message) => (
            <MessageBubble
              key={message.id}
              isSender={message.authorId === user.id}
              content={message.body}
              timestamp={message.timestamp}
            />
          ))}
      </S.MessagesContainer>
      <S.InputContainer
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !!newMessage.length) {
            handleNewMessage();
          }
        }}
      >
        <TextInput value={newMessage} onChange={setNewMessage} active={!!newMessage.length} disabled={isLoading} />
        <S.ButtonContainer $disabled={!newMessage.length} onClick={!newMessage.length ? () => {} : handleNewMessage}>
          <SendIcon fillColor={newMessage.length ? '#0084ff' : '#999999'} />
        </S.ButtonContainer>
      </S.InputContainer>
    </S.Container>
  );
};

export default ConversationTemplate;
