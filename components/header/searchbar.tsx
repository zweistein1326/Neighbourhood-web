import { Input } from "@mui/material"
import { useRouter } from "next/router"

const Searchbar = ({ width = '43vw' }: any) => {
    const router = useRouter();
    return (
        <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{width:'90%', boxShadow:'0px 0px 2px 2px rgba(0,0,0,0.05)', padding:'10px 20px', borderRadius:50}}>
                <form onSubmit={(e) => { e.preventDefault(); router.push('/search') }}>
                    <Input disableUnderline={true} style={{ width: '100%', fontSize: 14, height: '20px' }} placeholder="Search Charitable" />
                </form>
            </div>
        </div>
    )
}

export default Searchbar