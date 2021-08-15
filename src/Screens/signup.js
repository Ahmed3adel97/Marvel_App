import React from 'react'
import { StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import COLORS from '../consts/colors'
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Signup({navigation}) {
    
    return (
    <View style={{flex:1, backgroundColor:COLORS.dark}}>
       <View style={{paddingTop:80, paddingLeft:50}}>
         <View style={styles.line}></View>
            <Text style={{fontSize:22, color:COLORS.light, fontWeight:"bold"}}> CINEMA APP</Text>
         <View style={styles.line}></View>  
       </View>
        <View style={{paddingTop: 120}}>
            <View style={{ marginTop: 20,paddingHorizontal:50}}>
                <TextInput placeholder="Username" style={styles.input}/>
            </View>
            <View style={{marginTop: 20, paddingHorizontal:50}}>
                <TextInput placeholder="password" style={styles.input}/>
            </View>
        </View>

        <View style={{paddingTop:70,paddingLeft:50, paddingRight:50, flexDirection:"row", alignItems:"center"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btn}>Login </Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

const styles =  StyleSheet.create({
    input:{
        color: COLORS.light,
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        fontSize: 18,
        height: 50,

    },btn:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
        color:COLORS.light,
        fontSize: 18,
        height: 50,
        borderWidth:2,
        borderColor:COLORS.yellow,
        paddingTop:15,
        paddingLeft:20,
        borderRadius:5,
        width:100

    },
    line: {height: 3,
         width: 50,
         backgroundColor: COLORS.yellow,
         marginLeft:50,
         marginBottom:10,
         marginTop:10
    },
    
})