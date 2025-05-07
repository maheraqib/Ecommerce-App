import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({isCart}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity style = {styles.AppIconContainer} onPress={() => navigation.navigate("HOME-STACK")}> 
            {
                isCart ? (<Ionicons name="chevron-back" color="#E96E6E" size={24} />) : (
                    <Image source ={require('../assets/app-icon.png')} style={styles.appicon} />
                )}
        </TouchableOpacity>
        {
            isCart && (<Text style={styles.text}> My Cart </Text>) 
        }
        <Image source ={require('../assets/header-girl.png')} style={styles.dp} />
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },

    AppIconContainer:{
        backgroundColor: '#FFFFFF',
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
        
    },
    appicon: {
        width: 28,
        height: 28,
    },
    dp: {
        height:44,
        width: 44,
        top: 30, 
    },
   text: {
    top: 30, 
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: 400
   }
})