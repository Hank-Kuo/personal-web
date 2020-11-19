import React from 'react';

import { S } from './styles';

import ERRORIMG from '../../assets/images/error_outline.svg';
import CLOSEIMG from '../../assets/images/close.svg';

export default function () {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(!visible);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrapper visible={visible} onClick={() => setVisible(false)}>
      <S.Img src={ERRORIMG} alt="" left/>
       趕快來這邊留言喔！！！
      <S.Img src={CLOSEIMG} alt="" right />
    </S.Wrapper>
  );
}
