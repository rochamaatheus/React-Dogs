import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import UserContext from '../../UserContext';
import Loading from '../Helper/Loading';
import Error404 from '../Error404';
import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);

  if (!data) return <Loading />;
  return (
    <section className="container">
      <Head
        title="Minha Conta"
        description="Gerencie sua conta de forma simples e eficiente em Minha Conta. Acesse informações pessoais, estatísticas, e muito mais. Tenha o controle total das suas interações conosco em um só lugar"
      />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </section>
  );
};

export default User;
