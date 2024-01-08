import React from 'react';
import { View, Text, Image, TextInput, Button, Linking, ScrollView, ImageBackground } from 'react-native';

export default function TILogin() {
 return (
   <View>
    <TextInput placeholder='Username' style={{margin:20,marginTop:-5,textAlign:'left',color:'black',borderColor:'gray',backgroundColor:'pink', padding:20, borderRadius:10}} />
    <TextInput placeholder='Password' style={{margin:20,marginTop:0,textAlign:'left',color:'black',borderColor:'gray',backgroundColor:'pink', padding:20, borderRadius:10}} /> 
   </View>
 );
}