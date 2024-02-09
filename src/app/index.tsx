import { useRef, useState } from "react"
import { Text, View, FlatList, SectionList } from "react-native"

import { Header } from "@/components/header"
import { CategoryButton } from "@/components/category-button"

import { CATEGORIES, MENU } from "@/utils/data/products"
import { Product } from "@/components/product"

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

  function handleCategorySelected(selectedCategory: string) {
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    )

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: sectionIndex,
        itemIndex: 0,
      })
    }
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
        ref={sectionListRef}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <Product data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              backgroundColor: "#17233d",
              color: "#fff",
              fontSize: 14,
              fontWeight: "bold",
              padding: 5,
              marginVertical: 10,
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        )}
        style={{ padding: 5 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </View>
  )
}
