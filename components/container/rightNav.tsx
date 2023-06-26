import { VerifiedUser } from "@mui/icons-material";
import { Button, Input, Radio, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import PostContext from "../../hooks/posts-context";
import UsersContext from "../../hooks/users-context-provider";

const RightNav = () => { 

    // TODO: Render right nav based on page
    const router = useRouter();

    useEffect(() => {
        
    }, [
        router.isReady
    ]);

    return (
        router.pathname == '/feed'  ? <div style={{ height: '100vh', width: '25%', padding: '40px 40px', overflowY:'scroll', paddingBottom:120}}>
            <Filters />
            {/* <Who2Follow /> */}
            {/* <Fundraisers /> */}
        </div> : <div style={{ height: '100vh', width: '25%', padding: '40px 40px', overflowY:'scroll', paddingBottom:120}}>
            <Filters />
            {/* <Who2Follow /> */}
            {/* <Fundraisers /> */}
        </div>
    )
}

const Who2Follow = () => {

    const { users, updateUser } = useContext(UsersContext);

    const FollowTile = ({user}: any) => {
        return (
            <div style={{padding:'8px 0', marginRight:12, display:'flex', flexDirection:'column'}}>
                <div style={{padding:'8px 0', marginRight:12, display:'flex', flexDirection:'row'}}>
                    <img src={user.profile_image_url} style={{ height: 30, width: 30 }} />
                    <div style={{ margin: '0 12px'}}>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <Typography style={{ fontWeight: 600, fontSize: 14, width:'180px'}}>
                                {user.name}
                                <VerifiedUser color='primary' style={{ fontSize: 16, marginLeft:4}} />
                            </Typography>
                        </div>
                        <Typography style={{ fontWeight: 400, fontSize: 12, marginRight: 4 }}>@{user.username} | {user.followers} followers</Typography>
                    </div>
                </div>
                {!user.following ? <Button style={{ backgroundColor: '#0066FF', height: 30, flex: 1, borderRadius: 20, padding: '8px 12px', color: '#FFF', fontSize: 12, textTransform: 'capitalize' }} onClick={() => { updateUser({...user, following:true})}}>Follow</Button> :
                <Button style={{border:'1px solid #0066FF', backgroundColor:'#FFF', height:30, flex:1, borderRadius:20, padding:'8px 12px', color:'#0066FF', fontSize:12, textTransform:'capitalize'}}  onClick={() => { updateUser({...user, following:false})}}>Unfollow</Button>}
            </div>
        )
    }

    return (
        <div style={{ width: '100%' }}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingRight:40}}>
                <Typography variant="h6" style={{ padding: '12px 0', fontWeight: 'bold' }}>Who to follow?</Typography>
                <Typography variant="h6" style={{ padding: '12px 0', fontWeight: 'bold', fontSize: 14, color: '#0066FF' }}>{`More >`}</Typography>
            </div>
            {users.map((user, index) => <FollowTile user={user} key={index} />)}
        </div>
    )
}

const Filters = () => {
    const { setFilters, filters } = useContext(PostContext);
    return (
        <div style={{ width: '100%', marginBottom:20}}>
            <Typography variant="h6" style={{padding:'12px 0', fontWeight:'bold'}}>Filter posts by</Typography>
            <div style={{marginTop:8}}>
                <Typography style={{ margin: '8px 0', fontWeight:600}}>Topic</Typography>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio value='Education' checked={filters.findIndex((filter)=>filter=='Education') > -1} onChange={(e) => {
                            setFilters([e.target.value]);
                        }} />
                        <Typography>Education</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio value='Sustainability'/>
                        <Typography>Sustainability</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio value='Waste Management'/>
                        <Typography>Waste Management</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Radio value='Animal Welfare'/>
                        <Typography>Animal Welfare</Typography>
                    </div>
                </div>
                <Typography style={{ margin: '8px 0', fontWeight:600 }}>Location</Typography>
                <div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}><Radio/><Typography>Near you</Typography></div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}><Radio/><Typography>Anywhere</Typography></div>
                </div>
            </div>
        </div>
    )
}

const Fundraisers = () => {

    const {users} = useContext(UsersContext);

    const TrendingItem = ({item}: any) => { 
        const randomNum = Math.floor(Math.random() * 3);
        return (
            <div style={{padding:'8px 0', marginRight:12, display:'flex', flexDirection:'row',}}>
                <img src={users[randomNum].profile_image_url} style={{ height: 30, width: 30 }} />
                <div style={{ margin: '0 12px' }}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:6}}>
                        <Typography style={{ fontWeight: 600, fontSize: 14, marginRight: 4}}>{users[randomNum].name}</Typography>
                        <VerifiedUser color='primary' style={{fontSize:16}} />
                    </div>
                    <Typography style={{fontWeight:400, fontSize:16}}>{item}</Typography>
                </div>
            </div>
        )
    }

    const trending = ['Save 40 blind girls from becoming homeless', 'Rescue girls kidnapped and sold into brothels', 'Safe infant orphans with urgent life-saving care', 'Rescue young girls from sex trafficiking and forced prostitution', 'Covid-19 Relief'];

    return (
        <div style={{ width: '100%', marginBottom: 20 }}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingRight:40}}>
                <Typography variant="h6" style={{ padding: '12px 0', fontWeight: 'bold' }}>Ongoing Fundraisers</Typography>
                <Typography variant="h6" style={{ padding: '12px 0', fontWeight: 'bold', fontSize:14, color:'#0066FF'}}>{`More >`}</Typography>
            </div>
            {/* <>List of groups, user might be interested in based on behaviour</> */}
            {trending.map((item, index) => {
                return (<TrendingItem item={item} key={index} />);
            })}
        </div>
    )
}

export default RightNav;