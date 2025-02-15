import React, { useState } from 'react';
import { View } from 'react-native';
import { TextH2, TextRegular } from '@components/Typography';
import { CONNECT_BUTTONS_DATA, MATCH_BUTTONS_DATA } from '@constants/data';
import ConnectButton from '@components/ConnectButton';
import Info from '@assets/icons/info.svg';
import theme from '@theme/index';
import MatchButton from '@components/MatchButton';

import { ICard } from './types';
import {
  BottomInfoContainer,
  ConnectButtonsWrapper,
  CustomImage,
  InfoButton,
  MainContainer,
  MatchButtonsWrapper,
  SubContainer,
} from './styles';

const Card: React.FC<ICard> = ({ image, name, age, city, country, width }) => {
  const [selected, setSelected] = useState(0);

  const handleConnectPress = (key: number) => {
    setSelected(key);
  };

  const handleMatchPress = () => {};

  return (
    <MainContainer width={width}>
      <CustomImage source={image} resizeMode="cover">
        <SubContainer>
          <ConnectButtonsWrapper>
            {CONNECT_BUTTONS_DATA.map((item, key) => (
              <ConnectButton
                key={item.id}
                selected={selected === key}
                label={item.label}
                image={item.image}
                onPress={() => handleConnectPress(key)}
              />
            ))}
          </ConnectButtonsWrapper>
          <View>
            <BottomInfoContainer>
              <TextH2 color={theme.colors.white}>{`${name}, ${age}`}</TextH2>
              <InfoButton>
                <Info fill={theme.colors.white} />
              </InfoButton>
            </BottomInfoContainer>
            <TextRegular color={theme.colors.white} style={{ marginTop: -8 }}>
              {`${city}, ${country}`}
            </TextRegular>
            <MatchButtonsWrapper>
              {MATCH_BUTTONS_DATA.map((item) => (
                <MatchButton
                  key={item.id}
                  item={item}
                  onPress={handleMatchPress}
                />
              ))}
            </MatchButtonsWrapper>
          </View>
        </SubContainer>
      </CustomImage>
    </MainContainer>
  );
};

export default React.memo(Card);
