import { useEffect } from "react";
import { fetchPosts } from "../apis/posts";

export const Posts = () => {
  useEffect(() => {
    fetchPosts();
  });

  return <></>;
};
