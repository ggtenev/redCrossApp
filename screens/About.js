import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../resources/images/logo-bg.jpg')} />
                <Body>
                  <Text style={styles.header}>Български Червен Кръст</Text>
                  <Image source={require('../resources/images/pyrva.jpeg')} style={{height: 200, width: 200, flex: 1}}/>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                
                <Text>
                    <Text style={styles.attentionText}>ХУМАННОСТ</Text>
                Червеният кръст, роден от желанието да оказва помощ без дискриминация.
                 Неговата цел е да закриля живота и здравето на човека, както и да изисква уважение
                към човешката личност. Той способства за установяването на взаимно разбирателство,
                 дружба, сътрудничество и траен мир между всички народи.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                    <Text style={styles.attentionText}>БЕЗПРИСТРАСТНОСТ</Text>
                    Червеният кръст не проявява предпочитание по отношение на националност,
                    раса, религия, социално положение или политически убеждения. Неговият стремеж е
                    единствено да подпомага хората в зависимост от степента на страданието им и да
                    осигури предимство на онези, които се намират в най-голяма беда и се нуждаят от
                    най-бърза помощ.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                    <Text style={styles.attentionText}>НЕУТРАЛНОСТ</Text>
                    За да запази доверието на всички, Червеният кръст се въздържа да взема участие във враждебни
                    действия и никога не влиза в спорове от политически, расов, религиозен и философски
                    характер.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                    <Text style={styles.attentionText}>НЕЗАВИСИМОСТ</Text>
                    Червеният кръст е независим. Националните дружества, помощници на държавната
                    власт в нейната хуманитарна дейност и подчиняващи се на действащите закони
                    в съответните страни, трябва при все това да запазят своята независимост,
                    която им дава възможност да действат винаги в съответствие с принципите
                    на Червения кръст.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                    <Text style={styles.attentionText}>ДОБРОВОЛНОСТ</Text>
                    Червеният кръст оказва доброволна и безкористна помощ.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                    <Text style={styles.attentionText}>ЕДИНСТВО</Text>
                    Във всяка страна може да съществува само едно дружество на Червения кръст.
                    То трябва да бъде достъпно за всички и да разпростира своята хуманна дейност
                    по цялата територия на страната.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                    <Text style={styles.attentionText}>УНИВЕРСАЛНОСТ</Text>
                    Червеният кръст е световно движение, в което всички дружества имат равни права
                    и задължението взаимно да се подпомагат.  
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Дарете сега</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
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