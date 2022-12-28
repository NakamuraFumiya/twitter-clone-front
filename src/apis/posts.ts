import axios from "axios";
import { postIndex } from "../urls";

export const fetchPosts = () => {
  return axios
    .get(postIndex)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => console.error(e));
};
