import React, { Component } from "react";
import {Accordion, Container,Card, CardItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Image, StyleSheet,SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import Moving from '../resources/videos/Moving.m4v'

export default class Aside extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Преместване на пострадал',
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
            source={Moving}
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
                  Преместването се извършва от двама спасители. Те хващат пострадалия под тила,
                  така че да подкрепят главата, a с другата ръка хващат пострадалия за колана.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Повдигат пострадалия като се стараят да не движат главата.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Ако пострадалия носи каска, то тя трябва да бъде внимателно отстранена.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>Изваждане от лек автомобил</Text>              
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>1.</Text>
                  Загасете автомобила и дръпнете ръчната спирачка.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>2.</Text>
                  Махнете предпазния колан на пострадалия и обездвижете врата.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 28 }}>3.</Text>
                  Обгърнете пострадалия и като го държите за ръце и внимателно го издърпайте от автомобила.
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