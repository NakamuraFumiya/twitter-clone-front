import { useEffect } from "react";
import { useState } from "react";
import { fetchPosts } from "../apis/posts";
import { createPost } from "../apis/create_post";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Center = styled.div`
  text-align: center;
`;

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    createPost(data.get("message"));
  };

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <HeaderWrapper>投稿一覧</HeaderWrapper>
      <Center>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type="text" id="message" name="message" />
          <br />
          <input type="submit" value="Tweet" />
        </form>
      </Center>
      {posts.map((post, index) => (
        <Link to={`post_detail/${post.ID}`} key={index}>
          <Center>
            <br />
            <div>
              <p>ID: {post.ID}</p>
              <p>メッセージ: {post.Message}</p>
              <p>To: {post.To ? post.To : "なし"}</p>
              <p>From: {post.From ? post.From : "なし"}</p>
            </div>
            <br />
          </Center>
        </Link>
      ))}
    </>
  );
};
