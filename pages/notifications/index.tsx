import Container from "../../components/container";
import CenterNav from "../../components/container/centerNav";
import LeftNav from "../../components/container/leftNav";
import Header from "../../components/header"
import MessageList from "../../components/messages";
import Notifications from "../../components/notifications";

const NotificationsPage = () => {
    return (
        <Container rightNav={false}>
            <Notifications/>
        </Container>)
}

export default NotificationsPage;