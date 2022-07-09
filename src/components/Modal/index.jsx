import React, { Component } from "react";
// import PropTypes from 'prop-types';

import { S } from "./styles";

class Modal extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      const body = document.getElementsByTagName("body")[0];
      if (this.props.visible) {
        body.setAttribute("style", "overflow: hidden;");
      } else {
        body.setAttribute("style", "overflow: auto;");
      }
    }
  }

  render() {
    return (
      <S.Wrapper visible={this.props.visible}>
        <S.ModalGrey
          onClick={() => {
            this.props.onClose();
          }}
        />
        <S.Container>{this.props.children}</S.Container>
      </S.Wrapper>
    );
  }
}
/*
Modal.defaultProps = {
  visible: false,
  onClose: () => {},
  margin: '',
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  margin: PropTypes.string,

  wrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.element.isRequired,
};
*/
export default Modal;
