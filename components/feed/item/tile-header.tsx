import { VerifiedUser } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import UsersContext from "../../../hooks/users-context-provider";

const TileHeader = ({ sender, post }: any) => { 
    const [hoverVerify, setHoverVerify] = useState(false);

    const calculatePostTime = () => {
        
        const post_time = new Date(post.header.timestamp);
        const current_time = new Date();
        console.log(post.header.timestamp, current_time.getTime())
        // const difference = Math.ceil((current_time - post_time)/1000);
        // console.log(difference, 'difference');
        let string = '';
        
        let difference_in_secs = current_time.getSeconds() - post_time.getSeconds();
        difference_in_secs = difference_in_secs > 0 ? difference_in_secs : 60 - difference_in_secs;

        let difference_in_minutes = difference_in_secs >= 0 ? current_time.getMinutes() - post_time.getMinutes() : current_time.getMinutes() - post_time.getMinutes() - 1;
        difference_in_minutes = difference_in_minutes >= 0 ? difference_in_minutes : 60 - difference_in_minutes;
        
        let difference_in_hours = difference_in_minutes ? current_time.getHours() - post_time.getHours() : current_time.getHours() - post_time.getHours() - 1;
        difference_in_hours = difference_in_hours >= 0 ? difference_in_hours : 24 - difference_in_hours;
        
        let difference_in_days = difference_in_hours >= 0 ? current_time.getDate() - post_time.getDate() : current_time.getDate() - post_time.getDate() - 1;

        if (difference_in_days > 0) {
            string += `${difference_in_days}days`;
        }
        else {
            if (difference_in_hours > 0) {
                string += `${difference_in_hours}hrs`;
            }
            else {
                if (difference_in_minutes > 0) {
                    string += `${difference_in_minutes}mins`;
                }
                else {
                    string += `${difference_in_secs}secs`;
                }
            }
        }
        return string;
    }

    const router = useRouter();

    const { updateUser } = useContext(UsersContext);  
    return (
        <div className="sender_info" style={{ padding: 10, margin: 4, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
            
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={sender.profile_image_url} style={{ height: 40, width: 40 }} />
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:8, position:'relative'}}>
                        {hoverVerify ? <VerifyToolTip/> : null}
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 0, padding: 0, paddingBottom: 0 }}>
                            <Link href="/profile">
                                <Typography style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{sender.name}</Typography> 
                        </Link>
                        <div onMouseEnter={(e) => { setHoverVerify(true) }} onMouseLeave={(e) => { setHoverVerify(false) }} style={{paddingRight:20, paddingLeft:4, display:'flex', justifyContent:'center'}}>
                            <VerifiedUser onClick={(e) => { e.preventDefault(); router.push('verify')}} style={{ fontSize: 18, cursor:'pointer'}} color='primary' />
                            </div>
                        </div>
                        <Typography style={{margin:0, fontSize:12}}><span style={{fontWeight:600}}>{calculatePostTime()}</span> ago | <span style={{fontWeight:600}}>12m</span> away</Typography>
                    </div>
            </div>
            {1==1 ? null : <Button style={{ backgroundColor: '#FFF', height: 40, borderRadius: 20, padding: '8px 12px', border:'1px solid #0066FF', color:'#0066FF', fontSize: 14, textTransform: 'capitalize' }} onClick={() => {}}>+ Follow</Button>}
        </div>
    );
}

const VerifyToolTip = () => {
    return (
        <div style={{ position: 'absolute', top:-40, right:-80, padding:'4px 20px', background:'#FFF', boxShadow:'0px 0px 2px 2px rgba(0,0,0,.05)', borderRadius:8, minWidth:'200px'}}>
            <Typography style={{fontSize:12}}>Verified since 13th Aug, 2022</Typography>
        </div>
    )
}

export default TileHeader;