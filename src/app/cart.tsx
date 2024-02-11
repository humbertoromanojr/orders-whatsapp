import React from "react"
import { View, Text, ScrollView, Alert } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Feather } from "@expo/vector-icons"

import { ProductCartProps, useCartStore } from "@/stores/cart-store"

import { formatCurrency } from "@/utils/functions/format-currency"

import { Header } from "@/components/header"
import { Product } from "@/components/product"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { LinkButton } from "@/components/link-button"

export default function Cart() {
  const CartStore = useCartStore()

  const valueTotal = formatCurrency(
    CartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  )

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`, [
      {
        text: "Cancelar",
      },
      {
        text: "Remover",
        onPress: () => CartStore.remove(product.id),
      },
    ])
  }

  return (
    <View style={{ flex: 1, paddingTop: 7 }}>
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {CartStore.products.length > 0 ? (
            <View
              style={{
                flex: 1,
                padding: 5,
                borderBottomWidth: 1,
                borderBottomColor: "#555",
              }}
            >
              {CartStore.products.map((product) => (
                <Product
                  key={product.id}
                  data={product}
                  onPress={() => handleProductRemove(product)}
                />
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

          <Input placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..." />
        </ScrollView>
      </KeyboardAwareScrollView>

      <View style={{ padding: 5, gap: 5 }}>
        <Button>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={22} />
          </Button.Icon>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  )
}
