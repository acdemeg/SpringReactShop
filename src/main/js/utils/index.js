import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCrow,
  faStar,
  faSpider,
  faDragon,
  faShoppingBasket,
  faUserShield,
  faTrashAlt,
  faPlusSquare,
  faMinusSquare,
  faPhoneSquareAlt,
  faEnvelope,
  faWallet,
  faDoorOpen,
  faCheck,
  faLock,
  faExclamation,
  faUser,
  faSearch,
  faPhone,
  faDesktop,
  faMemory,
  faPlug,
  faServer,
  faMicrochip,
  faFan,
  faBox,
  faSave,
  faShieldAlt,
  faSatelliteDish,
  faLaptop,
  faGamepad,
  faAtom,
  faRubleSign,
  faCalculator,
  faPencilAlt,
  faAd,
} from '@fortawesome/free-solid-svg-icons';

import compose from './compose';

// To make icons project-wide accessed
function initFontAwesomeLibrary() {
  library.add(
    faCrow,
    faStar,
    faSpider,
    faDragon,
    faShoppingBasket,
    faUserShield,
    faTrashAlt,
    faPlusSquare,
    faMinusSquare,
    faUser,
    faPhoneSquareAlt,
    faEnvelope,
    faWallet,
    faDoorOpen,
    faSearch,
    faCheck,
    faLock,
    faExclamation,
    faPhone,
    faDesktop,
    faMemory,
    faPlug,
    faServer,
    faMicrochip,
    faFan,
    faBox,
    faSave,
    faShieldAlt,
    faSatelliteDish,
    faLaptop,
    faGamepad,
    faAtom,
    faRubleSign,
    faCalculator,
    faPencilAlt,
    faAd
  );
}

const getNewIdGenerator = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

export { compose, initFontAwesomeLibrary, getNewIdGenerator };
