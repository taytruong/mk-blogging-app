import Heading from 'components/layout/Heading';
import { db } from 'firebase-app/firebase-config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';

const PostRelated = ({categoryId = ""}) => {
    const [post, setPost] = useState([])
    useEffect(()=>{
        const docRef = query(collection(db,"posts"), where("category.name","==",categoryId))
        onSnapshot(docRef, snapshot =>{
            const results = [];
            snapshot.forEach(doc => {
              results.push({
                id: doc.id,
                ...doc.data()
              })      
            })
            // console.log("🚀 ~ useEffect ~ results:", results)
            setPost(results)
        })
    },[categoryId])
    if(!categoryId || post.length.length <= 0) return null
    return (
        <div className="post-related">
            <Heading>Related Blog</Heading>
            <div className="grid-layout grid-layout--primary">
                {post.map(item => (
                    <PostItem key={item.id} data={item}></PostItem>
                ))}
            </div>
          </div>
    );
};

export default PostRelated;