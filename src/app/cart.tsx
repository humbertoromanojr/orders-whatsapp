import React from "react"
import { View, Text, ScrollView } from "react-native"

import { useCartStore } from "@/stores/cart-store"

import { formatCurrency } from "@/utils/functions/format-currency"

import { Header } from "@/components/header"
import { Product } from "@/components/product"

export default function Cart() {
  const CartStore = useCartStore()

  const valueTotal = formatCurrency(
    CartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  )

  return (
    <View style={{ flex: 1, paddingTop: 7 }}>
      <Header title="Seu carrinho" />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 12,
          }}
        >
          <Text style={{ color: "#fff" }}>Total:</Text>

          <Text style={{ color: "#0f0", marginLeft: 10, fontWeight: "bold" }}>
            {valueTotal}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
