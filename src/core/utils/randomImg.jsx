import IMG1 from '../../assets/images/icon/1.jpg';
import IMG2 from '../../assets/images/icon/2.jpg';
import IMG3 from '../../assets/images/icon/3.jpg';
import IMG4 from '../../assets/images/icon/4.jpg';
import IMG5 from '../../assets/images/icon/5.jpg';
import IMG6 from '../../assets/images/icon/6.jpg';
import IMG7 from '../../assets/images/icon/7.jpg';
import IMG8 from '../../assets/images/icon/8.jpg';
import IMG9 from '../../assets/images/icon/9.jpg';
import IMG10 from '../../assets/images/icon/10.jpg';
import IMG11 from '../../assets/images/icon/11.jpg';
import IMG12 from '../../assets/images/icon/12.jpg';
import IMG13 from '../../assets/images/icon/13.jpg';
import IMG14 from '../../assets/images/icon/14.jpg';
import IMG15 from '../../assets/images/icon/15.jpg';
import IMG16 from '../../assets/images/icon/16.jpg';
import IMG17 from '../../assets/images/icon/17.jpg';
import IMG18 from '../../assets/images/icon/18.jpg';
import IMG19 from '../../assets/images/icon/19.jpg';
import IMG20 from '../../assets/images/icon/20.jpg';
import IMG21 from '../../assets/images/icon/21.jpg';
import IMG22 from '../../assets/images/icon/22.jpg';
import IMG23 from '../../assets/images/icon/23.jpg';

const ITEM = {
  1: IMG1,
  2: IMG2,
  3: IMG3,
  4: IMG4,
  5: IMG5,
  6: IMG6,
  7: IMG7,
  8: IMG8,
  9: IMG9,
  10: IMG10,
  11: IMG11,
  12: IMG12,
  13: IMG13,
  14: IMG14,
  15: IMG15,
  16: IMG16,
  17: IMG17,
  18: IMG18,
  19: IMG19,
  20: IMG20,
  21: IMG21,
  22: IMG22,
  23: IMG23,
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getIcon = () => {
  const r = getRandom(1, 23);
  return { id: r, img: ITEM[r] };
};
