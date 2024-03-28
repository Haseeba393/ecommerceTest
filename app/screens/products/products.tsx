import React from 'react';
import {T_PRODUCTS_PROPS, T_PRODUCT_ITEM} from './products.types';
import {Header, Loader, ProductCard, ScreenWrapper} from '../../components';
import {useQuery} from '@tanstack/react-query';
import {APIs} from '../../apis';
import {FlatList} from 'react-native';
import {styles} from './products.styles';
import {useStoreJotai} from '../../state/store.jotai';

const Products: React.FC<T_PRODUCTS_PROPS> = ({navigation}) => {
  const query = useQuery({
    queryKey: ['get-products'],
    queryFn: async () => {
      const data = await fetch(APIs.allProducts, {method: 'GET'});
      return data.json();
    },
  });

  const products: T_PRODUCT_ITEM[] = query.data?.map(
    (item: T_PRODUCT_ITEM) => item,
  );

  return (
    <ScreenWrapper>
      <Header title="Products" navigation={navigation} />
      {query.isLoading ? (
        <Loader />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          contentContainerStyle={styles.scrollContainer}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ProductCard navigation={navigation} product={item} />
          )}
        />
      )}
    </ScreenWrapper>
  );
};

export default Products;
