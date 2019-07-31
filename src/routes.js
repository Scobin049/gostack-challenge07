import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Header from '~/components/Header';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
      Cart: { screen: Cart },
    },
    {
      defaultNavigationOptions: {
        header: <Header />,
      },
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
