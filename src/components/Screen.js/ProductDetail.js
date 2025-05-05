import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header'

const ProductDetail = () => {
  return (
    <View style = {styles.container}>
          <Header/>
          <View style = {styles.content}>
      <Text style = {styles.text}>ProductDetail</Text>
          </View>
    
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        marginTop: 20,
    }
 
})