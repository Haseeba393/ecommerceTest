import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {T_APP_BUTTON} from './app.button.types';
import {styles} from './app.button.styles';
import {useTheme} from '@react-navigation/native';

const AppButton: React.FC<T_APP_BUTTON> = ({
  width,
  title,
  variant,
  disabled,
  onPress,
}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.9}
      style={[
        styles.mainContainer,
        {
          width: width ?? '100%',
          backgroundColor:
            variant == 'outlined' ? 'transparent' : colors.primary,
        },
        variant && {borderWidth: 1, borderColor: colors.primary},
      ]}>
      <Text
        style={[
          styles.title,
          {
            color: variant == 'outlined' ? colors.primary : '#fff',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
