import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import { Images } from '../../Themes';
import styles from './styles';

const Avatar = ({ src, size }) => {
  const source = src ? { uri: src } : Images.logo;
  const customStyles = size && {
    borderRadius: size / 2,
    width: size,
    height: size,
  };

  return (
    <Image source={source} resizeMode="cover" style={[styles.avatar, customStyles]} />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
