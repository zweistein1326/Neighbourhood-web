import { Button, Input } from "@mui/material";
import MessageHeader from "./message-header";
import MessageTile from "./message-tile";

const ChatBox = ({chat}:any) => {
    return (
        <div style={{flex:1, boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.2)', padding:'40px 20px', display:'flex', flexDirection:'column', justifyContent:'flex-end', height:'100%'}} >
            {/* Header */}
            <MessageHeader chat_header={chat?.header ?? null} />
            {/* Body */}
            <div style={{paddingBottom:20}}>
                {/* {chat.messages.map((message_info:any) => {
                    <MessageTile message_info={message_info} />
                })} */}
                <MessageTile type={"incoming"} message={"We would like to propose a collaboration. Would you be interested?"} />
                <MessageTile type={"outgoing"} message={"Hey our team will be glad to have a chat!"}/>
                <MessageTile type={"incoming"} message={"Let's have a zoom call on 16th December(Friday) at 3pm?"}/>
            </div>
            {/* Footer */}
            <div style={{position:'relative', display:'flex', justifyContent:'flex-end', flexDirection:'row'}}>
                <Input placeholder="Message" style={{width:'100%', boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', padding:'8px 24px', borderRadius:40}} disableUnderline/>
                <Button type="submit" style={{ width: '20%', padding: '8px 24px', borderRadius: 40 }}>Send</Button>
            </div>
        </div>
    )
}

export default ChatBox;