import { useState } from "react";

const Follow = () => { 

    const [isFollowing, setIsFollowing] = useState(0);

    return (
        <div style={{border:'1px solid #0066FF', padding:'0px 20px', borderRadius:60}}>
            {
                !isFollowing ? <p style={{fontSize:12}}>+ Follow</p> :
                    <p style={{fontSize:12}}>+ Unfollow</p>
            }
        </div>
    )
}

export default Follow;