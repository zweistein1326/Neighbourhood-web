import { Button } from "@mui/material";
import { useContext } from "react";
import { users } from "../../dummydata/users";
import ModalContext from "../../hooks/modal-context";

const GrantInfo = ({ selectedGrant }: any) => { 

    const { toggleModal, setModalInfo } = useContext(ModalContext);

    if (selectedGrant) {
        return (
            <div style={{flex:1, padding:'40px 20px', display:'flex', flexDirection:'column', justifyContent:'flex-start', height:'100%'}} >
                <h2>{selectedGrant.title}</h2>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <img src={users[1].profile_image_url} style={{ width: '40px', height: '40px', marginRight:'8px'}} />
                        <p>{selectedGrant.organization}</p>
                    </div>
                    <Button onClick={() => {
                        toggleModal();
                        setModalInfo({isVerified:false})
                    }} style={{backgroundColor:'#0066FF', color:'#FFF', borderRadius:100}}>Apply for Grant</Button>
                </div>
                <div>
                    <h4>About {selectedGrant.organization}</h4>
                    <p>{selectedGrant.organizationAbout}</p>
                </div>
                <div>
                    <h4>Who can apply?</h4>
                    <ul>{selectedGrant.eligible.map((item:any, index:number) => <li key={index}>{item}</li>)}</ul>
                </div>
            </div>
        )    
    }
    else {
        return null;
    }
    
}

export default GrantInfo;