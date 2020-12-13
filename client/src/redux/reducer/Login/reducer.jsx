const initialState = {
  isLogin: false,
  isLoading: false,
  error: false,
};

const loginReduce = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "SET_LOGIN":
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default loginReduce;
