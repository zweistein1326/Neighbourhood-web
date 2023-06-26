import { createContext } from "react";
import { posts } from "../dummydata/posts";

const PostContext = createContext({posts: posts, addPost:(post:any)=>{}, updatePost:()=>{}, filters:[], setFilters:(new_filters: any)=>{}});

export default PostContext;