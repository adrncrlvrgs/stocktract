import { getAllUsers, deleteUser } from "./usersReducers";

interface Action {
  type: string;
  payload?: any;
  error?: any;
}

const combineReducers = (slices: { [key: string]: (state: any, action: Action) => any }) => (state: any, action: Action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );


//put all reducers here
const rootReducer = combineReducers({
  getAllUsers,
  deleteUser // Ensure the key matches the key used in the initialState
});


export default rootReducer;
