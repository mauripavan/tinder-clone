import React from 'react';
import theme from '@theme/index';
import { Pressable } from 'react-native';
import { TextBold } from '@components/Typography';

import { IConnectButton } from './types';
import { ImageWrapper, LabelContainer, StyledImage } from './styles';

const ConnectButton: React.FC<IConnectButton> = ({
  selected,
  label,
  image,
  onPress,
}) => (
  <Pressable onPress={onPress}>
    <ImageWrapper>
      <StyledImage source={image} selected={selected} />
    </ImageWrapper>
    <LabelContainer>
      {selected ? (
        <TextBold color={theme.colors.white} style={{ textAlign: 'center' }}>
          {label}
        </TextBold>
      ) : (
        <TextBold style={{ opacity: 0 }}>{label}</TextBold>
      )}
    </LabelContainer>
  </Pressable>
);

export default React.memo(ConnectButton);
