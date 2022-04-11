import React from "react"
import { FC } from "react"
import { IPost } from "../modals/IPost"
import { postAPI } from "../services/PostServices"
import style from "./PostuSty.module.css" 

interface Postitm{
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

export const PostItem: FC<Postitm> = ({post, update, remove}) => {

    const hendlerUPDATE = () => {
        console.log('1 - ', post);
        const title = prompt() || ''
        update({...post, title})
        console.log('2 - ', post);
    }
    const hendlerDELETE = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    return (
        <div>
            <div className={style.OnePost} onClick={hendlerUPDATE}>
                {post.id}.{post.title}<br/>
                {post.body} 
                <button onClick={hendlerDELETE}>Delete</button>
            </div>      
        </div>        
    );
};
