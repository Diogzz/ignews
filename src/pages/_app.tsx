import { AppProps } from 'next/app'
import { Session } from "next-auth";
import { SessionProvider  as NextAuthProvider } from "next-auth/react";

import { Header } from '../components/Header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps<{session: Session}>) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
