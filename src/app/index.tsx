import { useState } from "react"
import { View, FlatList } from "react-native"

import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button"

import { CATEGORIES } from "@/utils/data/products"

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory)
  }

  return (
    <View>
      <Header title="Faça o seu pedido" cartQuantityItems={1} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelected(item)}
          />
        )}
        style={{ marginTop: 10 }}
        contentContainerStyle={{ gap: 12 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  )
}
