import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";

const CartCard = ({
  item,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.coverImage} />
      <View style={styles.cardcontent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          ${item.price} x {item.quantity || 1}
        </Text>

        <View style={styles.quantityControls}>
          <TouchableOpacity
            onPress={() => decreaseQuantity(item)}
            style={[
              styles.qtyButton,
              item.quantity === 1 && { backgroundColor: "#ccc" }, // Greyed out
            ]}
            disabled={item.quantity === 1}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qtyDisplay}>{item.quantity}</Text>

          <TouchableOpacity
            onPress={() => increaseQuantity(item)}
            style={styles.qtyButton}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.circulesizecontainer}>
          <View style={[styles.circule, { backgroundColor: item.color }]} />
          <View style={styles.sizecircule}>
            <Text style={styles.size}> {item.size} </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteFromCart(item);
        }}
      >
        <Octicons name="trash" color="#F68CB5" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
  },
  coverImage: {
    height: 155,
    width: "30%",
    borderRadius: 20,
  },
  cardcontent: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: 500,
    color: "#444444",
  },
  price: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: 500,
    color: "#797979",
    marginVertical: 10,
  },
  circulesizecontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  circule: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  sizecircule: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
  },
  size: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
    color: "#444444",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  qtyButton: {
    width: 30,
    height: 30,
    backgroundColor: "#E96E6E",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  qtyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  qtyDisplay: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
});
