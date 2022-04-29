import React from "react";

interface IWrapperProps {
  title: string,
  children: React.ReactNode,
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

function Wrapper({ title, children, onSubmit }: IWrapperProps) {
  return (
    <div className="iw-fixed iw-top-16 iw-right-0 iw-bottom-0 iw-left-0 iw-grid iw-place-items-center iw-z-10">
      <div className="iw-w-full iw-max-h-[100vh] iw-overflow-y-auto iw-py-16">
        <div className="iw-w-11/12 iw-max-w-xl iw-mx-auto">
          <h1 className="iw-text-3xl iw-mb-8 iw-text-center">{title}</h1>

          <form className="iw-bg-stone-800 iw-p-4 iw-rounded" onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Wrapper;