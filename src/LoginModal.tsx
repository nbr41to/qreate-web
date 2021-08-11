import { VFC } from 'react';
import { firebase } from 'src/firebase';
import styled from 'styled-components';

type LoginModalProps = {
  open?: boolean;
};

export const LoginModal: VFC<LoginModalProps> = () => {
  const signinGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };
  return (
    <StyledLoginModal>
      <button onClick={signinGoogle}>google login</button>
    </StyledLoginModal>
  );
};

const StyledLoginModal = styled.div``;
