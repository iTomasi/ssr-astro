import React from "react";

interface IWrapperProps {
  title: string,
  children: React.ReactNode
}

function Wrapper({ title, children }: IWrapperProps) {
  return (
    <div className="iw-fixed iw-top-16 iw-right-0 iw-bottom-0 iw-left-0 iw-grid iw-place-items-center">
      <div className="iw-w-11/12 iw-max-w-xl">
        <h1 className="iw-text-3xl iw-mb-8 iw-text-center">{title}</h1>

        <form className="iw-bg-stone-800 iw-p-4 iw-rounded">
          {children}
        </form>
      </div>
    </div>
  )
}

export default Wrapper;