import React, { useEffect, useState } from "react";
import { IPost } from "../modals/IPost"
import { postAPI } from "../services/PostServices"
import { PostItem } from "./PostItem"
import style from "./PostuSty.module.css"

const PostComponent2 = () => {
    const [limit, setLimit] = useState(7);
    const {data: posts, error, isLoading} = postAPI.useFetchPostqueryQuery(limit, {pollingInterval: 10000})
    
    useEffect(() => {
        setTimeout(() => {
          setLimit(4);
        }, 2000);
      }, []);

    return (
    <div className={style.AllPost}>
        {/*{posts && posts.map(post => 
            <PostItem post={post}/>
        )}   
        {isLoading && <h1>Йде загрузка...</h1>} 
        {error && <h1>Виникла помилка</h1>}*/}
    </div>        
    );
};

export default PostComponent2