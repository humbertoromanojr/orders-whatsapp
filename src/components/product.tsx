import React from "react"
import {
  Image,
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native"

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
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
        marginBottom: 10,
      }}
      {...rest}
    >
      <Image
        source={data.thumbnail}
        style={{ width: 50, height: 50, borderRadius: 7 }}
      />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ color: "#0f0", flex: 1 }}>{data.title}</Text>
        <Text style={{ color: "#fff", marginTop: 10, fontSize: 10 }}>
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
