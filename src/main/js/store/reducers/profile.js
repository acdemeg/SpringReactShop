import { actionsEnum, usersRoleEnum, typeModalEnum } from '../../constants';

const updateProfile = (state, action) => {

  if (state === undefined) {
    return {
      id: null,
      isOpenModal: false,
      balance: 0,
      email: '',
      phone: '',
      name: '',
      titleModal: '',
      typeModal: undefined,
      role: usersRoleEnum.USER,
      imagePath: null,
    };
  }

  const updateInfo = (state, action) => {
    const { typeModal } = state.profile;

    if (typeModal === typeModalEnum.FILL_UP) {
      return {
        ...state.profile,
        balance: action.payload,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.EMAIL) {
      return {
        ...state.profile,
        email: action.payload,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.PHONE) {
      return {
        ...state.profile,
        phone: action.payload,
        isOpenModal: false,
      };
    }

    if (typeModal === typeModalEnum.NAME) {
      return {
        ...state.profile,
        name: action.payload,
        isOpenModal: false,
      };
    }
  };

  const openNeedModal = (state, action) => ({
    isOpenModal: true,
    id: state.profile.id,
    role: state.profile.role,
    balance: state.profile.balance,
    email: state.profile.email,
    phone: state.profile.phone,
    name: state.profile.name,
    imagePath: state.profile.imagePath,
    typeModal: action.payload.type,
    titleModal: action.payload.title,
  });

  const cancelModal = state => ({
    id: state.profile.id,
    role: state.profile.role,
    email: state.profile.email,
    phone: state.profile.phone,
    name: state.profile.name,
    balance: state.profile.balance,
    imagePath: state.profile.imagePath,
    isOpenModal: false,
  });

  switch (action.type) {
    case actionsEnum.DEBIT_BALANCE:
      return {
        ...state.profile,
        balance: action.payload,
      };

    case actionsEnum.OPEN_MODAL_WINDOW:
      return openNeedModal(state, action);

    case actionsEnum.CANCEL_MODAL_WINDOW:
      return cancelModal(state);

    case actionsEnum.SUBMIT_MODAL_WINDOW:
      return updateInfo(state, action);

    case actionsEnum.PROFILE_LOADED:
      return {
        ...state.profile,
        id: action.payload.id,
        role: action.payload.role,
        balance: action.payload.balance,
        email: action.payload.email,
        phone: action.payload.phone,
        name: action.payload.name,
        imagePath: action.payload.imagePath,
      };

    case actionsEnum.PROFILE_ERROR:
      return {
        ...state.profile,
      };

    case actionsEnum.SUBMIT_MODAL_WINDOW:
      return updateInfo(state, action);

    default:
      return state.profile;
  }
};

export default updateProfile;
