import React from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

type ProductDataProps = {
  title: string
  description: string
  thumbnail: string
}

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export function Product({ data, ...rest }: ProductProps) {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 7,
      }}
      {...rest}
    ></TouchableOpacity>
  )
}
