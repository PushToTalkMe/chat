import { IUser } from "../../../interfaces/user.interface";

const ADD_USER = "ADD_USER";

interface UserAction {
  type: string;
  payload: IUser;
}

const userJson = localStorage.getItem("user");
  
const user = userJson !== null ? JSON.parse(userJson) : {};

export const userReducer = (
  state: IUser = user,
  action: UserAction
) => {
  switch (action.type) {
    case ADD_USER:
      state = {...action.payload};
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
