import { TextIcon } from '../components/icons/texticon';
import Feed from '../components/feed';
import CreatePost from '../components/feed/createPost';
import Container from '../components/container';

const TrendingPage = () => {
  return (
    <Container>
      <CreatePost />
      <Feed/>
    </Container>
  )
}



export default TrendingPage;
