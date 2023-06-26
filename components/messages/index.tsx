import ChatBox from "./chat-box";
import InboxList from "./inbox-list";

const Inbox = () => { 
    return (
        <div style={{width:'100%', display:'flex', flexDirection:'row', height:'100%', justifyContent:'space-between', paddingRight:0}}>
            <InboxList/>
            <ChatBox/>
        </div>
    )
}

export default Inbox;