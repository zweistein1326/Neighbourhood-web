import { createContext } from "react";
import { posts } from "../dummydata/posts";

const ModalContext = createContext({isModalVisible: false, toggleModal: ()=>{}, setModalInfo:(modalInfo:any)=>{}, modalInfo:{isVerified:true}});

export default ModalContext;