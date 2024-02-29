import React from "react"

interface buttonProps {
    type: string
    disabled?: boolean

}
export const Button: React.FC<buttonProps> = () => {
  return (
    <div>
        <button type="button"></button>
    </div>
  )
}
