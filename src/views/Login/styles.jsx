import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    margin-top: 8rem;
    position: relative;
  `,
  Form: styled.form``,
  Box: styled.div`
    width: 100%;
    max-width: 450px;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0.5em;
    margin: 50px auto;
    padding: 30px;
  `,
  InputGroup: styled.div`
    display: grid;
    position: relative;
  `,
  InputLabel: styled.label`
    font-size: 1.6rem;
    color: #217093;
    font-weight: 700;
  `,
  Input: styled.input`
    padding: 0.4em 1em 0.5em;
    background-color: #f3fafd;
    border: ${(props)=> props.error ? 'solid 2px red': 'solid 2px #217093'};
    border-radius: 4px;
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 100%;
    height: 65px;
    font-size: 1.55em;
    color: #353538;
    font-weight: 600;
    font-family: inherit;
    -webkit-transition: box-shadow 0.2s linear, border-color 0.25s ease-out;
    transition: box-shadow 0.2s linear, border-color 0.25s ease-out;
    &:focus {
      outline: none;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border: solid 2px $medBlue;
    }
  `,
  Toggle: styled.div`
    position: absolute;
    top: 10px;
    right: 30px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #217093;
    font-weight: 700;
  `,
  ToggleInput: styled.input`
    display: none;
  `,
  ToggleShow: styled.label`
    width: 23px;
    height: 23px;
    border: 2px solid;
    position: relative;
    top: 3px;
    left: 10px;
    background-color: #f3fafd;
    &:after {
      display: ${(props) => (props.active ? 'block' : 'none')};
      content: '';
      position: absolute;
      left: 7px;
      top: 0px;
      width: 7px;
      height: 15px;
      border: solid #217093;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  `,
  Btn: styled.button`
    width: 90%;
    margin: 40px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.65em 1em 1em;
    background-color: #4eb8dd;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: none;
    width: 100%;
    height: 55px;
    color: #fff;
    font-weight: 600;
    font-family: inherit;
    -webkit-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;
    outline: none;
  `,
  ErrorText: styled.span`
    font-size: 0.7em;
    color: red;
  `,
};

export const I = {
  Wrapper: styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 1em;
    border-radius: 50%;
    pointer-events: none;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: inherit;
      height: inherit;
      box-sizing: border-box;
      border: solid 2.5px #217093;
      border-radius: 50%;
    }
  `,
  Box: styled.div`
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    border-radius: 50%;
    padding-bottom: 100%;
  `,
  Svg: styled.svg`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  `,
};
