import { View, Image, Text, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors"

type HeaderProps = {
  title: string
  cartQuantityItems?: number
}

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#555",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "45%", height: 20 }}
          source={require("@/assets/logo.png")}
        />
        <Text
          style={{
            color: "#0f0",
            paddingVertical: 10,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </View>

      {cartQuantityItems > 0 && (
        <TouchableOpacity style={{ position: "relative" }} activeOpacity={0.7}>
          <View
            style={{
              backgroundColor: "#0f0",
              width: 16,
              height: 16,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              marginLeft: -7,
              zIndex: 9,
            }}
          >
            <Text style={{ color: "#222", fontWeight: "bold", fontSize: 10 }}>
              {cartQuantityItems}
            </Text>
          </View>

          <Feather
            name="shopping-bag"
            color={colors.white}
            size={24}
            style={{ paddingTop: 9 }}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}
