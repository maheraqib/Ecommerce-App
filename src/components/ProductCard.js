import { StyleSheet, Image, View, Text } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ProductCard = ({ item, onLikeToggle }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("PRODUCT-DETAILS", {item})
    }} style = {styles.container}>
        <Image source = {item.image} style = {styles.cover}/>
        <View style = {styles.contant}>

        <Text style={styles.title}> {item.title} </Text>
        <Text style= {styles.price}> ${item.price} </Text>
        </View>

        <TouchableOpacity onPress={onLikeToggle} style={styles.heartIcon}>
        {item.isLike ? (
          <FontAwesome name="heart" color="#E55B5B" size={20} />
          
        ) : (
          <EvilIcons name="heart" color="#E55B5B" size={20} />
        )}
      </TouchableOpacity>
        
    </TouchableOpacity>
  )
}

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    position: 'relative'
  },
  cover: {
    width:'95%',
    height: 257,
    borderRadius: 20,
    marginVertical: 10,

  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    color: '#444444',
  },
  price: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 18,
    color: '#9C9C9C'
  },
  heartIcon: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
        height: 30,
        width: 30,
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        right: 10
  }
})