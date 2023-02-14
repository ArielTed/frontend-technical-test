import type { AppProps } from 'next/app';
import { getLoggedUserId } from '../utils/getLoggedUserId';
import '../styles/globals.css';
import styles from '../styles/App.module.css';
import { MessageProvider } from '../contexts/MessageContext';

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.Container}>
      <MessageProvider>
        <Component {...pageProps} />
      </MessageProvider>
    </div>
  );
}

export default MyApp;
