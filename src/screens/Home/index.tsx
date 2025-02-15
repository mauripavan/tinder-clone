import React, { useRef } from 'react';
import Layout from '@components/Layout';
import theme from '@theme/index';
import Card from '@components/Card';
import Menu from '@assets/icons/menu.svg';
import Filter from '@assets/icons/filter.svg';
import { MOCKED_CARDS_DATA } from '@constants/data';
import { Animated } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { CardWrapper, MainContainer, StyledAnimatedView } from './styles';

function HomeScreen() {
  const translation = useRef(new Animated.Value(0)).current;

  const renderCards = () =>
    MOCKED_CARDS_DATA.map((item, index) => {
      const isTopCard = index === MOCKED_CARDS_DATA.length - 1;
      const cardStyle = isTopCard
        ? { transform: [{ translateX: translation }] }
        : { marginTop: -18 };

      const cardWidth = !isTopCard && widthPercentageToDP('75%');

      return (
        <StyledAnimatedView key={item.id} style={cardStyle}>
          <Card
            id={item.id}
            key={item.id}
            age={item.age}
            country={item.country}
            city={item.country}
            image={item.image}
            name={item.name}
            width={cardWidth}
          />
        </StyledAnimatedView>
      );
    });

  return (
    <Layout
      isGradient
      gradientColor={theme.colors.gradientTertiaty}
      backgroundColor={theme.colors.primary}
    >
      <MainContainer>
        <Menu fill={theme.colors.white} height={24} width={24} />
        <Filter fill={theme.colors.white} height={24} width={24} />
      </MainContainer>
      <CardWrapper>{renderCards()}</CardWrapper>
    </Layout>
  );
}

export default React.memo(HomeScreen);
