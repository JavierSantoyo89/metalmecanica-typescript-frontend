
import style from './Loading.module.css'

//*********************************************************
//************** Loading component complete ***************
//****** https://uiverse.io/Nawsome/fresh-panther-41 ******
//*********************************************************

export default function Loading() {
  return (
    <div>
      <h1>Loading</h1>
     
  <div className={style.gearbox}>
  <div className={style.overlay}></div>
    <div className={style.gear + " " + style.one}>
      <div className={style.gearInner}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>
    </div>
    <div className={style.gear + " " + style.two}>
      <div className={style.gearInner}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>
    </div>
    <div className={style.gear + " " + style.three}>
      <div className={style.gearInner}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>
    </div>
    <div className={style.gear+" "+style.four+" "+style.large+""}>
      <div className={style.gearInner}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>
    </div>
  </div>


  </div>

      
  )
}
