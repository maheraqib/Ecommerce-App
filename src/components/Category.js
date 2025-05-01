import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Category = ({item, selectCategory, setSelectCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectCategory(item)}>
      <Text style={[styles.categoryText, selectCategory === item && {
        color: '#FFFFFF', backgroundColor: '#E96E6E'
      }]} >{item}</Text>

    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#938F8F',
        backgroundColor: '#DFDCDC',
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
        marginHorizontal: 8,
    }
})