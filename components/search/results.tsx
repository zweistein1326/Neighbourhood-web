import { VerifiedUser } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import FeedTile from "../feed/item/tile";
import { posts } from "../../dummydata/posts";
import { useContext } from "react";
import UsersContext from "../../hooks/users-context-provider";
import { useRouter } from "next/router";

const SearchResults = () => {
    return (
        <div style={{width:'100%'}}>
            {/* <SearchHeader /> */}
            <Results/>
        </div>
    )
} 

export default SearchResults;

const SearchHeader = () => {
    const searchFIelds = ['Organizations', 'People', 'Posts']
    return (
        <div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:20}}>
                {searchFIelds.map((field, index) => <div key={index} style={{ padding: '10px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}><Typography>{field}</Typography></div>)}
                <div style={{ padding: '10px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}><Typography>All Filters</Typography></div>
            </div>
        </div>
    )
}

const Results = () => {
    const { users, updateUser } = useContext(UsersContext);
    const user = users[0];
    const router = useRouter();
    const people = [
        {
            name: 'Pravin Bhasin',
            organization: 'Books for All, India',
            role: 'Founder & President',
            followers:'5K',
            profile_image_url:'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Lata Agarwal',
            organization: 'Books for All, India',
            role: 'Volunteer',
            followers:'8K',
            profile_image_url:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Priti Chetan',
            organization: 'Books for All, India',
            role: 'Volunteer',
            followers: '4K',
            profile_image_url:'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
        }
    ]
    return (
        <div style={{width:'100%', paddingBottom:'40px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                <div style={{ padding: '20px 30px', margin: '4px', backgroundColor: '#FFF', borderBottom: '1px solid rgba(0,0,0,0.2)', borderRadius: 0 }}>
                    <Typography style={{fontSize:20, fontWeight:600}}>Organizations</Typography>
                    <div style={{ margin: '20px 0', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <div style={{display: 'flex', flexDirection: 'row', cursor:'pointer'}} onClick={()=>{router.push('/profile')}}>
                            <img alt='profile-image' src={user.profile_image_url} style={{ height: 60, width: 60}} />
                            <div style={{ margin: '0px 10px' }}>
                                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                    <Typography style={{fontWeight:500}}>{user.name}</Typography>
                                    <VerifiedUser style={{ fontSize:18, marginLeft:4 }} color='primary' />
                                </div>
                                <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>Education, Literacy, Employment</Typography>
                                <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>20K followers</Typography>
                                <Typography style={{fontSize:14, fontWeight:400, color:'#555'}}><span style={{fontWeight:600, color:'#000'}}>Books for All</span>{user.about?.slice(13,252)} ...</Typography>
                            </div>
                        </div>
                        {!user.following ? <Button style={{ backgroundColor: '#0066FF', height: 40, borderRadius: 20, padding: '8px 30px', color: '#FFF', fontSize: 14, textTransform: 'capitalize' }} onClick={() => { updateUser({...user, following:true})}}>Follow</Button> :
                        <Button style={{border:'1px solid #0066FF', backgroundColor:'#FFF', height:40, borderRadius:20, padding:'8px 30px', color:'#0066FF', fontSize:14, textTransform:'capitalize'}}  onClick={() => { updateUser({...user, following:false})}}>Unfollow</Button>}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 20, flex:1}}>
                <div style={{ padding: '20px 30px', margin: '4px', backgroundColor: '#FFF', borderBottom: '1px solid rgba(0,0,0,0.2)', borderRadius: 0, background:'#FFF', width:'100%'}}>
                    <Typography style={{fontSize:20, fontWeight:600}}>Activity</Typography>
                    <div style={{margin:'20px 0', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%'}}>
                        {posts.slice(0,2).map((post: any, index: number) => <FeedTile key={index} post={post} />)} 
                    </div>
                </div>
            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 20, flex:1}}>
                <div style={{ padding: '20px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 8, width:'100%'}}>
                    <Typography style={{fontSize:20, fontWeight:600}}>People</Typography>
                    {people.map((person, index) => <PeopleTile person={person} key={index} />)}
                </div>
            </div> */}
        </div>
    )
}

const PeopleTile = ({person}:any) => {
    console.log(person)
    return (
        <div style={{margin:'20px 0', display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'space-between', width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
                <img src={person.profile_image_url} style={{ height: 60, width: 60, borderRadius:40}} />
                <div style={{ margin: '0px 10px' }}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Typography style={{fontWeight:500}}>{person.name}</Typography>
                    </div>
                    <Typography style={{ fontSize: 14, fontWeight: 400, color: '#777' }}>{person.role}</Typography>
                    <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>Books for All, India</Typography>
                    <Typography style={{fontSize:14, fontWeight:400, color:'#777'}}>{person.followers} followers</Typography>
                </div>
            </div>
            <div style={{ padding: '8px 30px', margin: '4px', backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 30 }}>
                <Typography>Follow</Typography>
            </div>
        </div>
    )
}