import { SafeAreaView } from "react-native"
import { Slot } from "expo-router"
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter"

import { Loading } from "../components/loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#0F172A",
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 10,
      }}
    >
      <Slot />
    </SafeAreaView>
  )
}
