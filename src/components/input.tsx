import React from "react"
import { TextInput, TextInputProps } from "react-native"
import colors from "tailwindcss/colors"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      style={{
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: "#1a243a",
        height: 77,
        color: "#fff",
      }}
      placeholderTextColor={colors.slate[400]}
      {...rest}
    />
  )
}
