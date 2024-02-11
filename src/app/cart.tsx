import React from "react"
import { View } from "react-native"

import { useCartStore } from "@/stores/cart-store"

import { Header } from "@/components/header"
import { Product } from "@/components/product"

export default function Cart() {
  const CartStore = useCartStore()

  return (
    <View style={{ flex: 1, paddingTop: 7 }}>
      <Header title="Carrinho" />

      <View style={{ flex: 1, padding: 5 }}>
        {CartStore.products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </View>
    </View>
  )
}
