import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import Header from "../Header";
import CartCard from "../CartCard";
import { LinearGradient } from "expo-linear-gradient";
import { CartContext } from "../../context/cardContext";

const CartScreen = () => {
    const {carts, totalPrice, deleteItemFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.header}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        ListHeaderComponent={<></>}
        renderItem={({item})  => <CartCard item={item} deleteFromCart = {deleteItemFromCart}
        increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}
        />}
        ListFooterComponent={
          <>
            <View style={styles.totalShippingContainer}>
              <View style={styles.totalPrice}>
                <Text style={styles.text}> Total:</Text>
                <Text style={styles.text}> ${totalPrice.toFixed(2)} </Text>
                </View>
              <View style={styles.totalPrice}>
                <Text style={styles.text}> Shipping:</Text>
                <Text style={styles.text}> $0.0</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalPrice}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text style={styles.text}> ${totalPrice.toFixed(2)} </Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Checkout </Text>
            </TouchableOpacity>
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 50,
  },
  totalShippingContainer: {
    marginTop: 40,
    borderBottomColor: "#C0C0C0",
  },
  totalPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
    color: "#757575",
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    padding: 10,
    backgroundColor: "#E96E6E",
    fontSize: 24,
    fontFamily: "Poppins",
    fontWeight: 600,
    borderRadius: 20,
    textAlign: "center",
    color: "white",
    marginBottom: 30,
  },
});
