import React from 'react';

import { IMatchButton } from './types';
import { StylesPressable } from './styles';

const MatchButton: React.FC<IMatchButton> = ({ item, onPress }) => {
  const { backgroundColor, iconColor, Icon, direction } = item;

  return (
    <StylesPressable
      onPress={() => onPress(direction)}
      backgroundColor={backgroundColor}
    >
      <Icon fill={iconColor} height={32} width={32} />
    </StylesPressable>
  );
};

export default React.memo(MatchButton);
