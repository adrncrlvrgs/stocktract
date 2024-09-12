import { get_All, delete_User } from "../_constants/users.constants";
import { usersInitialStates } from "@/_context/initialState";

interface Action {
  type: string;
  payload?: any;
  error?: any;
}

const getAllUsers = (state = usersInitialStates.getAllUsers, action: Action) => {

  switch (action.type) {
    case get_All.GET_ALL_REQUEST:
      return { ...state, loading: true, error: null };

    case get_All.GET_ALL_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case get_All.GET_ALL_FAILURE:
      return { ...state, loading: false, error: action.error };
      
    case delete_User.DELETE_USER_SUCCESS:
      console.log('success')
      return {
        ...state,
        loading: false,
        users: state.users.filter((user: { id: any }) => user.id !== action.payload),
        
      };

    default:
      return state;
  }
};

const deleteUser = ( state = usersInitialStates.deleteUser, action: Action) =>{

  switch (action.type) {
    case delete_User.DELETE_USER_REQUEST:
      console.log('requested')
      return { ...state, loading: true, error: null };

    case delete_User.DELETE_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case delete_User.DELETE_USER_SUCCESS:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}

export {getAllUsers, deleteUser};
