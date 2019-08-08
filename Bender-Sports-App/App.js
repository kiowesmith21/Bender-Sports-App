
import React , { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Icon } from 'native-base';


import FeedPage from './components/feedPage/feedPage';
import ExplorePage from './components/explorePage/explorePage';
import PostPage from './components/postPage/postPage';
import SportsPage from './components/sportsPage/sportsPage';
import ProfilePage from './components/profilePage/profilePage';

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}


/** 
 Routes: bottomTabNavigator
 Note: in the future will need to seperate it into its own route folder
 */
const AppNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedPage,
      navigationOptions: {
        tabBarIcon: <Icon name='apps' />
        /** Code to possibly change the BottomTabBar to a different color when clicked, it changes the text but not the icons*/
        // tabBarIcon: ({tintColor}) =>
        //   <Icon name="apps" color={tintColor} />
      }
    },

    Explore: {
      screen: ExplorePage,
      navigationOptions: {
        tabBarIcon: <Icon name='trophy' />
      }
    }, 

    Post: {
      screen: PostPage,
      navigationOptions: {
        tabBarIcon: <Icon name='camera' />
      }
    }, 
    
    Sports: {
      screen: SportsPage,
      navigationOptions: {
        tabBarIcon: <Icon name='baseball' />
      }
    }, 

    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        tabBarIcon: <Icon name='person' />
      }
    }

  },

  {
      initialRouteName: "Feed",
      defaultNavigationOptions: {
        tabBarOptions: { 
          showLabel: false,
          /** Code possibly for Bottom Tab should change colors it changes text but not the icons*/
          // activeTintColor: 'tomato',
          // inactiveTintColor: 'gray'
        }
        
      }

  }

);

const AppContainer = createAppContainer(AppNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
