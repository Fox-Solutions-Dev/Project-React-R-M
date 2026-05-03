import type { Metadata } from 'next';
import { ThemeContextProvider } from '../Context/ThemeContext';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'React Hooks: R&M',
  description: 'Rick and Morty character browser',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
