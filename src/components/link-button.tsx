import React from "react"
import { Link, LinkProps } from "expo-router"

type LinkButtonProps = LinkProps<String> & {
  title: String
}

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link
      style={{
        color: "#0f0",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20,
      }}
      {...rest}
    >
      {title}
    </Link>
  )
}
