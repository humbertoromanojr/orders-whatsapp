import React from "react"
import { View } from "react-native"
import { useLocalSearchParams } from "expo-router"

export default function Product() {
  const { id } = useLocalSearchParams()

  console.log("== [id] > => ", id)

  return <View style={{ flex: 1 }}></View>
}
