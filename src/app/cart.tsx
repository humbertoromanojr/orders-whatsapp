import React from "react"
import { View, Text } from "react-native"

import { useCartStore } from "@/stores/cart-store"

import { Header } from "@/components/header"
import { Product } from "@/components/product"

export default function Cart() {
  const CartStore = useCartStore()

  return (
    <View style={{ flex: 1, paddingTop: 7 }}>
      <Header title="Seu carrinho" />

      {CartStore.products.length > 0 ? (
        <View style={{ flex: 1, padding: 5 }}>
          {CartStore.products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </View>
      ) : (
        <Text
          style={{
            flex: 1,
            textAlignVertical: "center",
            marginTop: 16,
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Seu carrinho esta vazio!
        </Text>
      )}
    </View>
  )
}
