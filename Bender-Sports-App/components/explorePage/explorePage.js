import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native';
import { Container, Content, Header, Item, Input, Icon, Button,Footer, FooterTab, Card, CardItem, Left, Right, Body, Thumbnail } from 'native-base';

import Video from 'react-native-video';
import GiannisDunk from '../../res/videos/giannis-dunk.mp4';

export default class explorePage extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          <Icon name='trophy' />
          </Body>
          <Right></Right>
        </Header>

        <Content>
          <Video source={GiannisDunk}
                 ref={(ref) => {
                  this.player = ref
                }}     
                 />
        </Content>

      </Container>
    )
  }
}
