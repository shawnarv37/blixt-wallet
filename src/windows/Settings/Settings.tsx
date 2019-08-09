import React, { useState, useEffect } from "react";
import { StyleSheet, NativeModules } from "react-native";
import { CheckBox, Button, Body, Container, Icon, Header, Text, Title, Left, Content, List, ListItem, Right, View } from "native-base";

import { createStackNavigator, NavigationScreenProp } from "react-navigation";

interface ISettingsProps {
  navigation: NavigationScreenProp<{}>;
}

export default ({ navigation }: ISettingsProps) => {
  return (
    <Container>
      <Header iosBarStyle="light-content" translucent={false}>
        <Left>
          <Button transparent={true} onPress={() => navigation.pop()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Settings</Title>
        </Body>
      </Header>
      <Content>
        <List style={style.list}>
          <ListItem style={style.itemHeader} itemHeader={true} first={true}>
            <Text>Wallet</Text>
          </ListItem>

          <ListItem button={true} icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="AntDesign" name="lock" /></Left>
            <Body><Text>Set pincode</Text></Body>
          </ListItem>
          <ListItem button={true} icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="Entypo" name="fingerprint" /></Left>
            <Body><Text>Login with fingerprint</Text></Body>
            <Right><CheckBox checked={true} /></Right>
          </ListItem>
          <ListItem button={true} icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="AntDesign" name="form" /></Left>
            <Body>
              <Text>Show mnemonic</Text>
              <Text note={true} numberOfLines={1}>Show 24-word seed for this wallet</Text>
            </Body>
          </ListItem>


          <ListItem style={style.itemHeader} itemHeader={true}>
            <Text>Display</Text>
          </ListItem>

          <ListItem icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="FontAwesome" name="money" /></Left>
            <Body>
              <Text>Fiat currency</Text>
              <Text note={true} numberOfLines={1}>USD</Text>
            </Body>
          </ListItem>
          <ListItem icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="FontAwesome5" name="btc" /></Left>
            <Body>
              <Text>Bitcoin unit</Text>
              <Text note={true} numberOfLines={1}>Bitcoin</Text>
            </Body>
          </ListItem>


          <ListItem style={style.itemHeader} itemHeader={true}>
            <Text>Bitcoin Network</Text>
          </ListItem>

          <ListItem icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="AntDesign" name="team" /></Left>
            <Body><Text>Show current network peer(s)</Text></Body>
          </ListItem>
          <ListItem icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="AntDesign" name="customerservice" /></Left>
            <Body><Text>Set trusted Node for SPV</Text></Body>
          </ListItem>


          <ListItem style={style.itemHeader} itemHeader={true}>
            <Text>Lightning Network</Text>
          </ListItem>

          <ListItem icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="AntDesign" name="user" /></Left>
            <Body><Text>Show node data</Text></Body>
          </ListItem>
          <ListItem icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="AntDesign" name="edit" /></Left>
            <Body><Text>Payment request default description</Text></Body>
          </ListItem>
          <ListItem button={true} icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="Entypo" name="circular-graph" /></Left>
            <Body><Text>Automatically open channels</Text></Body>
            <Right><CheckBox checked={true} /></Right>
          </ListItem>
          <ListItem button={true} icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="Entypo" name="fingerprint" /></Left>
            <Body><Text>Backup channels to Google Drive</Text></Body>
            <Right><CheckBox checked={false} /></Right>
          </ListItem>


          <ListItem style={style.itemHeader} itemHeader={true}>
            <Text>Advanced</Text>
          </ListItem>

          <ListItem icon={true}>
            <Left><Icon style={style.icon} type="Entypo" name="text" /></Left>
            <Body><Text>Open lnd log</Text></Body>
          </ListItem>


          <ListItem style={style.itemHeader} itemHeader={true}>
            <Text>Misc.</Text>
          </ListItem>

          <ListItem icon={true} onPress={() => {}}>
            <Left><Icon style={style.icon} type="AntDesign" name="info" /></Left>
            <Body><Text>About</Text></Body>
          </ListItem>
          {__DEV__ === true &&
            <ListItem icon={true} onPress={() => navigation.navigate("DEV_Commands")}>
              <Left><Icon style={style.icon} type="MaterialIcons" name="developer-mode" /></Left>
              <Body><Text>Go to dev screen</Text></Body>
            </ListItem>
          }
        </List>
      </Content>
    </Container>
  );
};

const style = StyleSheet.create({
  list: {
    paddingTop: 12,
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 48,
  },
  itemHeader: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  icon: {
    fontSize: 22,
  }
});