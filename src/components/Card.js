import React,{ useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native'
import COLORS from '../consts/colors'
const width = Dimensions.get('window').width / 2 - 30;

export default function  Card({movie}) {
    return (<View style={styles.card}>
            <View style={{height:'100%', width:'100%'}}>
                <Image style={{flex:1, resizeMode:'contain'}} source={movie.thumbnail.path+".jpg"} />    
            </View>
            {/* <Text>{movie.thumbnail.path+".jpg"}</Text> */}
    </View>
    )
}


const styles = StyleSheet.create({

    card: {
        height: 225,
        backgroundColor: COLORS.dark,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
      },
})