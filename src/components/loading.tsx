import { ActivityIndicator, View } from "react-native"
import colors from "tailwindcss/colors"

export function Loading() {
  return (
    <View
      style={{
        backgroundColor: "#0F172A",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator color={colors.white} />
    </View>
  )
}
