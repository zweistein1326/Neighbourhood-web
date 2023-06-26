import Link from "next/link";
import { useContext } from "react";
import { users } from "../../dummydata/users";
import PostContext from "../../hooks/posts-context";

const CreatePost = () => { 
    return (
        <Link href="/post/create" style={{width:'90%'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 20px', border:'1px solid rgba(0,0,0,0.2)', marginTop: 12, borderRadius: 12, width: '100%' }}>
                <img src={users[0].profile_image_url} style={{height:40, width:40, borderRadius:40, backgroundColor:'#FFF', marginRight:12}}/>
                <p>{`What's new?`}</p>
            </div>  
        </Link>
    );
}

export default CreatePost;