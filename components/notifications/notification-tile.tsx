import { MoreHoriz } from "@mui/icons-material"
import { users } from "../../dummydata/users"

const NotificationTile = ({ notification }: any) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width:'100%', margin:'4px 0', padding:'12px 12px', background: !notification.read ? 'rgba(0, 102, 255, 0.5)' : '#FFF', borderTop: notification.read ? '0.2px solid #000000' : ''}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <img src={users[0].profile_image_url} style={{ height: 40, width: 40, borderRadius: 20, marginRight:8, background:'#FFF' }} />
                <p>{notification.subtitle}</p>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <p style={{fontSize:12, margin:0, padding:0}}>{notification.timestamp}</p>
                <MoreHoriz/>
            </div>
        </div>
    )
}

export default NotificationTile