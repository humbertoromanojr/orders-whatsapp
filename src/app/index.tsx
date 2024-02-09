import { useState } from "react"
import { Text, View, FlatList, SectionList } from "react-native"

import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button"

import { CATEGORIES, MENU } from "@/utils/data/products"

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

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Text
            style={{
              color: "#fff",
              paddingBottom: 5,
              fontSize: 12,
              paddingLeft: 5,
            }}
          >
            {item.title}
          </Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              color: "#0f0",
              fontSize: 14,
              fontWeight: "bold",
              paddingTop: 10,
            }}
          >
            {title}
          </Text>
        )}
      />
    </View>
  )
}
