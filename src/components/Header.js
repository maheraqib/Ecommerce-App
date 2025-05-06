import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <View style = {styles.AppIconContainer}> 
            <Image source ={require('../assets/app-icon.png')} style={styles.appicon} />
        </View>
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
      
    }
})