import { useContext } from 'react';
import MessageContext from '../contexts/MessageContext';

const useMessageContext = () => useContext(MessageContext);

export default useMessageContext;
