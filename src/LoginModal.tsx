import { GoogleContainedFill } from 'akar-icons';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { signinGoogle } from './firebase/auth';
import { userState, modalState } from './recoil/atom';

export const LoginModal: VFC = () => {
  const setUser = useSetRecoilState(userState);
  const [modal, setModal] = useRecoilState(modalState);
  const router = useRouter();
  const close = () => setModal({ type: '' });

  const login = async () => {
    const result = await signinGoogle();
    setUser(result);
    close();
    router.push('mypage');
  };

  return (
    <StyledLoginModal show={modal.type === 'login'} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>無料でログイン</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ログインすることで,クイズを保存することができるようになります.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={login} className="google_button">
          <GoogleContainedFill />
          <span>Googleアカウントでログイン</span>
        </Button>
        <Button variant="secondary" onClick={close}>
          やめる
        </Button>
      </Modal.Footer>
    </StyledLoginModal>
  );
};

const StyledLoginModal = styled(Modal)`
  .google_button {
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      margin-left: 8px;
    }
  }
`;
