import { useEffect } from "react";
import {
  ActionRedirect,
  identify,
  Mes1,
  Mes2,
  Mes3,
  Mes4,
  Mes5,
  Mes6,
  Mes7,
  Mes8,
} from "../func";
const { messages } = window.txt;
const checkMin = (time) => {
  if (time < 10) {
    return "0" + time;
  }
  return time;
};

const date = new Date();
const time = date.getHours() + " : " + checkMin(date.getMinutes());

const Head = () => {
  return (
    <header className="w-100 flx flx-col flx-jc-end flx-ai-ce bg-img shdw-bot z-top flx-shr">
      <div className="flx w-100 flx-jc-sb flx-ai-ce">
        <p className="mont m-l-2 mont-b txt-wht txt-al-l">HOME</p>

        <img src="./img/lidl.png" alt="logo" className="w-5 m-l-2 logo" />
        <p className="mont m-r-2 mont-b txt-wht txt-al-r">MANAGE</p>
      </div>
      <small className="lato txt-al-ce txt-wht m-b-2 w-100 flx flx-jc-ce flx-ai-ce">
        Customer Service
      </small>
    </header>
  );
};

const Chat = (props) => {
  const { mes, set } = props;
  const { mes1, mes2, mes3, mes4, mes5, mes6, mes7, mes8 } = mes;

  useEffect(() => {
    // let target = document.querySelector(".chatCont");
    // let header =
    //   document.querySelector("header").getBoundingClientRect().height * 1.8;
    // target.style.marginTop = header + "px";
  }, []);

  return (
    <section className="w-100 h-100 trans chatCont  flx-shr">
      <div className="p-2  w-100 ">
        <div className="w-100 p-b">
          <small className="w-100 flx flx-jc-ce lato m-t-2 w-100 txt-al-ce z-top">
            {time}
          </small>
          {mes1 && <Mes1 set={set} mess={mes} />}
          {mes2 && <Mes2 set={set} mess={mes} />}
          {mes3 && <Mes3 set={set} mess={mes} />}
          {mes4 && <Mes4 set={set} mess={mes} />}
          {mes5 && <Mes5 set={set} mess={mes} />}
          {mes6 && <Mes6 set={set} mess={mes} />}
          {mes7 && <Mes7 set={set} mess={mes} />}
          {mes8 && <Mes8 set={set} mess={mes} />}
        </div>
      </div>
    </section>
  );
};

export { Head, Chat };
