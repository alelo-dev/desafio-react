import React from 'react'
import ModalWrapper from './styles'

const Modal = (props) => {

  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode === 27) {
      props.requestClose()
    }
  }

  return (
    <>
      <ModalWrapper id="dimmer">
        <div className="modal" className={`modal` + (props.center === "true" ? ' center' : '') + (props.compact === "true" ? ' compact' : '') + (props.className ? ` ` + props.className : '') + (props.negative === "true" ? ' negative' : '')}>
          <header>
            <div>
              {props.title && 
                <h2>{props.title}</h2>
              }
            </div>
            {props.info && 
              <div className="info">
                <h5>{props.info}</h5>
              </div>
            }
            <div>
              <button onClick={props.requestClose}><i className="fas fa-times"></i></button>
            </div>
          </header>
            {props.children}
        </div>
      </ModalWrapper>
    </>
  );
};

export default Modal;