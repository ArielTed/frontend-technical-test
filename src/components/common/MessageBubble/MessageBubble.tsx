import { FC } from 'react';
import { getDateMessage } from '../../../utils/getDate';

import * as S from './MessageBubble.styled';

interface MessageBubbleProps {
  isSender?: boolean;
  content: string;
  timestamp: number;
}

const MessageBubble: FC<MessageBubbleProps> = ({ isSender, content, timestamp }) => {
  return (
    <S.Container $isSender={isSender}>
      <S.Bubble dir="auto" $isSender={isSender}>
        {content}
      </S.Bubble>
      <S.Timestamp $isSender={isSender}>{getDateMessage(timestamp)}</S.Timestamp>
    </S.Container>
  );
};

export default MessageBubble;
