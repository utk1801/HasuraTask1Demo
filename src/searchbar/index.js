import React, { Component } from "react";

import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text,
  Left,
  Right,
  Body,
  Title
} from "native-base";

import styles from "./styles";

class NHSearchbar extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header >
         <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right />
        </Header>
          <Item searchBar rounded> 
            <Icon active name="search" />
            <Input placeholder="Search" />
            <Icon active name="people" />
          </Item>
          
       
      </Container>
    );
  }
}


export default NHSearchbar;
