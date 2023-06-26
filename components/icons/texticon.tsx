import { Typography } from "@mui/material"
import { useEffect } from "react"

export const TextIcon = ({ text, icon, color }: any) => {
    useEffect(() => {
        // icon.style.color = color;
        console.log(icon.source);
    },[])
    return (
        <div style={{padding:8, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
            {icon}
            <Typography style={{color: color, marginLeft:12}}>{text}</Typography>
        </div>
    )
}