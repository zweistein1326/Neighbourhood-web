import { users } from "../../dummydata/users";

const InboxTile = ({ tile_info }: any) => {
    
    const randomTime = () => {
        const rand_num = Math.random();
        const rand_time = rand_num * 100;
        return Math.floor(rand_time);
    }

    return (
        <div style={{ width: '100%', height: '70px', backgroundColor: '#FFF', boxShadow:'0px 0px 4px 4px rgba(0,0,0,0.05)', margin: "10px 0", display:'flex', flexDirection:'row', alignItems:'center', borderRadius:8, padding:'0px 16px'}}>
            <img src={users[0].profile_image_url} style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: '#FFF'}}/>
            <p style={{fontSize:14, margin:'0px 8px'}}>{tile_info.name}</p>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end', flex:1}}>
                <p style={{ fontSize: 12 }}>{randomTime()} hr ago</p>
            </div>
        </div>
    )
}

export default InboxTile;