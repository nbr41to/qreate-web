import { VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ChatBubble, Home, Info, Paper, Person } from 'akar-icons';

export const Header: VFC = () => {
  return (
    <StyledHeader>
      <div className="logo">Qreate web</div>
      <nav>
        <Link href="/">
          <a>
            <Home size={36} />
            <span>TOP</span>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Info size={36} />
            <span>ABOUT</span>
          </a>
        </Link>
        <Link href="/mypage">
          <a>
            <Person size={36} />
            <span>MYPAGE</span>
          </a>
        </Link>
        <Link href="/create">
          <a>
            <Paper size={36} />
            <span>Qreate</span>
          </a>
        </Link>
        <Link href="/quizzes">
          <a>
            <ChatBubble size={36} />
            <span>Quizzes</span>
          </a>
        </Link>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 8px 24px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .logo {
    font-size: 40px;
  }
  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    > a {
      padding: 8px 16px;
      > svg {
        cursor: pointer;
      }
      > span {
        display: none;
      }
    }
  }
`;
