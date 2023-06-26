import { useContext } from "react";
import { Post } from "../../dummydata/posts";
import PostContext from "../../hooks/posts-context";
import FeedTile from "./item/tile";

const Feed = () => { 
    const {posts} = useContext(PostContext);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <div style={{ display: 'flex', flexDirection: 'column', width:'100%', justifyContent:'center', alignItems:'center',}}>
                {posts.map((post: Post, index: number) => <FeedTile key={index} post={post} />)}  
            </div>
        </div>
    )
}

export default Feed;
