import Heading from "components/layout/Heading";
import Layout from "components/layout/Layout";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import PostItem from "module/post/PostItem";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const AuthorPage = () => {
    const [post, setPost] = useState([])
    const params = useParams()
    // console.log("🚀 ~ CategoryPage ~ params:", params)

    useEffect(()=>{
        async function fetchAuthorData() {
          const docRef = query(collection(db,"posts"), where("user.username","==",params.slug))
          const results = []
          onSnapshot(docRef,snapshot => {
              snapshot.forEach(doc => {
                //   console.log("🚀 ~ fetchData ~ doc:", doc.data())
                  results.push({
                      id: doc.id,
                      ...doc.data(),
                  })
              })
              setPost(results)
          })
        }  
        fetchAuthorData()
      },[params.slug])
    
    if(post.length <= 0) return <PageNotFound></PageNotFound>;
    // console.log("🚀 ~ CategoryPage ~ post:", post)

  return (
    <Layout>
      <div className="container">
      <div className="pt-10"></div>
      <Heading>Directory - {params.slug}</Heading>
            <div className="grid-layout grid-layout--primary">
                {post.map(item => (
                    <PostItem key={item.id} data={item}></PostItem>
                ))}
            </div>
      </div>
    </Layout>
  );
};

export default AuthorPage;
