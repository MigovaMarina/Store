import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import CustomStatusBar from '../../components/CustomStatusBar';
import { Map } from '../../components/Map';
import { MainHeader } from './components/MainHeader';

import { COLORS } from '../../constants/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomStatusBar barStyle={'light-content'} backgroundStyle={styles.backgroundStyle}/>
      <MainHeader />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Map containerStyle={styles.map} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backgroundStyle: {
    backgroundColor: COLORS.seaMariner,
  },
  map: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
