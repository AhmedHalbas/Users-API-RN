export const usersReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'USERS_LIST': {
      return { ...state, list: action.payload, pages: action.totalPages };
    }

    case 'USER_DETAILS': {
      return { ...state, details: action.payload };
    }

    case 'CLEAR_DETAILS': {
      return { ...state, details: action.payload };
    }

    case 'ADD_USER': {
      return { ...state, user: action.payload };
    }
  }
  return state;
};
