import React from "react";
import Trash from "../../assets/img/trash/Trash";
interface buttonProps {
  type: undefined | "button" | "submit" | "reset";
  id?: string;
  className?: string;
  name?: string;
  buttonNanme?: string;
  value?: string;
  disabled?: boolean;
  onClick?: () => void;
  form?: string;
}

export const Button: React.FC<buttonProps> = ({ ...props }: buttonProps) => {
  return (
    <>
      <button
        type={props.type}
        id={props.id}
        className={props.className}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.onClick}
        form={props.form}
      >
        {props.buttonNanme}
        <Trash />
      </button>
    </>
  );
};
