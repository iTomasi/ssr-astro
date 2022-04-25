import React, { useEffect } from "react";

// Components
import Button from "components/Button";

interface ILoggedOptsProps {
  username: string,
  show: boolean,
  setShow: (value: boolean | ((prev: boolean) => boolean)) => void
}

const options = [
  { name: "Settings", href: "/settings" }
];

const buttonClassName: string = "iw-rounded-none hover:iw-bg-indigo-500"

function LoggedOpts({ username, show, setShow }: ILoggedOptsProps) {

  useEffect(() => {
    const checkDiv = (e: any) => {
      let theTarget = e.target;

      while(theTarget) {
        if (theTarget.classList.contains("iw_user-profile-picture")) return true

        theTarget = theTarget.parentElement
      }

      return false
    }

    const handleOnClick = (e: any) => {
      if (!show || checkDiv(e)) return
      setShow(false)
    }

    window.addEventListener("click", handleOnClick);

    return () => {
      window.removeEventListener("click", handleOnClick)
    }
  }, [show])

  return (
    <div
      className={`iw-bg-stone-700 iw-absolute iw-min-w-[150px] iw-max-w-[150px] iw-top-[120%] iw-right-0 sm:iw-max-w-xs iw-rounded iw-transition-all iw-duration-300 ${show ? "iw-opacity-100 iw-visible" : "iw-opacity-0 iw-invisible"}`}
    >
      <Button
        className={`${buttonClassName} iw-rounded-tl iw-rounded-tr`}
        type="link"
        href={`/profile?user=${username.toLowerCase()}`}
      >
        Profile
      </Button>
      {
        options.map((value, index, arr) => (
          <Button
            key={index}
            className={`${buttonClassName} ${arr.length - 1 === index ? "iw-rounded-bl iw-rounded-br" : ""}`}
            type="link"
            href={value.href}
          >
            {value.name}
          </Button>
        ))
      }
    </div>
  )
};

export default LoggedOpts;