import React from 'react';

import { S } from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <S.LogoLink>Hank Kuo</S.LogoLink>
      </S.Logo>
      <S.NavWrapper>
        <S.Nav>
          <S.NavItem>
            <S.NavText href="/">HOME</S.NavText>
          </S.NavItem>
          <S.NavItem>
            <S.NavText href="/about">ABOUT</S.NavText>
          </S.NavItem>
          <S.NavItem>
            <S.NavText href="/blog">BLOG</S.NavText>
          </S.NavItem>
          <S.NavItem>
            <S.NavText href="/project">PROJECT</S.NavText>
          </S.NavItem>
          <S.NavItem>
            <S.NavText href="/contact">CONTACT</S.NavText>
          </S.NavItem>
        </S.Nav>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
