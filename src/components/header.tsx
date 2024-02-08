import { View, Image, Text } from "react-native"

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#555",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, paddingBottom: 5 }}>
        <Image
          style={{ width: "45%", height: 20 }}
          source={require("@/assets/logo.png")}
        />
      </View>
      <Text style={{ color: "#eee" }}>{title}</Text>
    </View>
  )
}
