import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './loader.styles';
import {useTheme} from '@react-navigation/native';

const Loader = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
  );
};

export default Loader;
