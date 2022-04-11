import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { IPost } from "../modals/IPost";
import { postAPI } from "../services/PostServices";
import { MyBtn } from "./MyBtn";
import { PostItem } from "./PostItem";
import style from "./PostuSty.module.css";

const PostComponent = () => {
  const [limit, setLimit] = useState(7);
  const {data: posts, isLoading, refetch, error} = postAPI.useFetchPostqueryQuery(100);
  const {fetching} = useAppSelector(state => state.UserReducer)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  useEffect(() => {
    setTimeout(() => {
      setLimit(3);
    }, 2000);
  }, []);

  useEffect(() => {
    refetch();
    console.log(fetching)
  },[fetching])

  const hendleCreate = async () => {
    const title = prompt();
    await createPost({title, body: title} as IPost)
  }

  const hendlerDELETE = async (post: IPost) => {
    await deletePost(post)
  }
  const hendlerUPDATE = async (post: IPost) => {
    console.log('3 - ', post);
    await updatePost(post)
  }

  return (
    <div className={style.AllPost}>
      <button onClick={() => hendleCreate()}>Add new post</button>
      {posts && posts.map((post) => <PostItem post={post} remove={hendlerDELETE} update={hendlerUPDATE} key={post.id}/>)}
      {isLoading && <h1>Йде загрузка...</h1>}
      {error && <h1>Виникла помилка</h1>}
    </div>
  );
};

export default PostComponent;
