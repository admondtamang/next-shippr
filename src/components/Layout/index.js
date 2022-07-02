import Head from 'next/head';
import Header from '../Header';
import { useRouter } from 'next/router';
import Footer from '../Footer';
import BottomNavigation from '../Mobile/MobileBottomNavigation';
import { ScreenContext } from '../../contexts';
import { useContext } from 'react';
import { Loading } from '..';
import { NextSeo } from 'next-seo';

export default function Layout({ children, title = 'Shippr Ecommerce', status, loader }) {
  const router = useRouter();
  const pathname = router.pathname;
  const { mobileScreen } = useContext(ScreenContext);

  return (
    <div className={`${!mobileScreen ? 'app-main' : 'mobile-main'}`}>
      <NextSeo
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        ]}
        title="Shippr "
        description="The fastest growing e-commerce site in Nepal."
        canonical="https://shippr.store/"
        openGraph={{
          url: 'https://shippr.store/',
          title: 'Shippr ',
          description: 'The fastest growing e-commerce site in Nepal.',
          images: [
            {
              url: 'src/assets/logo.png',
              width: 800,
              height: 600,
              alt: 'shippr logo',
            },
          ],
        }}
      />

      <Header />

      <main className={pathname !== '/' ? 'main-page' : ''}>{status?.isLoading ? loader || <Loading /> : children}</main>

      <div className="relative pb-20">{mobileScreen ? <BottomNavigation /> : <Footer />}</div>
    </div>
  );
}
