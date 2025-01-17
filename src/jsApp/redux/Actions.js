// Creating action types
export const ActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    ADD_CARD: 'ADD_CARD',
    ADD_ADDRESS: 'ADD_ADDRESS',
};

export const addToCart = (product, quantity) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload: { product, quantity },
    };
  };


export const increaseQuantity = (productId) => ({
    type: ActionTypes.INCREASE_QUANTITY,
    payload: productId
  });
  
  export const decreaseQuantity = (productId) => ({
    type: ActionTypes.DECREASE_QUANTITY,
    payload: productId
  });
  

export const addCard = (card) => {
    return {
        type: ActionTypes.ADD_CARD,
        payload: card
    }
}

export const addAddress = (address) => {
    return {
        type: ActionTypes.ADD_ADDRESS,
        payload: address,
    }
}