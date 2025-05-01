import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Header from "../src/components/Header";
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from "./components/Category";
import ProductCard from "./components/ProductCard";


const categories = ['Trending Now', 'All', 'New', 'Kids', 'Mens', 'Womens', ]
const HomeScreen = () => {
    const [selectCategory, setSelectCategory] = useState('Trending Now');
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      {/* Header Component */}
      <Header />

      <Text style={styles.headingText}> Match Your Style </Text>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name="search" color="#C0C0C0" size={26} />
        </View>
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>

      {/* Category */}
      <FlatList
        data={categories}
        renderItem={({item}) => <Category item = {item} selectCategory = {selectCategory}
                    setSelectCategory = {setSelectCategory}/> }
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
      />

      {/* Product list */}
      <View>
        <ProductCard/>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    headingText: {
        fontSize: 28,
        fontWeight: 400,
        fontFamily: 'Poppins',
        color: '#000000',
        marginTop: 50,
        textAlign: 'center'
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginVertical: 10,
    },
    iconContainer: {
        marginHorizontal: 20,
    },
    textInput: {
        flex: 1,
    },
});
