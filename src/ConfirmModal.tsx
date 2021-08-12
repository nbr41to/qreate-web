import { VFC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { modalState } from './recoil/atom';

export const ConfirmModal: VFC = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const close = () => setModal({ type: '' });

  return (
    <StyledConfirmModal show={modal.type === 'confirm'} onHide={close}>
      <Modal.Body>{modal?.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={modal?.clicked}>
          はい
        </Button>
        <Button variant="secondary" onClick={close}>
          いいえ
        </Button>
      </Modal.Footer>
    </StyledConfirmModal>
  );
};

const StyledConfirmModal = styled(Modal)``;
