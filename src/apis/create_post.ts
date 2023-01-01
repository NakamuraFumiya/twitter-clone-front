import axios from "axios";
import { postIndex } from "../urls";

export const createPost = (message: any) => {
  const data = new FormData();
  data.append("message", message);
  return axios
    .post(postIndex, data)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.error(e));
};
