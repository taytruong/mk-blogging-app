import Heading from 'components/layout/Heading';
import { db } from 'firebase-app/firebase-config';
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore';
import PostItem from 'module/post/PostItem';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HomeRelatedPageStyles = styled.div`
  padding-bottom: 100px;
`;

const HomeRelated = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      // where("status", "==", 1),
      where("hot", "==", false),
      limit(4)
    );
    onSnapshot(queries, (snapshot) => {
      const results = []
      snapshot.forEach(doc => {
        results.push({
          id:doc.id,
          ...doc.data()
        })
      })
      setPosts(results)
    });
  }, []);
  if (posts.length <= 0) return null;
  // console.log("🚀 ~ HomeFeature ~ posts:", posts[0])
    return (
        <HomeRelatedPageStyles>
           <div className='container' >
           <div className="post-related">
            <Heading>Related Blog</Heading>
            <div className="grid-layout grid-layout--primary">
                {posts.map(item => (
                    <PostItem key={item.id} data={item}></PostItem>
                ))}
            </div>
          </div>
           </div>
        </HomeRelatedPageStyles>
    );
};

export default HomeRelated;