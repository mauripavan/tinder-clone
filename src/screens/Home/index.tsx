import React from 'react';
import { View } from 'react-native';
import { TextH1 } from '@components/Typography';
import Layout from '@components/Layout';
import theme from '@theme/index';

function HomeScreen() {
  return (
    <Layout
      isGradient
      gradientColor={theme.colors.gradientTertiaty}
      backgroundColor={theme.colors.primary}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextH1>Home Screen</TextH1>
      </View>
    </Layout>
  );
}

export default React.memo(HomeScreen);
