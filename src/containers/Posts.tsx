import { useEffect } from "react";
import { useState } from "react";
import { fetchPosts } from "../apis/posts";
import styled from "styled-components";

type Post = {
  ID: number;
  Message: string;
  To: string;
  From: string;
  CreatedAt: Date;
};

const HeaderWrapper = styled.h2`
  text-align: center;
  position: sticky;
  top: 0;
`;

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <HeaderWrapper>投稿一覧</HeaderWrapper>
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
