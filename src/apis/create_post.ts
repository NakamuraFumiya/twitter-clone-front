import axios from "axios";
import { postIndex } from "../urls";

export const createPost = (message: any) => {
  console.log(message);
  return axios
    .post(postIndex, {
      message: message,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.error(e));
};
