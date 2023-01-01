import { useEffect } from "react";
import { useState } from "react";
import { fetchPostDetail } from "../apis/post_detail";
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

const Post = styled.div`
  text-align: center;
`;

export const PostDetail = (props: any) => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetchPostDetail(props.postId).then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <>
      <HeaderWrapper>投稿詳細</HeaderWrapper>
      {post && (
        <Post key={post.ID}>
          <br />
          <div>
            <p>ID: {post.ID}</p>
            <p>メッセージ: {post.Message}</p>
            <p>To: {post.To ? post.To : "なし"}</p>
            <p>From: {post.From ? post.From : "なし"}</p>
          </div>
          <br />
        </Post>
      )}
    </>
  );
};
