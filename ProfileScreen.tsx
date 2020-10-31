import * as React from 'react';
import { StyleSheet,SafeAreaView, } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import ProfilePicture from '../components/ProfilePicture';







export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
     <View style={styles.headerContainer}>
       <MaterialIcons  name="arrow-back" size={30} color={Colors.light.tint}  />
     </View>
    <View style={styles.ProfileContainer}>
       <ProfilePicture size={100} image={'https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/120426173_4536864283052527_5986015926137631131_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=unIu1yxiimwAX_4z3vb&_nc_ht=scontent.ftun4-1.fna&oh=0d10fce29cda8162035aeda38ece9c06&oe=5FB3142E'}/>
       <Text style={styles.name}>
                  khaled weslati
                </Text>
         </View>  
         <View style={styles.profileDetail}>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Post</Text>
                <Text style={styles.count}>200</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Followers</Text>
                <Text style={styles.count}>200</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.title}>Following</Text>
                <Text style={styles.count}>200</Text>
              </View>
            </View>
    </SafeAreaView>


    
  );
}  


const styles = StyleSheet.create({
  container: {
     flex:7,
     backgroundColor: 'white'
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  
  headerContainer: {
    width: '102%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    marginTop: -200 ,
    backgroundColor: "#00BFFF",

 },
 ProfileContainer: {
  width: 110,
  height: 130,
  borderWidth: 3,
  borderColor: "white",
  flex:1,
  alignSelf:"center",
  position: 'absolute',
  alignItems: 'center',
  borderRadius: 70,
  marginTop:130
},
name:{
  alignItems: 'center',
  fontSize:14,
  color:"black",
  fontWeight:'700',
},
profileDetail:{
  alignSelf: 'center',
  marginTop:250,
  alignItems: 'center',
  flexDirection: 'row',
  position:'absolute',
  backgroundColor: "#ffffff"
},
detailContent:{
  margin:10,
  alignItems: 'center'
},
title:{
  fontSize:20,
  color: "black"
},
count:{
  fontSize:18,
},
});  
