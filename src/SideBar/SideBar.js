import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, Icon, List, ListItem } from "native-base";
//const routes = ["Home", "Chat", "Profile","Search"];
const logo=require("./drawer-cover.png");
const routes = [
  {
    name: "Home",
    icon: "home",
    bg: "#C5F442",
  },
  {
    name: "Chat",
    icon: "md-mail",
    bg: "#C5F442",
  },
  {
    name: "Profile",
    icon: "ios-man",
    bg: "#477EEA",
  },
  {
    name: "Search",
    icon: "search",
    bg: "#DA4437",
  },
  {
    name: "TwitterFeed",
    icon: "people",
    bg: "#DA4437",
  },
];
export default class SideBar extends React.Component {
  render() {
    return (
       <Container>
        <Content>
            <Image
            source={logo}
            style={{
              height: 150,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.name)}>
                  <Icon name={data.icon}/>
                  <Text>{data.name}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
