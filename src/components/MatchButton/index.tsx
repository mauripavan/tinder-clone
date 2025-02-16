import React, { useState } from 'react';
import theme from '@theme/index';

import { IMatchButton } from './types';
import { StylesPressable } from './styles';

const MatchButton: React.FC<IMatchButton> = ({ item, onPress }) => {
  const { backgroundColor, iconColor, Icon, direction } = item;
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(true);
    onPress(direction);
  };

  return (
    <StylesPressable
      onPress={handlePress}
      backgroundColor={backgroundColor}
      selected={selected}>
      <Icon
        fill={selected ? theme.colors.white : iconColor}
        height={32}
        width={32}
      />
    </StylesPressable>
  );
};

export default React.memo(MatchButton);
