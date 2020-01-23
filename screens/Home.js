import React from 'react';
import { StyleSheet,  Image,ScrollView,TouchableOpacity,View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Tab from '../components/Tab'

class LogoTitle extends React.Component {
  render() {
    return (
      <View style = {styles.header}>
          <Left>
            <Button transparent>
            <Image
          style={{width: 50, height: 50}}
          source={require('../resources/images/Redcross.png')}
        />
            </Button>
          </Left>
          <Body style = {styles.bodyTitle}>
            <Title>Първа Помощ</Title>
          </Body>
         <Right>
         <Ionicons name="ios-heart" size={32} color="white" />
         </Right>
        </View>
    );
  }
}

export default class Home extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'Първа Помощ',
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
render(){
  return (
    <Container>
        <Content>
        <Image
          style={{width: '100%', height: 200}}
          source={require('../resources/images/lenta.jpg')}
        />
        <ScrollView>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Alergy')}>
          <Tab title = 'Помощ при Алергии' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CardioPulmonary')}>
          <Tab title = 'Кардио-пулмонална помощ' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Choking')}>
          <Tab title = 'Помощ при задавяне' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Burns')}>
          <Tab title = 'Помощ при изгаряне' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Stroke')}>
          <Tab title = 'Помощ при инсулт' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HeartAttack')}>
          <Tab title = 'Помощ при инфаркт' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HeadTrauma')}>
          <Tab title = 'Нараняване на главата' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Wounds')}>
          <Tab title = 'Помощ при рани' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SpineInjury')}>
          <Tab title = 'Травма на гръбначния стълб' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Bones')}>
          <Tab title = 'Травми на кости и стави' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Hypoglycemia')}>
          <Tab title = 'Хипогликемия' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Shock')}>
          <Tab title = 'Помощ при шок' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Moving')}>
          <Tab title = 'Преместване на пострадал' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Bleeding')}>
          <Tab title = 'Спиране на кръвотечение' icon=''/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Aside')}>
          <Tab title = 'Стабилно странично положение' icon=''/>
          </TouchableOpacity>

        </ScrollView>
        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button >
            <View style={{flexDirection:'row',alignItems:'baseline'}}>
            <Ionicons name="ios-call" size={36} color="white" style={{ marginRight: 10 }} />
              </View>
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
  header:{
    backgroundColor:'red',
    height:120,
    paddingTop:30,
    width:'100%'
  },
  bodyTitle:{
    alignItems:'center'
  },
  footer:{
    backgroundColor:'red'
  }
});


