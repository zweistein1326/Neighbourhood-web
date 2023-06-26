import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { posts as newsFeedItems} from '../dummydata/posts'
import { useState } from 'react';
import PostContext from '../hooks/posts-context';
import ModalContext from '../hooks/modal-context';
import Modal from '../components/modal';
import LoginContext from '../hooks/login-context';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import { EmotionCache } from '@emotion/react';
import UsersContext from '../hooks/users-context-provider';
import { users as appUsers } from '../dummydata/users';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps{
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const [posts, setPosts] = useState(newsFeedItems);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({ isVerified: false });
  const [user_id, setUserId] = useState('1');
  const [users, setUsers] = useState(appUsers);
  const [filters, setFilters] = useState([]);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <LoginContext.Provider value={{
      user_id: user_id,
      login: () => {setUserId('1')},
      logout: () => {setUserId('')}
    }}>
      <UsersContext.Provider value={{
        users: users,
        addUser: ()=>{},
        removeUser: () => { },
        updateUser: (updated_user: any) => { 
          const userId = updated_user.user_id;
          let new_users = [];
          for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.user_id == updated_user.user_id) {
              new_users.push(updated_user);
            }
            else {
              new_users.push(user);
            }
          }
          setUsers(new_users);
        }
      }}>
      <PostContext.Provider value={{
        posts: posts,
        addPost: (post: any)=>{setPosts([post, ...posts])},
        updatePost: () => { },
        filters: filters,
        setFilters: (new_filters: any) => {
          setFilters(new_filters);
        }
      }}>
        <ModalContext.Provider value={{
          isModalVisible: isModalVisible,
          modalInfo: modalInfo,
          toggleModal: () => { setIsModalVisible(!isModalVisible) },
          setModalInfo: (modalInfo: any) => {setModalInfo(modalInfo)}
          }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {isModalVisible ? <Modal /> : null}
            <Component {...pageProps} />
          </ThemeProvider>
        </ModalContext.Provider>
        </PostContext.Provider>
      </UsersContext.Provider>
    </LoginContext.Provider>
  )
}
