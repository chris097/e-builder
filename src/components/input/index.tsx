import React from "react"

type Props = {
    label?: string,
    input?: any
}

const Input:React.FC<Props> = (props) => {
  return (
      <div className="w-full">
          <div>
            <label className="text-basegray text-sm" htmlFor={props.label}>{props.label}</label>
          </div>
      <input
        className="border w-full h-10 px-3 mt-1 focus:outline-none capitalize text-basegray text-sm border"
        {...props.input}
      />
    </div>
  )
}

export default Input