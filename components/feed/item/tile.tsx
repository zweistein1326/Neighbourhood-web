import AttachmentTile from "./attachment";
import verified from '../../images/icons/verified.svg';
import Link from "next/link";
import Follow from "./follow";
import { VerifiedUser } from "@mui/icons-material";
import { Post } from "../../../dummydata/posts";
import { users } from "../../../dummydata/users";
import Like from "./stats/like";
import Comment from "./stats/comment";
import Share from "./stats/share";
import TileHeader from "./tile-header";
import { Typography } from "@mui/material";
import { useState } from "react";

const FeedTile = (props: any) => {

    const post: Post = props.post;
    const sender = users[Number(post.header.sender_id) - 1];
    console.log(post, sender);

    return (
        <div style={{ padding: '8px 20px', boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.05)', borderRadius: 20, margin: '16px 0px', width:'90%' }}>
            {/* HEADER */}
            <TileHeader sender={sender} post={post} />
            {/* INFO */}
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div>
                    <PostBody post={post} />
                    {post.info.assets.length > 0 ? <AttachmentTile assets={post.info.assets} /> : null}
                </div>
            </div>
            {/* STATS */}
            {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:"0px 8px", alignItems:'center', paddingBottom:12}}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Like likes={post.stats.likes} />
                    <Comment comments={post.stats.comments} />
                    <Share/>
                </div>
            </div> */}
        </div>
    )
}

const PostBody = ({post}: any) => {
    return (
        <Typography style={{ padding: "0px 8px", fontSize: '15px', marginBottom: 8 }}>
            { post.info.text }{ post.info.text.length > 3000 ? <span style={{ color: '#000' }}>... <span style={{ color: '#0066FF' }}>Read</span></span> : null }
        </Typography> 
    )
}

export default FeedTile;