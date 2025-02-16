import React from 'react';
import theme from '@theme/index';
import { Image } from 'react-native';
import Check from '@assets/icons/check.svg';
import Clear from '@assets/icons/clear-thick.svg';
import SuperLike from '@assets/images/super-like.png';

import { IMask } from './types';
import { MainContainer } from './styles';

const Mask: React.FC<IMask> = ({ backgroundColor, id }) => {
  const renderIcon = (iconId: number) => {
    switch (iconId) {
      case 0:
        return <Clear fill={theme.colors.white} width={100} height={100} />;
      case 1:
        return <Image source={SuperLike} width={164} height={111} />;
      case 2:
        return <Check fill={theme.colors.white} width={100} height={100} />;
      default:
        return null;
    }
  };

  return (
    <MainContainer backgroundColor={backgroundColor}>
      {renderIcon(id)}
    </MainContainer>
  );
};

export default Mask;
