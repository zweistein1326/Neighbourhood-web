import { users } from "../../dummydata/users";

const GrantTile = ({ grant, selectGrant, isSelected}: any) => {
    
    return (
        <div style={{ width: '100%', height: '100px', background: isSelected ? 'rgba(0, 102, 255, 0.2)' : '#FFF', boxShadow:'0px 0px 2px 2px rgba(0,0,0,0.05)', margin: "10px 0", display:'flex', flexDirection:'row', alignItems:'center', borderRadius:8, padding:'0px 16px', cursor:'pointer'}} onClick={selectGrant}>
            {/* <img src={users[0].profile_image_url} style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: '#FFF' }} /> */}
            <div>
                <p style={{fontSize:14, margin:'4px 8px'}}>{grant.title}</p>
                <p style={{ fontSize: 14, margin: '4px 8px' }}>{grant.organization}</p>
            </div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end', flex:1}}>
                <p style={{ fontSize: 12 }}>Created {grant.created}</p>
            </div>
        </div>
    )
}

export default GrantTile;