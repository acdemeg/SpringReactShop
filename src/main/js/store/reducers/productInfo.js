import { actionsEnum } from '../../constants';

const updateProductInfo = (state, action) => {
  if (state === undefined) {
    return {
      product: null,
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case actionsEnum.PRODUCT_REQUESTED:
      return {
        product: null,
        loading: true,
        error: null,
      };

    case actionsEnum.PRODUCT_LOADED:
      return {
        product: action.payload,
        loading: false,
        error: null,
      };

    case actionsEnum.PRODUCT_ERROR:
      return {
        product: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state.productInfo;
  }
};

export default updateProductInfo;
