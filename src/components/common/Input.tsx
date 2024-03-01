

//**
        // <input type="button">
        // <input type="checkbox">
        // <input type="color">
        // <input type="date">
        // <input type="datetime-local">
        // <input type="email">
        // <input type="file">
        // <input type="hidden">
        // <input type="image">
        // <input type="month">
        // <input type="number">
        // <input type="password">
        // <input type="radio">
        // <input type="range">
        // <input type="reset">
        // <input type="search">
        // <input type="submit">
        // <input type="tel">
        // <input type="text">
        // <input type="time">
        // <input type="url">
        // <input type="week">
    //*

    interface inputProps {
      type: string
      plaseholder?: string
      id?: string | number
      name?: string | number
      value?: string | number
      minlength?: number
      maxlength?: number
      pattern?: string
      min?: string
      max?:string
      size?: number
      labelHTMLFor?: string
      labelName?: string | number
      notify?: () => void
      dataInput?: object
    }
export const Input: React.FC<inputProps> = ({...props}: inputProps) => {
  return (<>
    <label htmlFor={props.labelHTMLFor}>{props.labelName}</label>
    <input type={props.type} placeholder={props.plaseholder} onClick={props.notify} {...props.dataInput}/>
  </>
  )
}
