import React from "react"
import { View, Image, Text } from "react-native"
import { useLocalSearchParams, useNavigation } from "expo-router"
import { Feather } from "@expo/vector-icons"

import { PRODUCTS } from "@/utils/data/products"
import { formatCurrency } from "@/utils/functions/format-currency"
import { Button } from "@/components/button"
import { LinkButton } from "@/components/link-button"

import { useCartStore } from "@/stores/cart-store"

export default function Product() {
  const cartStore = useCartStore()
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()

  const product = PRODUCTS.filter((item) => item.id === id)[0]

  function handleAddToCart() {
    cartStore.add(product)
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={product.cover}
        resizeMode="cover"
        style={{ width: "100%", height: "30%" }}
      />

      <View style={{ flex: 1, padding: 5, marginTop: 8 }}>
        <Text style={{ color: "#0f0", fontSize: 18 }}>
          {formatCurrency(product.price)}
        </Text>
        <Text style={{ color: "#fff" }}>{product.description}</Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            style={{
              color: "#b6aeae",
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 5,
            }}
          >
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>

      <View style={{ padding: 5, paddingBottom: 25, gap: 5 }}>
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={26} />
          </Button.Icon>

          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  )
}
