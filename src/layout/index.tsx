import { ReactNode, VFC } from 'react';
import { LoginModal } from 'src/LoginModal';
import styled from 'styled-components';
import { Header } from './Header';
import { ConfirmModal } from 'src/ConfirmModal';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <LoginModal />
      <ConfirmModal />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  > main {
    padding: 12px 32px;
  }
`;
