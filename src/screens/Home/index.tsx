import React, { useEffect, useRef, useState } from 'react';
import Layout from '@components/Layout';
import theme from '@theme/index';
import Card from '@components/Card';
import Menu from '@assets/icons/menu.svg';
import Filter from '@assets/icons/filter.svg';
import { Animated, Easing } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { SCREEN_WIDTH } from '@constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { updateCards } from '@redux/features/cardsSlice';

import { CardWrapper, MainContainer, StyledAnimatedView } from './styles';
import { Direction } from './types';

function HomeScreen() {
  const indexSelected = useSelector((state: RootState) => state.cards.index);
  const cardsData = useSelector(
    (state: RootState) => state.cards.group[indexSelected].data,
  );
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const backCardTranslateY = useRef(new Animated.Value(-20)).current;
  const backCardWidth = useRef(
    new Animated.Value(widthPercentageToDP('79%')),
  ).current;
  const [currentCardIndex, setCurrentCardIndex] = useState(
    cardsData.length - 1,
  );
  const gradientColors = useSelector(
    (state: RootState) => state.background.gradientColors,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    translateXAnim.setValue(0);
    translateYAnim.setValue(0);
    rotateAnim.setValue(0);
    backCardTranslateY.setValue(-20);
    backCardWidth.setValue(widthPercentageToDP('79%'));
    setCurrentCardIndex(cardsData.length - 1);
  }, [
    currentCardIndex,
    backCardWidth,
    backCardTranslateY,
    translateXAnim,
    translateYAnim,
    rotateAnim,
    cardsData,
  ]);

  const handleAction = (direction: Direction | null) => {
    if (!direction) return;

    const finalTranslateX =
      direction === Direction.right ? SCREEN_WIDTH : -SCREEN_WIDTH;
    const finalTranslateY = 500;
    const finalRotate = direction === Direction.right ? 1 : -1;

    Animated.parallel([
      Animated.timing(translateXAnim, {
        toValue: finalTranslateX,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: finalTranslateY,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: finalRotate,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(backCardWidth, {
        toValue: widthPercentageToDP('83%'),
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      dispatch(updateCards({ group: indexSelected }));
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
    });
  };

  const renderCards = () =>
    cardsData.map((item, index) => {
      const isTopCard = index === cardsData.length - 1;
      const cardStyle = isTopCard
        ? {
            transform: [
              { translateX: translateXAnim },
              { translateY: translateYAnim },
              {
                rotate: rotateAnim.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: ['-45deg', '0deg', '45deg'],
                }),
              },
            ],
          }
        : {
            transform: [{ translateY: backCardTranslateY }],
          };

      return (
        <StyledAnimatedView key={item.id} style={cardStyle}>
          <Card
            id={item.id}
            age={item.age}
            country={item.country}
            city={item.city}
            image={item.image}
            name={item.name}
            width={isTopCard ? undefined : backCardWidth}
            onSwipe={isTopCard ? handleAction : undefined}
          />
        </StyledAnimatedView>
      );
    });

  return (
    <Layout
      isGradient
      gradientColor={gradientColors}
      backgroundColor={theme.colors.primary}>
      <MainContainer>
        <Menu fill={theme.colors.white} height={24} width={24} />
        <Filter fill={theme.colors.white} height={24} width={24} />
      </MainContainer>
      <CardWrapper>{renderCards()}</CardWrapper>
    </Layout>
  );
}

export default React.memo(HomeScreen);
