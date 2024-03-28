import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {T_HEADER_PROPS} from './header.types';
import {styles} from './header.styles';
import {DrawerActions, useNavigation, useTheme} from '@react-navigation/native';
import {Menu, ShoppingCart, ArrowLeft} from 'react-native-feather';
import {useStoreJotai} from '../../state/store.jotai';
import {gotoCart} from '../../navigation/service';

const Header: React.FC<T_HEADER_PROPS> = ({
  title,
  withBackIcon,
  navigation,
  hideCart,
}) => {
  const {colors} = useTheme();
  const {cartItems} = useStoreJotai();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        {withBackIcon ? (
          <ArrowLeft
            onPress={() => {
              if (navigation.canGoBack()) navigation.goBack();
            }}
            stroke={colors.text}
          />
        ) : (
          <Menu
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
            stroke={colors.text}
          />
        )}
        <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
      </View>
      {!hideCart ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            gotoCart(navigation);
          }}
          style={styles.rightContainer}>
          <ShoppingCart stroke={colors.text} />
          {cartItems.length ? (
            <View
              style={[
                styles.cartBadgeContainer,
                {backgroundColor: colors.notification},
              ]}>
              <Text style={[styles.cartBadge, {color: '#fff'}]}>
                {cartItems.length > 9 ? `9+` : cartItems.length}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
