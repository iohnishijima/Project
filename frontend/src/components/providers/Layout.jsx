import React from 'react';
import Container from '@mui/material/Container';
import Header from '../Templates/Header'; // ヘッダーコンポーネントをインポート

const Layout = ({ children, title }) => { // titleプロパティを受け取る
  return (
    <Container maxWidth="xl">
      <Header title={title} /> {/* Headerにtitleを渡す */}
      {children} {/* 子コンポーネントを表示 */}
    </Container>
  );
};

export default Layout;
