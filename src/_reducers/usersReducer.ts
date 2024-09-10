import { usersConstants } from "../_constants/users.constants";

interface Action {
  type: string;
  payload?: any;
  error?: any;
}

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: Action) => {
  console.log('UserReducer Action:', action); // Debug log
  switch (action.type) {
    case usersConstants.GET_ALL_REQUEST:
      return { ...state, loading: true, error: null };

    case usersConstants.GET_ALL_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case usersConstants.GET_ALL_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default userReducer;
