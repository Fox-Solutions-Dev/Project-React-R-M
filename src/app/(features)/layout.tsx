import { ReactNode } from 'react';
import styles from '@/core/styles/layout.module.css';
import { Header } from '@/core/components';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
