import { View, Text, Pressable, PressableProps, StyleSheet } from "react-native"
import { clsx } from "clsx"

type CategoryProps = PressableProps & {
  title: string
  isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      style={[isSelected ? s.activeCategory : s.noActiveCategory]}
      {...rest}
    >
      <Text style={{ color: "#fff", padding: 7 }}>{title}</Text>
    </Pressable>
  )
}

const s = StyleSheet.create({
  activeCategory: {
    backgroundColor: "#26324f",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#fff",
  },
  noActiveCategory: {
    backgroundColor: "#26324f",
    borderRadius: 7,
  },
})
