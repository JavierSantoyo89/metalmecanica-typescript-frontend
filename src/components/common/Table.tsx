import { useEffect } from "react";
import Loading from "../loading/Loading";
import { Button } from "../common/Button";
import styleTrash from '../../assets/img/trash/Trash.module.css'
export const Table = () => {
  useEffect(() => {
    <Loading/>
  }, []);

  return (
    <div>
      Table
      <Button type = "button"  className={styleTrash.binButton}/>
      <ol>
        <li>Item 1</li>
      </ol>
    </div>
  );
};
