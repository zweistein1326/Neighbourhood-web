import { ChatBubble, Home, Message, Notifications, Support, TrendingUp } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { users } from "../../dummydata/users";
import { TextIcon } from "../icons/texticon"

const LeftNav = ({setIsMenuVisible = ()=>{}}:any) => { 

    const router = useRouter();
    const tabs = [
        { title: 'Home', href: '/feed', icon: <Home style={{ color: router.pathname === '/feed' ? '#FFF' : '#000' }} />},
        { title: 'Trending', href: '/trending' , icon:<TrendingUp style={{ color: router.pathname === '/trending' ? '#FFF' : '#000' }}/>},
        // { title: 'Grants', href: '/grants' , icon:<Support style={{ color: router.pathname === '/grants' ? '#FFF' : '#000' }}/>},
        { title: 'Profile', href: '/profile', icon: <img src={users[0].profile_image_url} style={{height:24, width:24, background:'#FFF'}} alt="profile-image" />},
        // { title: 'Messages', href: '/messages' , icon:<ChatBubble style={{ color: router.pathname === '/messages' ? '#FFF' : '#000' }}/>},
        // { title: 'Notifications', href: '/notifications' , icon:<Notifications style={{ color: router.pathname === '/notifications' ? '#FFF' : '#000' }}/>},
    ]

    const Top = () => {
        return (
            <div style={{ height: '40vh', width: '100%', display:'flex', flexDirection:'column'}}>
                {/* <p style={{fontSize:12, paddingLeft:24}}>Feeds</p> */}
                {tabs.map((tab, index) =>
                    <div key={index} style={{backgroundColor: router.pathname===tab.href ? '#0066FF' : 'white', height:'50px', padding:'0px 20px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12}}>
                        <Link href={tab.href} onClick={()=>{setIsMenuVisible(false)}}>
                            <TextIcon color={router.pathname === tab.href ? '#FFF' : '#000'} text={tab.title} icon={tab.icon} />
                        </Link>
                    </div>)}
            </div>
            
        )
    }

    const theme = useTheme();
    const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
    console.log(mdOrSmaller);

    return (
        <div style={{margin:0, paddingRight: 0, padding:'0px 0px', width:mdOrSmaller ? '80vw' : '25%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-end'}}>
            <Top />
        </div>
    )

}

export default LeftNav;