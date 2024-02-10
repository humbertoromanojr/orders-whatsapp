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
        backgroundColor: "#0f0",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 7,
        padding: 10,
      }}
    >
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text
      style={{
        color: "#222",
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 10,
      }}
    >
      {children}
    </Text>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
