import React from 'react';
import {T_CART_PROPS} from './cart.types';
import {AppButton, Header, ScreenWrapper} from '../../components';
import {useTheme} from '@react-navigation/native';
import {useStoreJotai} from '../../state/store.jotai';
import {FlatList, Image, Text, View} from 'react-native';
import {T_CART_ITEM} from '../../state/types';
import {styles} from './cart.styles';
import {PlusCircle, MinusCircle} from 'react-native-feather';
import {appSpacings, pixelSizeVertical} from '../../theme';

const Cart: React.FC<T_CART_PROPS> = ({navigation}) => {
  const {colors} = useTheme();
  const {cartItems, setCartItem} = useStoreJotai();

  const onRemoveFromCartClick = (id: number) => {
    setCartItem(prev => prev.filter(item => item.id != id));
  };

  const addQuantity = (id: number) => {
    setCartItem(prev =>
      prev.map(item => {
        if (item.id == id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else return item;
      }),
    );
  };

  const minusQuantity = (id: number) => {
    setCartItem(prev =>
      prev.map(item => {
        if (item.id == id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else return item;
      }),
    );
  };

  const CartItem = (props: {cartItem: T_CART_ITEM}) => {
    return (
      <View
        style={[
          styles.cartItemContainer,
          {borderColor: colors.border, backgroundColor: colors.background},
        ]}>
        <View style={styles.cartItemTopContainer}>
          <Image
            source={{uri: props.cartItem.img}}
            resizeMode="contain"
            style={styles.cartItemImageContainer}
          />
          <View style={styles.cartItemTopContent}>
            <Text style={[styles.cartItemName, {color: colors.text}]}>
              {props.cartItem.name}
            </Text>
            <Text style={[styles.cartItemPrice, {color: colors.text}]}>
              {`$ ${props.cartItem.price}`}
            </Text>
            <Text style={[styles.cartItemColor, {color: colors.text}]}>
              {`Color: ${props.cartItem.colour}`}
            </Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <Text
            style={[styles.quantity, {color: colors.text}]}>{`Quantity`}</Text>
          <View style={styles.quantityActions}>
            <PlusCircle
              onPress={() => {
                addQuantity(props.cartItem.id);
              }}
              stroke={colors.text}
            />
            <Text style={[styles.quantityValue, {color: colors.text}]}>
              {props.cartItem.quantity}
            </Text>
            <MinusCircle
              onPress={() => {
                minusQuantity(props.cartItem.id);
              }}
              stroke={colors.text}
            />
          </View>
        </View>
        <AppButton
          title="Remove From Cart"
          onPress={() => {
            onRemoveFromCartClick(props.cartItem.id);
          }}
        />
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <Header hideCart withBackIcon title="Cart" navigation={navigation} />
      <View style={styles.mainContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          contentContainerStyle={{rowGap: pixelSizeVertical(appSpacings[2])}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CartItem cartItem={item} />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Cart;
