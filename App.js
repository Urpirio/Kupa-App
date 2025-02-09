import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Constants from 'expo-constants';

//Image
import Innovacion from './assets/hortensia.png';
import Parrot from './assets/parrot-9295172_1280.jpg';

export default function App() {

  const [ChangetoLogin, SetchangetoLogin] = useState(true);
  const [ShowmeLogin, SetshowmeLogin] = useState(false)

  const Login = ()=>{
    SetchangetoLogin(!ChangetoLogin);

    if(ChangetoLogin == false)
      SetshowmeLogin(!ShowmeLogin)
  }


  return (
    <View style={ styles.container }>
      
      <View style={ChangetoLogin ? styles.TextContainer : styles.TextContainerNone} >
      <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.Image} source={Innovacion}/>
          <Text style={styles.Text}>
            Kupa
          </Text>
      </View>
        <TouchableOpacity onPress={Login} style={styles.BtnContinuar}>
          <Text style={styles.BtnText}>
            Continuar
          </Text>
        </TouchableOpacity>
        </View>
        <View style={ChangetoLogin ? style.containerNone : style.container }>
          <View style = {style.InContainer1} >
          <Image style={style.Image} source={Innovacion}/>
            <Text style = {style.TextHeader}>
              Kupa
            </Text>
          </View>
          
          <View style = {style.InContainer2}>
          


          <View style = {style.TextContainer}>
          <Image style={style.ImageParrot} source={Parrot}/>
          <View>
          
            <Text style = {{textAlign: 'center', fontSize: 20,fontWeight: 600,}}>
              All your favorites animals
            </Text>
            <Text style = {{textAlign: 'center',color:'gray'}}>
            If you are installing this in an existing React Native app, start by installing
            </Text>
            </View>
        
          </View>

          <View style = {style.BtnContainer} >
            <TouchableOpacity style ={style.BtnContinuar} >
              <Text style ={{color: 'white',fontSize: 15,fontWeight: 600}}>
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style ={style.BtnSignIn}>
              <Text style ={{fontSize: 16,fontWeight: 600}}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

          </View>
          
        </View>




      <StatusBar style="auto" />
    </View>
  );
};

const style = StyleSheet.create({
  containerNone:{
    display: 'none',
  },
  container: {
    display: 'flex',
   flex: 1,
   width: 359,
   backgroundColor: 'white',
   paddingTop: Constants.statusBarHeight,
   alignItems: 'center',


  },
  InContainer1:{
    flex: 0.07,
    width: 359,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  InContainer2:{
    flex: 1,
    width: 360,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  TextContainer:{
    alignItems: 'center',
    gap:10,

  },
  BtnContainer:{
    gap: 20,

  },
  BtnContinuar:{
    borderWidth: 1,
    borderColor: '#004b23',
    borderRadius: 20,
    backgroundColor: '#004b23',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnSignIn:{
    borderWidth: 1,
    borderColor: '#adb5bd',
    borderRadius: 20,
    backgroundColor: '#d9d9d9',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image:{
    height: 20,
    width:20,

  },
  ImageParrot:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gray',


  },
  TextHeader: {
    fontSize: 16,
    fontWeight: 600,
    color: 'gray',

  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004b23',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Logincontainer:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height: 100,
    width: 100
  },
  

  Text: {
    fontSize: 30,
    fontWeight: 600,
    color: 'white',
  },
  TextContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  TextContainerNone: {
    display: 'none'
  },
  BtnContinuar:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#38b000',
    backgroundColor: '#38b000',
    borderRadius: 20,
    marginTop: 10,
    boxShadow: ' 1px 1px 5px 5pxrgba(225, 229, 242, 0.19)',
  },
  BtnText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'white'

  }
});

