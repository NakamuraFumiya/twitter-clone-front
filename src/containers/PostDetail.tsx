import { useEffect } from "react";
import { useState } from "react";
import { fetchPostDetail } from "../apis/post_detail";
import styled from "styled-components";
import { useParams } from "react-router-dom";
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

export const PostDetail = () => {
  let id: string = `${useParams().id}`;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetchPostDetail(id).then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <>
      <HeaderWrapper>投稿詳細</HeaderWrapper>
      {post && (
        <Center key={post.ID}>
          <br />
          <div>
            <p>ID: {post.ID}</p>
            <p>メッセージ: {post.Message}</p>
            <p>To: {post.To ? post.To : "なし"}</p>
            <p>From: {post.From ? post.From : "なし"}</p>
          </div>
          <br />
        </Center>
      )}
      <Center>
        <Link to="/">
          <button>TOPに移動する</button>
        </Link>
      </Center>
    </>
  );
};
