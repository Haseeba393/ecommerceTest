import React from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {DrawerStackParamList, T_MENU_ITEM} from './drawer.stack.types';
import HomeStack from '../homeStack/home.stack';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './drawer.stack.styles';
import {useTheme} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {APIs} from '../../apis';
import {AppAccordion, Loader} from '../../components';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerStack = () => {
  const {colors} = useTheme();

  const {data, isLoading} = useQuery({
    queryKey: ['get-menu'],
    queryFn: async () => {
      const data = await fetch(APIs.menu, {method: 'GET'});
      return data.json();
    },
  });

  const menu: T_MENU_ITEM[] = data?.map((item: T_MENU_ITEM) => item);

  const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
    return (
      <SafeAreaView
        style={[styles.mainContainer, {backgroundColor: colors.background}]}>
        <View style={styles.topContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text
            style={[
              styles.appname,
              {color: colors.text},
            ]}>{`Ecommerce Test`}</Text>
        </View>
        <View style={[styles.seperator, {backgroundColor: colors.border}]} />
        {isLoading ? (
          <Loader />
        ) : (
          <View style={styles.listContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={menu}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <AppAccordion
                  renderHeader={
                    <View style={styles.menuHeader}>
                      <Image
                        source={{uri: item.img}}
                        resizeMode="contain"
                        style={styles.menuItemImage}
                      />
                      <Text style={[styles.menuTitle, {color: colors.text}]}>
                        {item.name}
                      </Text>
                    </View>
                  }
                  renderContent={item.children.map(childrenItem => (
                    <AppAccordion
                      key={childrenItem.name}
                      heading={childrenItem.name}
                      renderContent={childrenItem.categories.map(category => (
                        <Text key={category}>{category}</Text>
                      ))}
                    />
                  ))}
                />
              )}
            />
          </View>
        )}
      </SafeAreaView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
