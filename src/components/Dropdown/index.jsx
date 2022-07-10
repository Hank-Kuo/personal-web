import React, { Component } from "react";

import { S } from "./styles";

const ITEMS = ["12", "123", "124", "125", "126"];

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

  setValue = (value) => {
    this.props.onChange(
      this.props.value.includes(value) ? this.props.value : [...this.props.value, value],
    );
  };

  onChange = (e) => {
    const { value } = e.target;
    if (value.slice(-1) === "/" && value.slice(0, value.length - 1).length !== 0) {
      this.setState(() => ({
        value: "",
      }));
      this.setValue(value.slice(0, value.length - 1));

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
      <S.Wrapper ref={this.wrapperRef}>
        <S.Label
          active={
            this.state.focus || this.props.value.length !== 0 || this.state.value.length !== 0
          }
        >
          Tags
        </S.Label>
        <S.Box htmlFor={this.props.name}>
          <S.TagBox>
            {this.props.value.map((v) => (
              <S.Tag>{v}</S.Tag>
            ))}
          </S.TagBox>
          <S.Input
            type="text"
            id={this.props.name}
            name={this.props.name}
            autoComplete="off"
            value={this.state.value}
            onChange={this.onChange}
            onFocus={this._onFocus}
            onKeyDown={this._handleKeyDown}
            active={
              this.state.focus || this.props.value.length === 0 || this.state.value.length !== 0
            }
          />
          <S.Container active={this.state.focus}>
            {ITEMS.map((v, i) => (
              <S.Item
                key={i}
                active={this.props.value.includes(v)}
                onClick={() => {
                  if (this.props.value.includes(v)) {
                    this.props.onChange(this.props.value.filter((value) => value !== v));
                  } else {
                    this.setValue(v);
                  }
                }}
              >
                {v}
              </S.Item>
            ))}
          </S.Container>
        </S.Box>
      </S.Wrapper>
    );
  }
}
export default Dropdown;
