import React,{ useState, useEffect} from 'react';
import {StyleSheet,Text, TextInput, View, FlatList, Dimensions}from 'react-native';
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';
import axios from 'axios';
const width = Dimensions.get('window').width / 2 - 30;
import Card from '../components/Card'
export default function Home() {

    const [items, setItems] =useState([]);
    useEffect(()=>{
      const fetch = async()=>{
        const result = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=6d9a23db5def39c882404f896ff97618&hash=25a1daf8a870b6c5c4208b2813004506')
        console.log(result.data.data.results)
        setItems(result.data.data.results)
      }
      fetch()
    },[])

 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:"column"}}>
                    <View style={styles.line}></View>
                    <Text style={{fontSize:12, color:COLORS.light, fontWeight:"bold", paddingVertical:5}}> CINEMA APP</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.searchInput}>
                    <TextInput placeholder="search" style={{paddingLeft:12}}/>
                    <Icon name="search" color={COLORS.dark} size={20}style={{paddingRight:12, paddingTop:5}} />
                </View>
                <View style={{backgroundColor:COLORS.gray, width:40,borderRadius:30, alignContent:"center", alignItems:"center"}}>
                    <Text style={{marginTop:5}}>AD</Text>
                </View>
            </View>
            
            <View style={{backgroundColor: COLORS.dark, flex:1}}>
                <FlatList 
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingBottom: 50,
                        }}
                        numColumns={3}
                        data={items}
                        renderItem={({item}) => {
                            return <Card movie={item} />;
                          }}                                            
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  header:{
      paddingTop:60,
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:20,
      backgroundColor:COLORS.dark
  },
  line: {height: 1,
    width: 50,
    backgroundColor: COLORS.yellow,
    marginLeft:20,
},
  searchInput:{
      height:30,
      borderRadius:20,
      backgroundColor:COLORS.gray,
      marginHorizontal:20,
      flexDirection:"row",
      justifyContent:"space-between"
  },
 
});
