import React from "react"
import { Link, LinkProps } from "expo-router"

type LinkButtonProps = LinkProps<String> & {
  title: String
}

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link style={{ textAlign: "center", fontWeight: "bold" }} {...rest}>
      {title}
    </Link>
  )
}
