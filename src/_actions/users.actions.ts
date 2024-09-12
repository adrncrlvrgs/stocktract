import { get_All, delete_User } from '../_constants/users.constants';
import userService from '../_service/users.service';

const request = (type: string) => ({ type });
const success = (type: string, payload: any) => ({ type, payload });
const failure = (type: string, error: any) => ({ type, error });

export const getAllUsers = () => async (dispatch: (arg0: { type: any; payload?: any; error?: any; }) => void) => {
  dispatch(request(get_All.GET_ALL_REQUEST));
  try {
    const users = await userService.getUsers();
    dispatch(success(get_All.GET_ALL_SUCCESS, users));
  } catch (error) {
    dispatch(failure(get_All.GET_ALL_FAILURE, error?.toString()));
  }
};

// export const updateUser = (userId: any, userData: any) => async (dispatch: (arg0: { type: any; payload?: any; error?: any; }) => void) => {
//   dispatch(request(usersConstants.UPDATE_USER_REQUEST));
//   try {
//     const updatedUser = await userService.updateUser(userId, userData);
//     dispatch(success(usersConstants.UPDATE_USER_SUCCESS, updatedUser));
//   } catch (error) {
//     dispatch(failure(usersConstants.UPDATE_USER_FAILURE, error?.toString()));
//   }
// };

// export const createUser = (userData: any) => async (dispatch: (arg0: { type: any; payload?: any; error?: any; }) => void) => {
//   dispatch(request(usersConstants.CREATE_USER_REQUEST));
//   try {
//     const newUser = await userService.createUser(userData);
//     dispatch(success(usersConstants.CREATE_USER_SUCCESS, newUser));
//   } catch (error) {
//     dispatch(failure(usersConstants.CREATE_USER_FAILURE, error?.toString()));
//   }
// };

export const deleteUser = (userId: any) => async (dispatch: any) => {
  dispatch(request(delete_User.DELETE_USER_REQUEST));
  try {
    const deletedUserId = await userService.deleteUser(userId);
    dispatch(success(delete_User.DELETE_USER_SUCCESS, deletedUserId));
  } catch (error) {
    dispatch(failure(delete_User.DELETE_USER_FAILURE, error?.toString()));
  }
};