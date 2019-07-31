import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Header from '~/components/Header';
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';

export default () =>
  createAppContainer(
    createStackNavigator(
      {
        Home,
        Cart,
      },
      {
        defaultNavigationOptions: navigation => ({
          header: <Header {...navigation} />,
        }),
      }
    )
  );
