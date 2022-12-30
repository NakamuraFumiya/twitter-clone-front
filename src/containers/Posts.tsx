import { useEffect } from "react";
import { useState } from "react";
import { fetchPosts } from "../apis/posts";

type Post = {
  id: number;
  message: string;
  to: string;
  from: string;
  created_at: Date;
};

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      Test
      {posts.map((item) => (
        <div>
          <p>{item.id}</p>
        </div>
      ))}
    </>
  );
};
