import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import FormattedNumber from '../Helper/FormattedNumber';
import UserContext from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;
  const { src, title, author, id, peso, idade, acessos } = photo;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={src} alt={title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${author}`}>@{author}</Link>
            )}
            <span className={styles.views}>
              <FormattedNumber number={acessos} />
            </span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${id}`}>{title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{peso} kg</li>
            <li>{idade == 1 ? idade + ' ano' : idade + ' anos'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
