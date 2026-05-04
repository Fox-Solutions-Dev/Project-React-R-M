import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/core/theme';
import { Creepster } from 'next/font/google';
import styles from '@/core/styles/layout.module.css';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

const creepster = Creepster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-creepster',
});

export const metadata: Metadata = {
  title: 'React Hooks: R&M',
  description: 'Rick and Morty character browser',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={creepster.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <section className={styles.container}>{children}</section>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
