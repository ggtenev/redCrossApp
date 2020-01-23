import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Tab({ title,icon }) {
    return (
        <View style={styles.container}>
            {/* <Ionicons name={icon} size={32} color="grey" style={styles.icon} /> */}
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="ios-arrow-forward" size={32} color="grey" style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginHorizontal:2,
       marginVertical:3,
       borderColor:'grey',
       borderWidth:1,
       alignItems:'center',
       height:50
   },
   title:{
       fontSize:19,
       color:'#43474d',
       marginLeft:3,
       fontWeight:'bold'
   },
   icon:{
       marginRight:5
   }
})