import React, { Component } from "react";
import {Accordion, Container,Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Image, StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import HeartAttack from '../resources/videos/HeartAttack.m4v'

export default class Aside extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Помощ при инфаркт',
    headerLeft: () => <Image
    style={{width: 50, height: 50,marginVertical:7,marginHorizontal:5}}
    source={require('../resources/images/Redcross.png')}
  />,
  headerRight:() => (
    <TouchableOpacity style={{padding:10}}>
      <Ionicons name="ios-heart" size={32} color="white" style={{marginRight:10}}/>
    </TouchableOpacity>
  )
  };
  render() {
    return (
      <Container>
        <Content>
        <Video
            source={HeartAttack}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            shouldPlay
            resizeMode="cover"
            style={{ width: '100%', height: 250 }}
          />
          <Card>
            <CardItem header bordered>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>Стъпки:</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={styles.attentionText}>1.</Text>
                  При съмнения за инфаркт се обадете незабавно на телефон <Text style={styles.attentionText}>112</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Поставете пострадалия в полуседнало / полулегнало положение и го завийте
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Дайте на пострадалия таблетка аспирин и нитрат през устата. Например нитроглицерин под езика.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>4.</Text>              
                  Следете основните жизнени показатели: съзнание, дишане и пулс. При спиране на дишането и на
                  кръвообращението започнете кардио-пулмонална реанимация.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    height: 90,
    paddingTop: 30
  },
  bodyTitle: {
    alignItems: 'center'
  },
  footer: {
    backgroundColor: 'red'
  },
  attentionText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 28
  }
});