import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';


const CartCard = ({item, deleteFromCart}) => {
  console.log(item);
  
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.coverImage} />
      <View style={styles.cardcontent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}        </Text>
        <View style={styles.circulesizecontainer}>
          <View style={[styles.circule, {backgroundColor: item.color}]} />
          <View style={styles.sizecircule}>
            <Text style={styles.size}> {item.size} </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=> {
        deleteFromCart(item)
      }}>
      <Octicons name="trash" color="#F68CB5" size={25} />
      </TouchableOpacity>
    </View>
  );
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 25,
    },
    coverImage: {
        height: 145,
        width: '30%',
        borderRadius: 20,
    },
    cardcontent: {
        flex: 1,
        marginHorizontal: 20,
    },
    title: {
        fontFamily:'Poppins',
        fontSize: 20,
        fontWeight: 500,
        color: '#444444',
    },
    price: {
        fontFamily:'Poppins',
        fontSize: 20,
        fontWeight: 500,
        color: '#797979',
        marginVertical: 20
    },
    circulesizecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
     
    },
    circule: {
        width: 32,
        height: 32,
        borderRadius:16,
        marginHorizontal: 10
    },
    sizecircule:{
        width: 32,
        height: 32,
        borderRadius:16,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    size: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 500,
        color: '#444444'

    }
})