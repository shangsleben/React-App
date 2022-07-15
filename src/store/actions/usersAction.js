import { GET_USERS, USERS_ERROR } from "../types";
import axios from "axios";

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get(`https://immense-bastion-95145.herokuapp.com/api/users`);

    dispatch({
      type: GET_USERS,
      payload: res.data.users
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};
