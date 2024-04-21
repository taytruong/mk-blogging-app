import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
import slugify from "slugify";
const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      border-radius: 12px;
    }
    &-category {
      margin-bottom: 8px;
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      margin-left: auto;
      color: #6b6b6b;
    }
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
    &-title {
      margin-bottom: 8px;
    }
  }
`;
const PostNewestItem = ({data}) => {
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  if(!data.id)return null;
  return (
    <PostNewestItemStyles>
      <PostImage
        url={data.image}
        alt=""
        to={data?.slug}
      ></PostImage>
      <div className="post-content">
        <PostCategory type="secondary" to={data?.category?.slug}>{data.category?.name}</PostCategory>
        <PostTitle  to={data?.slug}>
          {data.title}
        </PostTitle>
        <PostMeta
       to={slugify(data?.user?.username || "", { lower: true })}
            authorName={data?.user?.fullname}
            date={formatDate}
      ></PostMeta>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
