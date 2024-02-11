import React, { useState } from "react"
import { View, Text, ScrollView, Alert, Linking } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "expo-router"

import { ProductCartProps, useCartStore } from "@/stores/cart-store"

import { formatCurrency } from "@/utils/functions/format-currency"

import { Header } from "@/components/header"
import { Product } from "@/components/product"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { LinkButton } from "@/components/link-button"

const PHONE_NUMBER = "55-seu-numero-de-celular"

export default function Cart() {
  const navigation = useNavigation()
  const [address, setAddress] = useState("")
  const cartStore = useCartStore()

  const valueTotal = formatCurrency(
    cartStore.products.reduce(
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
        onPress: () => cartStore.remove(product.id),
      },
    ])
  }

  function handleOrderWhatsApp() {
    if (address.trim().length === 0) {
      return Alert.alert(
        "Pedido",
        "Informe por favor, os dados da entrega, o seu endereço completo!"
      )
    }

    const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join("")

    const message = `
      🍔 NOVO PEDIDO 🍔
      \n 🏠 ${address}

      ${products}

      \n Valor total: ${valueTotal}
    `

    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
    )

    cartStore.clear()
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, paddingTop: 7 }}>
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {cartStore.products.length > 0 ? (
            <View
              style={{
                flex: 1,
                padding: 5,
                borderBottomWidth: 1,
                borderBottomColor: "#555",
              }}
            >
              {cartStore.products.map((product) => (
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

          <Input
            placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
            onChangeText={setAddress}
            blurOnSubmit={true}
            onSubmitEditing={handleOrderWhatsApp}
            returnKeyType="next"
          />
        </ScrollView>
      </KeyboardAwareScrollView>

      <View style={{ padding: 5, gap: 5 }}>
        <Button onPress={handleOrderWhatsApp}>
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
