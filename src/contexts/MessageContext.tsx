import { createContext, FC, ReactNode } from 'react';
import useSWR, { KeyedMutator } from 'swr';
import axios from 'axios';
import { User } from '../types/user';
import { Conversation } from '../types/conversation';
import { loggedUserId } from '../pages/_app';

interface MessageProviderProps {
  children: ReactNode;
}

interface MessageContextValue {
  isLoading: boolean;
  conversations: Conversation[];
  user: User;
  mutateUser: KeyedMutator<User>;
  mutateConversations: KeyedMutator<Conversation[]>;
}

const MessageContext = createContext<Partial<MessageContextValue>>({});

export const MessageProvider: FC<MessageProviderProps> = ({ children }) => {
  const {
    data: conversations,
    isValidating: conversationLoading,
    mutate: mutateConversations,
  } = useSWR<Conversation[]>(`/api/conversations/${loggedUserId}`, (url) => axios.get(url).then((res) => res.data), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  const {
    data: user,
    isValidating: userLoading,
    mutate: mutateUser,
  } = useSWR<User>(`/api/users/${loggedUserId}`, (url) => axios.get(url).then((res) => res.data), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  return (
    <MessageContext.Provider
      value={{
        isLoading: conversationLoading || userLoading,
        conversations,
        user,
        mutateUser,
        mutateConversations,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
