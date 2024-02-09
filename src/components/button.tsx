import React, { ReactNode } from "react"
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
}

type ButtonTextProps = {
  children: ReactNode
}
type ButtonIconProps = {
  children: ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={{
        backgroundColor: "#17233d",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 7,
      }}
    >
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>
      {children}
    </Text>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

Button.text = ButtonText
Button.Icon = ButtonIcon

export { Button }
