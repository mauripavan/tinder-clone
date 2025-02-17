import React, { useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Close from '@assets/icons/close.svg';
import MoreOptions from '@assets/icons/more-vertical-alt.svg';
import ArrowUp from '@assets/icons/chevron-up.svg';
import ArrowDown from '@assets/icons/chevron-down.svg';
import theme from '@theme/index';
import { TextH2 } from '@components/Typography';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MATCH_BUTTONS_DATA } from '@constants/data';
import MatchButton from '@components/MatchButton';
import { Direction } from '@screens/Home/types';
import Pill from '@components/Pill';

import { ModalScreenProps, NavigationProp } from './types';
import {
  ContentContainer,
  CustomBackground,
  ExpandButtonModal,
  ExpandButtonModalContainer,
  FlexContainer,
  HeaderContainer,
  InfoContainer,
  MatchButtonsContainer,
  PillsContainer,
  StyledTextRegular,
} from './styles';

const ModalScreen: React.FC<ModalScreenProps> = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation<NavigationProp>();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const iniitlaHeight = hp('49%');
  const sheetPosition = useRef(new Animated.Value(iniitlaHeight)).current;

  const handleClose = () => {
    navigation.goBack();
  };

  const toggleSheetHeight = () => {
    Animated.timing(sheetPosition, {
      toValue: isSheetOpen ? hp('49%') : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsSheetOpen((prevState) => !prevState);
  };

  const handleMatchPress = ({
    direction,
    id,
  }: {
    direction: Direction | null;
    id: number;
  }) => {
    if (direction !== null && item.handleMatchPress) {
      navigation.goBack();
      setTimeout(() => {
        item.handleMatchPress!({ direction, id });
      }, 500);
    }
  };

  return (
    <FlexContainer>
      <Animated.View
        style={[
          styles.imageContainer,
          isSheetOpen ? styles.containerExpanded : styles.containerDefault,
        ]}>
        <CustomBackground source={item.image} resizeMode="cover">
          <HeaderContainer>
            <Pressable onPress={handleClose}>
              <Close />
            </Pressable>
            <MoreOptions />
          </HeaderContainer>
        </CustomBackground>
      </Animated.View>

      <Animated.View
        style={[
          styles.bottomSheet,
          {
            transform: [{ translateY: sheetPosition }],
          },
        ]}>
        <ExpandButtonModalContainer>
          <ExpandButtonModal onPress={toggleSheetHeight}>
            {isSheetOpen ? (
              <ArrowDown fill={theme.colors.white} />
            ) : (
              <ArrowUp fill={theme.colors.white} />
            )}
          </ExpandButtonModal>
        </ExpandButtonModalContainer>

        <ContentContainer>
          <View>
            <TextH2
              color={theme.colors.dark}>{`${item.name}, ${item.age}`}</TextH2>
            <StyledTextRegular color={theme.colors.dark}>
              {`${item.city}, ${item.country}`}
            </StyledTextRegular>
          </View>

          <InfoContainer>
            <TextH2 color={theme.colors.dark}>Intereses</TextH2>
            <PillsContainer>
              {item.interest.map((i) => {
                return <Pill text={i} />;
              })}
            </PillsContainer>
            <InfoContainer>
              <TextH2>Me considero</TextH2>
              <Pill text={item.gender} />
            </InfoContainer>
          </InfoContainer>

          <MatchButtonsContainer>
            {MATCH_BUTTONS_DATA.map((i) => (
              <MatchButton
                key={i.id}
                item={i}
                onPress={() =>
                  handleMatchPress({
                    direction: i.direction,
                    id: i.id,
                  })
                }
              />
            ))}
          </MatchButtonsContainer>
        </ContentContainer>
      </Animated.View>
    </FlexContainer>
  );
};

export default React.memo(ModalScreen);

const styles = StyleSheet.create({
  containerDefault: {
    height: hp('100%'),
  },
  containerExpanded: {
    height: hp('60%'),
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 0,
    padding: 20,
    height: hp('60%'),
  },
});
