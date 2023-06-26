import Container from "../../components/container";
import CenterNav from "../../components/container/centerNav";
import LeftNav from "../../components/container/leftNav";
import RightNav from "../../components/container/rightNav";
import Header from "../../components/header";
import ProfileBody from "../../components/profile/body";
import ProfileHeader from "../../components/profile/header";

const Profile = () => { 
    return (
        <Container>
            <ProfileHeader />
            <ProfileBody/>
        </Container>
    )
}

export default Profile;