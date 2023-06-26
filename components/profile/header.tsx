import { Launch } from "@mui/icons-material";

const ProfileHeader = () => { 
    return (
        <div style={{ height: '30vh', width: '100%', backgroundColor: 'red', position: 'relative', zIndex: 1 }}>
            <div style={{ height: '100%', width: '100%' , background:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)', position:'absolute'}}/>
            <img style={{ height: '100%', width: '100%'}} src="/images/india_children_2.png" />
            <div style={{position: 'absolute', bottom: 0, left: 0, display:'flex', flexDirection:'row', alignItems:'flex-end', justifyContent:'space-between', width:'100%', padding:'20px 20px'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <img style={{ backgroundColor: 'white', borderRadius: 200, height: '60px', width: '60px' }} src="/images/profile_image/ngo1.png" />
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center', marginLeft:12}}>
                        <p style={{color:'white', margin:0, fontSize:24, fontWeight:600}}>Books for all</p>
                        <div style={{display:'flex', flexDirection:'row', paddingTop: 8, alignItems:'center' }}>
                            <Launch style={{ color: '#FFF', marginRight: 4, fontSize:16 }} /><a href='https://www.booksforall.in' target={'_blank'} rel='noreferrer' style={{ color: 'white', margin: 0}}>www.booksforall.in</a>
                        </div>
                    </div>
                </div>
                <div style={{padding:'8px 24px', borderRadius:'50px', border:'1px solid #0066FF', backgroundColor:'#FFF', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <p style={{color:'#0066FF', margin:0}}>Donate</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;