import React, { useState } from 'react';
import { Animated, View } from 'react-native';
import { TextH2, TextRegular } from '@components/Typography';
import { CONNECT_BUTTONS_DATA, MATCH_BUTTONS_DATA } from '@constants/data';
import ConnectButton from '@components/ConnectButton';
import Info from '@assets/icons/info.svg';
import theme from '@theme/index';
import MatchButton from '@components/MatchButton';
import { Direction } from '@screens/Home/types';
import { IS_ANDROID } from '@constants/index';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import { ICard } from './types';
import {
  BottomInfoContainer,
  ConnectButtonsWrapper,
  CustomImage,
  InfoButton,
  MatchButtonsWrapper,
  SubContainer,
} from './styles';

const Card: React.FC<ICard> = ({
  image,
  name,
  age,
  city,
  country,
  width,
  onSwipe,
}) => {
  const [selected, setSelected] = useState(0);

  const handleConnectPress = (key: number) => {
    setSelected(key);
  };

  const handleMatchPress = (direction: Direction | null) => {
    if (direction !== null && onSwipe) {
      onSwipe(direction);
    }
  };

  return (
    <Animated.View
      style={{
        borderRadius: 30,
        overflow: 'hidden',
        width: !width ? widthPercentageToDP('83%') : width,
        height: IS_ANDROID
          ? heightPercentageToDP('88%')
          : heightPercentageToDP('81%'),
      }}
    >
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
                  onPress={() => handleMatchPress(item.direction)}
                />
              ))}
            </MatchButtonsWrapper>
          </View>
        </SubContainer>
      </CustomImage>
    </Animated.View>
  );
};

export default React.memo(Card);
