
import React, { Component } from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Card, CardItem, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';

import styles from './feedPage.styles';

/** 
Font imports 
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
*/

export default class feedPage extends Component {

/** 
to fix the font problem 
https://docs.expo.io/versions/latest/guides/using-custom-fonts/#using-custom-fonts

*/
    
// Later on in your component
/** Fonts for component 
async componentDidMount() {
  await Font.loadAsync({
    'Roboto': require('./assets/fonts/Roboto/Roboto-Black.ttf'),
    'Roboto_medium': require('./assets/fonts/Roboto/Roboto-medium.ttf'), 
    ...Ionicons.font,
  });
}
*/
  constructor() {
    super();
      this.state = {
        screenWidth: Dimensions.get('window').width,
      };
  }

  render() {
    return (
      <Container>
        
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Left>
          <Body>
            <Image source={require('../../res/img/bs-logo.png')} style={{width:40, height: 40}} />
          </Body>
          <Right>
            <Button transparent>
            <Icon name='chatbubbles' />
            </Button>
          </Right>
        </Header>

        <Content>
        
            <Card style={styles.card}>
              <CardItem style={styles.cardHeader}>
                <Left>
                  <Thumbnail source={require('../../res/img/harden.jpg')} />
                  <Body>
                    <Text>JamesHarden13</Text>
                    <Text note>Fans: 329,538</Text>
                  </Body>
                </Left>
                <Right>
                  <Button transparent>
                  <Icon name='navigate' />
                  </Button>
                </Right>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../res/img/lebron.jpg')} style={styles.postImage} />
              </CardItem>
              <CardItem>
                <Left style={styles.cardFooterLeft}>
                  <Text>JamesHarden13 <Text note>So cool!</Text></Text>
                  <Button transparent>
                  <Text>View 227 comments</Text>
                  </Button>
                </Left>
                <Right>
                  <Text>12h ago</Text>
                </Right>
              </CardItem>
            </Card>

            <Card style={styles.card}>
              <CardItem style={styles.cardHeader}>
                <Left>
                <Thumbnail source={require('../../res/img/steph.jpg')} />
                  <Body>
                    <Text>StephCurry30</Text>
                    <Text note>Fans: 423,213</Text>
                  </Body>
                </Left>
                <Right>
                  <Button transparent>
                  <Icon name='navigate' />
                  </Button>
                </Right>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../res/img/curryShot.jpg')} style={styles.postImage} />
              </CardItem>
              <CardItem>
                <Left style={styles.cardFooterLeft}>
                  <Text>StephCurry30 <Text note>I'm Steph Curry with the shot boy!</Text></Text>
                  <Button transparent>
                  <Text>View 321 comments</Text>
                  </Button>
                </Left>
                <Right>
                  <Text>18h ago</Text>
                </Right>
              </CardItem>
            </Card>

        </Content>

      </Container>
    );
  }
}


/** 
Footer tab 
<Footer>
<FooterTab>
  <Button transpent>
    <Icon name='apps' />
  </Button>
</FooterTab>
<FooterTab>
  <Button>
  <Icon name='flame' />
  </Button>
</FooterTab>
<FooterTab>
  <Button>
  <Icon name='camera' />
  </Button>
</FooterTab>
<FooterTab>
  <Button>
  <Icon name='baseball' />
  </Button>
</FooterTab>
<FooterTab>
  <Button>
  <Icon name='person' />
  </Button>
</FooterTab>
</Footer>
*/
