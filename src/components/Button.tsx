import React from "react";

interface IButtonProps {
  className?: string,
  type?: "submit" | "button" | "link",
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  href?: string,
  children: React.ReactNode
}

const theClassName: string = "iw-inline-block iw-min-h-[2.5rem] iw-rounded iw-flex iw-justify-center iw-items-center iw-px-4"

function Button({ className = "", type = "submit", onClick, href = "#", children }: IButtonProps) {
  if (type !== "button" && onClick) throw new Error(`<Button type="${type}"/> can't use onClick props, only for button type`)
  else if (type !== "link" && href !== "#") throw new Error(`<Button type="${type}"/> can't use href props, only for link type`)

  if (type === "link") {
    return (
      <a
        className={`${theClassName} ${className}`}
        href={href}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`${theClassName} ${className}`}
      type={type}
    >
      {children}
    </button>
  )
};

export default Button;