import {View, Text, Image} from 'react-native';
import React from 'react';
import {T_PRODUCT_CARD_PROPS} from './product.card.types';
import {useTheme} from '@react-navigation/native';
import {styles} from './product.card.styles';
import {AppButton} from '../..';
import {useStoreJotai} from '../../../state/store.jotai';
import {gotoProductDetailsFromProducts} from '../../../navigation/service';

const ProductCard: React.FC<T_PRODUCT_CARD_PROPS> = ({product, navigation}) => {
  const {colors} = useTheme();
  const {cartItems, setCartItem} = useStoreJotai();

  let alreadyAdded = cartItems.find(item => item.id == product.id);

  const onAddToCartPress = () => {
    setCartItem(prev => [{...product, quantity: 0}, ...prev]);
  };

  const onRemoveFromCartPress = () => {
    setCartItem(prev => prev.filter(item => item.id != product.id));
  };

  const onDetailsPress = () => {
    gotoProductDetailsFromProducts(navigation, {productId: product.id});
  };

  return (
    <View
      style={[
        styles.mainContainer,
        {borderColor: colors.border, backgroundColor: colors.background},
      ]}>
      <Image
        source={{uri: product.img}}
        resizeMode="cover"
        style={styles.imgStyle}
      />
      <View style={styles.contentRow}>
        <Text numberOfLines={2} style={[styles.name, {color: colors.text}]}>
          {product.name}
        </Text>
        <Text
          style={[
            styles.price,
            {color: colors.text},
          ]}>{`$ ${product.price}`}</Text>
      </View>
      <Text
        style={[
          styles.color,
          {color: colors.text},
        ]}>{`Color: ${product.colour}`}</Text>
      <View style={styles.actionsContainer}>
        <AppButton
          onPress={onDetailsPress}
          variant="outlined"
          width={'48%'}
          title="Details"
        />
        <AppButton
          onPress={alreadyAdded ? onRemoveFromCartPress : onAddToCartPress}
          width={'48%'}
          title={alreadyAdded ? 'Remove from cart' : 'Add to cart'}
        />
      </View>
    </View>
  );
};

export default ProductCard;
