import '../styles/globals.css';
import { InterFont } from '@/styles/fonts';
import { ThemeProvider } from '@/styles/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NextTopLoader from 'nextjs-toploader';
import { siteConfig } from '@/lib/config/site.config';

import '@/firebase';

const RootLayout = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="en" className={`${InterFont.variable}`}>
      <body className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color={siteConfig.loadingBarColor} />
          {children}
        </ThemeProvider>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
};

export default RootLayout;
