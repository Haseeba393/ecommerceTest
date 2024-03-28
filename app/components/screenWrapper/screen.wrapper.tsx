import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {T_SCREEN_WRAPPER_PROPS} from './screen.wrapper.types';
import {useTheme} from '@react-navigation/native';
import {styles} from './screen.wrapper.styles';

const ScreenWrapper: React.FC<T_SCREEN_WRAPPER_PROPS> = ({children}) => {
  const {colors, dark} = useTheme();

  return (
    <View style={[styles.mainContainer, {backgroundColor: colors.background}]}>
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>
    </View>
  );
};

export default ScreenWrapper;
