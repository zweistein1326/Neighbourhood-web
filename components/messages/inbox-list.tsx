import { users } from "../../dummydata/users";
import InboxTile from "./inbox-tile";

// Sort tile_info by most recent message and display

const InboxList = () => {

    return (
        <div style={{width:'40%', padding:'8px 20px'}}>
            <h2>Inbox</h2>
            <InboxTile tile_info={users[0]}/>
            <InboxTile tile_info={users[1]}/>
            <InboxTile tile_info={users[0]}/>
            <InboxTile tile_info={users[1]}/>
        </div>
    )
}

export default InboxList;