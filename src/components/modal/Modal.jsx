import React, { Component } from 'react';
import '../styles.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    document.documentElement.style.overflow = 'auto';
  }

  closeModal = e => {
    if (e.code === 'Escape') this.props.toggleModal();
    if (e.target === e.currentTarget) this.props.toggleModal();
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.closeModal}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
