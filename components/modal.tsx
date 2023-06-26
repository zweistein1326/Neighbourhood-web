import { Close } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material"
import { useRouter } from "next/router";
import { useContext } from "react";
import ModalContext from "../hooks/modal-context";

const Modal = () => {
    const { toggleModal, modalInfo } = useContext(ModalContext);
    const router = useRouter();

    if (!modalInfo.isVerified) {
        return (
            <Box style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', zIndex:999}}>
                <Box style={{position:'relative', width: '80vw', maxWidth: '600px', height: '80vh', maxHeight: '200px', backgroundColor: '#FFF', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Close style={{cursor:'pointer',position:'absolute', top:20, right:20, color:'#000'}} onClick={() => {toggleModal()}} />
                    <Typography sx={{marginBottom:'16px', textAlign:'center', fontSize:{lg:'20px', md:'20px', sm:'16px', xs:'16px'}}}>You need to be a verified member to apply for grants</Typography>
                    <Button onClick={(e) => {
                        e?.preventDefault();
                        toggleModal();
                        router.push('/verify');
                    }}>Become a verified member</Button>
                </Box>
            </Box>
        )    
    }
    return (
        <div>
            <Box style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', zIndex:999}}>
                <Box style={{position:'relative', width: '80vw', maxWidth: '600px', height: '80vh', maxHeight: '200px', backgroundColor: '#FFF', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Close style={{cursor:'pointer',position:'absolute', top:20, right:20, color:'#000'}} onClick={() => {toggleModal()}} />
                    <Typography sx={{marginBottom:'16px', textAlign:'center', fontSize:{lg:'24px', md:'20px', sm:'16px', xs:'16px'}}}>Thank you for registering</Typography>
                    <Typography sx={{marginBottom:'16px', textAlign:'center', fontSize:{lg:'16px', md:'16px', sm:'12px', xs:'12px', maxWidth:'400px', width:'70%'}}}>We have successfully received your submission. Our team will contact you via email shortly.</Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Modal;