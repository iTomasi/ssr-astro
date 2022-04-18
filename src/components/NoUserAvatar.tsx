import React from "react";

interface INoUserAvatarProps {
  className?: string,
  username: string
}

const h_RegExp = new RegExp(/iw-h-([0-9]{1,2}|\[(0|[1-9]+)\.[0-9]+(px|rem|em)\])/);
const w_RegExp = new RegExp(/iw-w-([0-9]{1,2}|\[(0|[1-9]+)\.[0-9]+(px|rem|em)\])/);

function NoUserAvatar({ className = "", username }: INoUserAvatarProps) {
  let sizeClassName: string[] = ["iw-w-11 iw-h-11", "iw-text-xl"];


  if (className && h_RegExp.test(className) && w_RegExp.test(className)) {
    const h_exec = h_RegExp.exec(className);
    const w_exec = w_RegExp.exec(className);

    if (h_exec && w_exec) {
      sizeClassName[0] = `${h_exec[0]} ${w_exec[0]}`

      className = className.slice(0, h_exec.index) + className.slice(h_exec.index + h_exec[0].length).trim()
      className = className.slice(0, w_exec.index) + className.slice(w_exec.index + w_exec[0].length).trim()
      className = className.replace(/  +/g, "");
    }
  }

  return (
    <div className={`${sizeClassName.join(" ")} iw-font-medium iw-bg-stone-900 iw-rounded-full iw-flex iw-justify-center iw-items-center ${className}`}>
      <span>{username[0].toUpperCase()}</span>
    </div>
  )
};

export default NoUserAvatar;