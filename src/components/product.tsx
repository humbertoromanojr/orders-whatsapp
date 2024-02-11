import React, { forwardRef } from "react"
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
  quantity?: number
}

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
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
        ref={ref}
      >
        <Image
          source={data.thumbnail}
          style={{ width: 70, height: 70, borderRadius: 7 }}
        />

        <View style={{ flex: 1, marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "#0f0", flex: 1 }}>{data.title}</Text>
            {data.quantity && (
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: "bold" }}>
                x {data.quantity}
              </Text>
            )}
          </View>
          <Text style={{ color: "#fff", fontSize: 10 }}>
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
)
