import { useEffect } from "react";
import { useState } from "react";
import { fetchPosts } from "../apis/posts";

type Post = {
  ID: number;
  Message: string;
  To: string;
  From: string;
  CreatedAt: Date;
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
      <h2>投稿一覧</h2>
      {posts.map((post) => (
        <div>
          <br />
          <div>
            <p>ID: {post.ID}</p>
            <p>メッセージ: {post.Message}</p>
            <p>To: {post.To ? post.To : "なし"}</p>
            <p>From: {post.From ? post.From : "なし"}</p>
          </div>
          <br />
        </div>
      ))}
    </>
  );
};
