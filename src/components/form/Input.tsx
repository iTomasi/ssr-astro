import React from "react";

interface IInputProps {
  className?: string,
  labelTitle: string,
  type?: "text" | "password" | "textarea",
  name: string,
  placeholder: string,
  disabled?: boolean
}

const inputClassName: string = "iw-w-full iw-bg-stone-900 iw-p-3 iw-rounded focus:iw-outline-none focus:iw-ring focus:iw-ring-indigo-500 disabled:iw-opacity-75"

function Input({ className = "", labelTitle, type = "text", name, placeholder, disabled = false }: IInputProps) {
  return (
    <div className={className}>
      <label className="iw-block iw-mb-2.5">{labelTitle}</label>

      {
        type === "textarea" ? (
          <textarea
            className={`${inputClassName} iw-resize-x-none iw-min-h-[80px] iw-max-h-[200px] iw-h-[150px]`}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
          ></textarea>
        ) : (
          <input
            className={inputClassName}
            type={type}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
          />
        )
      }
    </div>
  )
};

export default Input;