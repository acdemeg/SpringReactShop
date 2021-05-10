import { actionsEnum } from '../../constants';

const updateGoodsList = (state, action) => {
  if (state === undefined) {
    return {
      goods: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case actionsEnum.GOODS_REQUESTED:
      return {
        goods: [],
        loading: true,
        error: null,
      };

    case actionsEnum.GOODS_LOADED:
      return {
        goods: action.payload,
        loading: false,
        error: null,
      };

    case actionsEnum.GOODS_ERROR:
      return {
        goods: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.goodsList;
  }
};

export default updateGoodsList;
