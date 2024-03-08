import styleDownload from "./buttonDownload.module.css";
import buttonEdit from "./buttonEdit.module.css";
import buttonDelete from "./buttonDelete.module.css";
// import Trash from "../../../assets/img/trash/Trash";
interface buttonProps {
  // type: undefined | "button" | "submit" | "reset";
  id?: string | number;
  className?: string;
  name?: string;
  buttonNanme?: string;
  value?: string;
  disabled?: boolean;
  onClick?: () => void | string | number | object | undefined;
  form?: string;
  buttonActionType: string;
  withIcon?: number;
  heightIcon?: number;
}

// export const Button: React.FC<buttonProps> = ({ ...props }: buttonProps) => {
//   return (
//     <>
{
  /* <button
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
      </button> */
}
export const Button: React.FC<buttonProps> = ({ ...props }: buttonProps) => {
  return (
    <>
      {props.buttonActionType == "Download" ? (
        <>
          <button
            className={styleDownload.Btn}
            onClick={props.onClick}
            style={{
              height: `${props.heightIcon}px`,
              width: `${props.withIcon}px`,
            }}
          >
            <svg viewBox="0 0 384 512" className={styleDownload.svgIcon}>
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
            </svg>
            <span className={styleDownload.icon2}></span>
          </button>
        </>
      ) : (
        <></>
      )}

      {props.buttonActionType == "Edit" ? (
        <>
          <button
            className={buttonEdit.editBtn}
            onClick={props.onClick}
            style={{
              height: `${props.heightIcon}px`,
              width: `${props.withIcon}px`,
            }}
          >
            <svg height="1em" viewBox="0 0 512 512">
              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
            </svg>
          </button>
        </>
      ) : (
        <></>
      )}

      {props.buttonActionType == "Delete" ? (
        <>
          <button
            className={buttonDelete.binButton}
            onClick={props.onClick}
            style={{
              height: `${props.heightIcon}px`,
              width: `${props.withIcon}px`,
            }}
          >
            <svg fill="none" viewBox="0 0 39 7" className={buttonDelete.binTop}>
              <line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
              <line
                strokeWidth="3"
                stroke="white"
                y2="1.5"
                x2="26.0357"
                y1="1.5"
                x1="12"
              ></line>
            </svg>
            <svg
              fill="none"
              viewBox="0 0 33 39"
              className={buttonDelete.binBottom}
            >
              <mask fill="white" id="path-1-inside-1_8_19">
                <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
              </mask>
              <path
                mask="url(#path-1-inside-1_8_19)"
                fill="white"
                d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
              ></path>
              <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
              <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
            </svg>
            <svg
              fill="none"
              viewBox="0 0 89 80"
              className={buttonDelete.garbage}
            >
              <path
                fill="white"
                d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
              ></path>
            </svg>
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

// Download button: https://uiverse.io/vinodjangid07/clever-bird-35
// Edit button: https://uiverse.io/vinodjangid07/young-snake-87
// Delete button: https://uiverse.io/vinodjangid07/lazy-dog-51
