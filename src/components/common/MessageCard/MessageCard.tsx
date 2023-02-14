import { FC } from 'react';
import { useRouter } from 'next/router';

import * as S from './MessageCard.styled';

interface MessageCardProps {
  name: string;
  lastMessageDate: string;
  id: number;
}

const MessageCard: FC<MessageCardProps> = ({ name, lastMessageDate, id }) => {
  const router = useRouter();

  return (
    <S.Container onClick={() => router.push(`/conversation/${id}`)}>
      <S.Image src="/img_avatar.png" alt="avatar" />
      <S.Details>
        <S.Title>{name}</S.Title>
        <S.Date>{lastMessageDate}</S.Date>
      </S.Details>
    </S.Container>
  );
};

export default MessageCard;
