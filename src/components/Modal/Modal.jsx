import { useEffect } from 'react';
import propTypes from 'prop-types';

import {
  ModalOverlay,
  ModalWindow,
  ModalPic,
  ModalDescr,
} from './Modal.styled';


export const Modal = ({ src, alt, closeModal }) => {
  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <ModalOverlay 
      onClick={onBackdropClick}>
      <ModalWindow>
        <ModalPic 
        src={src} 
        alt={alt} />
        <ModalDescr>{alt}</ModalDescr>
      </ModalWindow>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
