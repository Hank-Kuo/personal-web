import React, { Component } from "react";

import { S } from "./styles";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = {
      value: "",
      focus: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  addValue = (value) => {
    this.props.onChange([...this.props.value, value]);
  };

  onChange = (e) => {
    const { value } = e.target;
    if (value.slice(-1) === "/" && value.slice(0, value.length - 1).length !== 0) {
      this.setState(() => ({
        value: "",
      }));
      if (!this.props.value.includes(value)) {
        this.addValue(value.slice(0, value.length - 1));
      }

      return;
    }
    this.setState(() => ({ value }));
  };

  _handleKeyDown = (e) => {
    if (e.key === "Backspace" && this.state.value.length === 0) {
      this.props.onChange(this.props.value.slice(0, this.props.value.length - 1));
    }
  };

  _onFocus = () => {
    this.setState({
      focus: true,
    });
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState(() => ({ focus: false }));
    }
  };

  render() {
    return (
      <S.Wrapper ref={this.wrapperRef} error={this.props.error}>
        <S.Label
          active={
            this.state.focus || this.props.value.length !== 0 || this.state.value.length !== 0
          }
        >
          Tags
        </S.Label>
        <S.Box htmlFor={`${this.props.name}-dropdown`}>
          <S.TagBox>
            {this.props.value.map((v) => (
              <S.Tag>{v}</S.Tag>
            ))}
          </S.TagBox>
          <S.Input
            type="text"
            id={`${this.props.name}-dropdown`}
            name={`${this.props.name}-dropdown`}
            autoComplete="off"
            value={this.state.value}
            onChange={this.onChange}
            onFocus={this._onFocus}
            onKeyDown={this._handleKeyDown}
            active={
              this.state.focus || this.props.value.length === 0 || this.state.value.length !== 0
            }
          />
          <S.Container active={this.state.focus}>{this.props.renderTagsList()}</S.Container>
        </S.Box>
      </S.Wrapper>
    );
  }
}
export default Dropdown;
