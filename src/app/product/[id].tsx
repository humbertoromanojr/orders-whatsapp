import React from "react"
import { View, Image, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"

import { PRODUCTS } from "@/utils/data/products"
import { formatCurrency } from "@/utils/functions/format-currency"

export default function Product() {
  const { id } = useLocalSearchParams()

  const product = PRODUCTS.filter((item) => item.id === id)[0]

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={product.cover}
        resizeMode="cover"
        style={{ width: "100%", height: "30%" }}
      />

      <View style={{ flex: 1, padding: 5, marginTop: 8 }}>
        <Text style={{ color: "#fff" }}>{formatCurrency(product.price)}</Text>
      </View>
    </View>
  )
}
