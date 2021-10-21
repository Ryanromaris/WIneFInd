import { useRouter } from 'next/dist/client/router';
import { Icon, Menu } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';

export default function Sidebar() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === '/user') {
    activeItem = 'user';
  } else if (router.pathname === '/myinquiry') {
    activeItem = 'myinquiry';
  } else if (router.pathname === '/myprofile') {
    activeItem = 'myprofile';
  } else if (router.pathname === '/resign') {
    activeItem = 'resign';
  }

  function goLink(e, data) {
    if (data.name === 'user') {
      router.push('/user');
    } else if (data.name === 'myinquiry') {
      router.push('/myinquiry');
    } else if (data.name === 'myprofile') {
      router.push('/myprofile');
    } else if (data.name === 'resign') {
      router.push('/resign');
    }
  }

  return (
    <Menu icon='labeled' vertical='true' style={{ margin: '20px 10rem' }}>
      <Menu.Item name='user' active={activeItem === 'user'} onClick={goLink}>
        <Icon name='list layout' />내 와인
      </Menu.Item>

      <Menu.Item
        name='myinquiry'
        active={activeItem === 'myinquiry'}
        onClick={goLink}
      >
        <Icon name='info' />내 문의 사항
      </Menu.Item>

      <Menu.Item
        name='myprofile'
        active={activeItem === 'myprofile'}
        onClick={goLink}
      >
        <Icon name='user' />내 정보
      </Menu.Item>

      <Menu.Item
        name='resign'
        active={activeItem === 'resign'}
        onClick={goLink}
      >
        <Icon name='user cancel' />
        회원 탈퇴
      </Menu.Item>
    </Menu>
  );
}