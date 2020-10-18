import styled from 'styled-components';

import { device } from '../../core/constants/styles';

export const S = {
  Wrapper: styled.header`
    width: 100%;
    height: 72px;
    background-color: transparent;
    position: absolute;
    top: 0;
    z-index: 500;
  `,
  Box: styled.div``,
  Logo: styled.div`
    display: inline-block;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 50px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 501;
  `,
  LogoLink: styled.a`
    display: block;
    margin: 20px 0 0 0;
    padding: 0;
    outline: 0;
    border: none;
    width: 170px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    font-size: 2.5rem;
    color: #ffff;
    opacity: 0.8;
    cursor: pointer;
    text-decoration: none !important;
    font-family: 'Yesteryear', cursive;
  `,
  LogoImg: styled.img`
    max-width: 100%;
    height: auto;
  `,

  NavWrapper: styled.nav`
    font-family: 'Fredoka One', cursive;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    position: absolute;
    top: 9px;
    right: 50px;
    @media ${device.XM} {
      display: none;
    }
  `,
  Nav: styled.ul`
    display: inline-block;
    list-style: none;
    margin: 0;
    height: 72px;
  `,
  NavItem: styled.li`
    display: inline-block;
    padding-left: 0;
    margin-right: 2rem;
  `,
  NavText: styled.a`
    display: block;
    line-height: 72px;
    color: #fff;
    cursor: pointer;
    text-decoration: none !important;
  `,
  MenuToggle: styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 2rem;
    right: 2rem;
    z-index: 1001;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    @media ${device.XM} {
      display: block;
    }
    @media ${device.M} {
      display: none;
    }
  `,
  MenuIcon: styled.span`
    position: absolute;
    top: 0.5rem;
    right: 0;
    width: 1.6rem;
    height: 2px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.show ? 'rotate(720deg)' : 'none')};
    background: ${(props) => (props.show ? 'transparent' : 'white')};

    &:before {
      content: '';
      position: absolute;
      top: -0.5rem;
      width: 2rem;
      height: 2px;
      background: white;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      transform: ${(props) =>
        props.show ? 'rotate(45deg) translate(5px, 8px)' : 'none'};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0.5rem;
      width: ${(props) => (props.show ? '2rem' : '1.2rem')};
      height: 2px;
      background: white;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      transform: ${(props) =>
        props.show ? 'rotate(-45deg) translate(3px, -6px)' : 'none'};
    }
  `,
  MenuBox: styled.div`
    width: 100%;
    position: absolute;
    z-index: 1000;
    background: black;
    transition: transform 0.26s ease;
    transform: scaleY(0);
    transform-origin: top;
    transform: ${(props) => (props.show ? 'scaleY(1)' : 'scaleY(0)')};
  `,
  MenuContainer: styled.ul`
    transition: all 0.3s ease-in-out;
    margin-top: 2.5rem;
    text-align: center;
    padding: 0;
  `,
  MenuItem: styled.li``,
};
