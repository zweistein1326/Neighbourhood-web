import { Close, Menu } from "@mui/icons-material";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { users } from "../../dummydata/users";
import LeftNav from "../container/leftNav";
import Actions from "./actions";
import Searchbar from "./searchbar";

const Header = () => { 

    const theme = useTheme();
    const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
    console.log(mdOrSmaller);
    return mdOrSmaller ? <HeaderMobile/> : <HeaderDesktop/>    
}

const HeaderDesktop = () => {
    return (
        <div style={{ position: 'fixed', display: 'flex', flexDirection: 'row', height: '8vh', width: '100vw', top: 0, alignItems: 'center', justifyContent: 'space-between', backgroundColor:'rgba(255,255,255,1)', borderBottomLeftRadius:  0, borderBottomRightRadius: 0, zIndex:99}}>
            <Link href="/feed" style={{ width: '25vw', textAlign: 'center'}}>
                <Typography style={{ paddingLeft: '0px' }}>Charitable</Typography>
            </Link>
            {/* Searchbar */}
            <Searchbar/>
            {/* Login/Logged In icons*/}
            <Actions user={users[0]} />
        </div>
    )
}


const HeaderMobile = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div style={{ position: 'fixed', display: 'flex', flexDirection: 'row', height: '8vh', width: '100vw', top: 0, alignItems: 'center', justifyContent: 'space-around', border: '0.2px solid rgba(0,0,0,0.05)', backgroundColor: 'white', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, zIndex: 99999999 }}>
            <Searchbar width='80vw'/>
            <Menu style={{marginRight:'12px'}} onClick={() => {setIsMenuVisible(true)}} />
            {isMenuVisible ?
                <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Close style={{position:'absolute', top:20, right:12}} onClick={() => {setIsMenuVisible(false)}}/>
                    <LeftNav setIsMenuVisible={setIsMenuVisible} />
            </div> : null}
        </div>
    )
}
export default Header;