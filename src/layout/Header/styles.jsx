import styled from 'styled-components';

export const S = {
  Wrapper: styled.header`
    width: 100%;
    height: 72px;
    background-color: transparent;
    position: absolute;
    top: 0;
    z-index: 500;
  `,
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
    font-size: 2rem;
    color: #ffff;
    opacity: 0.8;
  `,
  LogoImg: styled.img`
    max-width: 100%;
    height: auto;
  `,

  NavWrapper: styled.nav`
    font-family: montserrat-bold, sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    position: absolute;
    top: 9px;
    right: 50px;
    @media only screen and (max-width: 800px) {
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
    text-decoration: none;
  `,
};
