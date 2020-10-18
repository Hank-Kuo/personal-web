import React from 'react';

import { initGA, logPageView } from '../../core/utils/analytics';
import { S } from './styles';

const Header = () => {
  const [isClick, setIsClick] = React.useState(false);
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <S.Wrapper>
      <S.Logo>
        <S.LogoLink href="/">Hank Kuo</S.LogoLink>
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
            <S.NavText href="/contact">CONTACT</S.NavText>
          </S.NavItem>
        </S.Nav>
      </S.NavWrapper>
      <S.MenuToggle
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        <S.MenuIcon show={isClick}></S.MenuIcon>
      </S.MenuToggle>
      <S.MenuBox show={isClick}>
        <S.MenuContainer show={isClick}>
          <S.NavText href="/">HOME</S.NavText>
          <S.NavText href="/about">ABOUT</S.NavText>
          <S.NavText href="/blog">BLOG</S.NavText>
          <S.NavText href="/contact">CONTACT</S.NavText>
        </S.MenuContainer>
      </S.MenuBox>
    </S.Wrapper>
  );
};

export default Header;
