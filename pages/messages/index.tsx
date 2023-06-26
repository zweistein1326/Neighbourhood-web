import Container from "../../components/container";
import CenterNav from "../../components/container/centerNav";
import LeftNav from "../../components/container/leftNav";
import Header from "../../components/header"
import Inbox from "../../components/messages";

const Messages = () => {
    return (
        <Container rightNav={false}>
            <Inbox />
        </Container>
    )
}

export default Messages;