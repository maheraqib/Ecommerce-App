import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../Header'
import { TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { CartContext } from '../../context/cardContext';

const sizes = ['S', 'M', 'L', 'XL']; 
const colors = ['#91A1B0', '#B11D1DD4', '#1F44A3C2', '#9F632AD4', '#1D752BDB', '#000000C9'];
const ProductDetail = () => {
  const navigation = useNavigation();   
  const route = useRoute();
  const item = route.params.item;
  
  const {addToCart} = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddToCart = (item) => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate("Cart")
  }
  return (
    <ScrollView colors={["#FDF0F3", "#FFFBFC"]} style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
      <Header />
      </View>
      <Image
        source={item.image}
        style={styles.coverImage}
      />

      <View style={styles.ContentContainer}>
        <Text style={styles.name}> {item.title} </Text>
        <Text style={styles.price}> {item.price} </Text>
      </View>

      <Text style={styles.sizeText}> Size </Text>

      <View style={styles.sizeContainer} >
        {sizes.map((size) => {
          return (
            <TouchableOpacity key={size} style={styles.sizeValuContainer} onPress={() => {
              setSelectedSize(size);
            }}>
              <Text style={ [styles.sizeValue, selectedSize == size && {color: '#E55B5B'}]}>{size}</Text> 
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.colorText}> Colors </Text>

      <View style={styles.colorContainer}>
        {
          colors.map((color, index) => {
            return(
              <TouchableOpacity onPress={() => {setSelectedColor(color)}} key={index} style={[styles.circleBorder, selectedColor === color && {borderColor: color, borderWidth: 2}]}>
                <View style={[styles.circle, {backgroundColor: color}]}/>
              </TouchableOpacity>
            )
          })
        }

      </View>
      
     

        <TouchableOpacity style={styles.button} onPress={()=> {
          handleAddToCart(item);
        }}>

          <Text style={styles.buttonText}> Add to Cart </Text>

        </TouchableOpacity>

   

    </ScrollView>
  );
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      padding: 20
    },
    coverImage: {
        width: '100%',
        height: 430,
        marginTop: 40,
    },
    ContentContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      textAlign: 'center'
    },
    name: {
      fontFamily: 'Poppins',
      fontSize: 20,
      fontWeight: 500,
      color: '#444444',
    },
    price: {
      fontFamily: 'Poppins',
      fontSize: 20,
      fontWeight: 600,
      color: '#4D4C4C'
    },
    sizeText: {
      fontFamily: 'Poppins',
      fontSize: 20,
      fontWeight: 500,
      color: '#444444',
      padding: 10,
    },

    avaliableSize: {
      flexDirection: 'row',
    },

    sizeContainer: {
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    sizeValuContainer: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#FFFFFF',
      marginHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center',

    },

    sizeValue: {
      fontSize: 18,
      fontWeight: 500,
      fontFamily: 'Poppins'
    },
    colorText: {
      padding: 10,
      marginTop: 15,
      fontSize: 20,
      color: '#444444'
    },
    colorContainer: {
      flexDirection: 'row',
      alignItems: 'center',

    },
    circle: {
      width: 36,
      height: 36,
      borderRadius: 20,
    //  marginHorizontal:10
    },
    circleBorder: {
      width: 48,
      height: 48,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal:5,
      marginVertical: 5
    },
    button: {
      padding:10,
    },
    buttonText: {
      padding:10,
      backgroundColor: '#E96E6E',
      fontSize: 24,
      fontFamily: 'Poppins',
      fontWeight: 600,
      borderRadius: 20,
      textAlign: 'center',
      color: 'white',
      marginHorizontal: 10,
    }
})