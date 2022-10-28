
const initialState = {
};

export const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_USER:
    //   return {...state, user: action.payload, menu: getUserMenu(action.payload)};
    // case SET_PREVIEW:
    //   return {...state, isPreview: action.payload};
    default:
      return state;
  }
};
