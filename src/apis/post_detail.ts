import axios from "axios";
import { postIndex } from "../urls";

export const fetchPostDetail = (postId: string) => {
  return axios
    .get(`${postIndex}/${postId}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
