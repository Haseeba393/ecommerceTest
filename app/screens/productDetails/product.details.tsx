import React from 'react';
import {T_PRODUCT_DETAILS_PROPS} from './product.details.types';
import {AppButton, Header, Loader, ScreenWrapper} from '../../components';
import {useTheme} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './product.details.styles';
import {useQuery} from '@tanstack/react-query';
import {APIs} from '../../apis';
import {T_PRODUCT_ITEM} from '../products/products.types';
import {useStoreJotai} from '../../state/store.jotai';

const ProductDetails: React.FC<T_PRODUCT_DETAILS_PROPS> = ({
  navigation,
  route,
}) => {
  const {colors} = useTheme();
  const {productId} = route.params;
  const {cartItems, setCartItem} = useStoreJotai();

  const {data, isLoading} = useQuery({
    queryKey: ['get-products-details'],
    queryFn: async () => {
      const data = await fetch(`${APIs.allProducts}/${productId}`, {
        method: 'GET',
      });
      return data.json();
    },
  });

  const product: T_PRODUCT_ITEM = data;

  let alreadyAdded = cartItems.find(item => item.id == product.id);

  const onAddToCartPress = () => {
    setCartItem(prev => [{...product, quantity: 0}, ...prev]);
  };

  const onRemoveFromCartPress = () => {
    setCartItem(prev => prev.filter(item => item.id != product.id));
  };

  return (
    <ScreenWrapper>
      <Header navigation={navigation} withBackIcon title="Product Details" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <Image
            source={{uri: product.img}}
            resizeMode="cover"
            style={styles.imgStyle}
          />
          <View style={styles.contentRow}>
            <Text style={[styles.name, {color: colors.text}]}>
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
              onPress={alreadyAdded ? onRemoveFromCartPress : onAddToCartPress}
              title={alreadyAdded ? 'Remove From Cart' : 'Add To Cart'}
            />
          </View>
        </ScrollView>
      )}
    </ScreenWrapper>
  );
};

export default ProductDetails;
