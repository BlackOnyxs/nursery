import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Footer, Navbar } from '../ui';

interface Props extends PropsWithChildren {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}



export const MainLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='description' content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {
          imageFullUrl && (
            <meta name="og:image" content={imageFullUrl} />
          )
        }

      </Head>

      <nav>
        <Navbar />
      </nav>

      {/* <SideMenu /> */}

      <main
        style={{
          margin: '80px auto',
          maxWidth: '100%',
          marginTop: 70,
          height: '100%'
        }}
      >
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
