import { Typography } from "@mui/material";

const MessageTile = ({type, message}:any) => {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: type=="incoming"? 'flex-start': 'flex-end', margin:8}}>
            <div style={{position:'relative', width:'60%', backgroundColor:type=="incoming"?'rgba(0, 102, 255,0.4)':'rgba(0, 102, 255,1)', padding:"24px 12px", borderRadius:8,}}>
                <Typography style={{color:'#000'}}>{message}</Typography>
                <Typography style={{color:'#000', position:'absolute', bottom:0, right:10, fontSize:10}}>17:32</Typography>
            </div>
        </div>
    )
 }

export default MessageTile;