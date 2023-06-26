import { useMediaQuery, useTheme } from "@mui/material";
import CenterNav from "./centerNav";
import LeftNav from "./leftNav";
import RightNav from "./rightNav";
import Header from "../header";

const Container = ({ children, rightNav = true }: any) => { 
    
    const theme = useTheme();
    const mdOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div style={{ height: '100vh', maxWidth: '100vw', display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'flex-start', paddingTop: '8vh', overflow: 'hidden', backgroundColor:"#FFF"}}>
            <Header />
            {mdOrSmaller ? null : <LeftNav />}
            <CenterNav maxWidth={mdOrSmaller ? '100vw' : '70vw'}>
                {children}
            </CenterNav>
            {rightNav && !mdOrSmaller ? <RightNav/> : null}
        </div>
    )
}

export default Container;