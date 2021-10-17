import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + "=" + "(.+?)(&|$)").exec(window.location.search) || [
      ,
      null,
    ])[1] || ""
  );
}

let subid = getURLParameter("subid");
let subid2 = getURLParameter("subid2");
let firstname = getURLParameter("firstname");
let surname = getURLParameter("surname");
let city = getURLParameter("city");
let zipcode = getURLParameter("zipcode");
let address = getURLParameter("address");
let phone = getURLParameter("phone");
let mobile = getURLParameter("mobile");
let pid = getURLParameter("pid");
let nrp = getURLParameter("nrp");
let email = getURLParameter("email");

let ffdomain = "https://" + getURLParameter("ffdomain");
let session = getURLParameter("session");
let fluxf = getURLParameter("fluxf");
let fluxffn = getURLParameter("fluxffn");

function ActionRedirect(action) {
  window.location.replace(
    ffdomain +
      "/?flux_action=" +
      action +
      "&flux_f=" +
      fluxf +
      "&flux_ffn=" +
      fluxffn +
      "&flux_sess=" +
      session
  );
}

const [mes1, mes2, mes3, mes4, mes5, mes6, mes7, mes8] = window.txt.messages;

const Mes1 = (props) => {
  const { set, mess } = props;
  const { mes } = mes1;
  const [view, setView] = useState(false);

  useEffect(() => {
    let cont = document.querySelector(".chatCont");
    let height = cont.getBoundingClientRect().height + 500;
    let load = document
      .querySelector(".loadGif")
      .getBoundingClientRect().bottom;
    // cont.scrollTo(0, load);
    let loader = document.querySelector(".loadGif");
    loader.scrollIntoView();
    setTimeout(() => {
      setView(true);
      // cont.scrollTo(0, height);
    }, 3000);
    setTimeout(() => {
      set({
        ...mess,
        mes2: true,
      });
    }, 3500);
  }, []);

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100 ">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>
      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 fade">
          <p className="lato">{mes}</p>
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

const Mes2 = (props) => {
  const { set, mess } = props;
  const { mes, btn } = mes2;
  const [view, setView] = useState(false);
  const [clicked, setclick] = useState(false);
  let cont = document.querySelector(".chatCont");
  let height = cont.getBoundingClientRect().height + 500;

  useEffect(() => {
    let load = document.querySelector(".loadGif").getBoundingClientRect().top;
    // let loader = document.querySelector(".loadGif");
    // loader.scrollIntoView();
    setTimeout(() => {
      setView(true);
      // cont.scrollTo(0, height);
    }, 3000);
  }, []);

  const click = () => {
    setclick(true);
    set({
      ...mess,
      mes3: true,
    });
  };

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>
      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5">
          <p className="lato">{mes}</p>
          {!clicked && (
            <button className="m-t-2 btn btn-drk" onClick={click}>
              {btn}
            </button>
          )}
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

const Mes3 = (props) => {
  const { set, mess } = props;
  const [view, setView] = useState(false);

  const [clicked, setclick] = useState(false);
  let cont = document.querySelector(".chatCont");
  let height = cont.getBoundingClientRect().height + 1000;
  useEffect(() => {
    let load = document.querySelector(".loadGif").getBoundingClientRect().top;
    // cont.scrollTo(0, load);
    let loader = document.querySelector(".loadGif");
    loader.scrollIntoView();
    setTimeout(() => {
      setView(true);

      // let height = document
      //   .querySelector(".messCont")
      //   .getBoundingClientRect().height;
      cont.scrollTo(0, height);
    }, 3000);
  }, []);

  const { mes, list } = mes3;

  const click = () => {
    setclick(true);
    set({
      ...mess,
      mes4: true,
    });
  };

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>
      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5">
          <p className="lato">{mes}</p>
          <div className="flx flx-wrp flx-jc-ce flx-ai-ce w-100">
            {!clicked &&
              list.map((elem, index) => (
                <button key={index} className="m-t-2 btn btn-trans w-80">
                  {elem}
                </button>
              ))}
            <button className="m-t-2 btn btn-trans w-80" onClick={click}>
              {firstname ? firstname + " " + surname : "{firstname} {surname}"}
            </button>
          </div>
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

const Mes4 = (props) => {
  const { set, mess } = props;
  const [view, setView] = useState(false);
  let cont = document.querySelector(".chatCont");
  let height = cont.getBoundingClientRect().height + 1000;
  const [clicked, setclick] = useState(false);

  useEffect(() => {
    let load = document.querySelector(".loadGif").getBoundingClientRect().top;
    // cont.scrollTo(0, load);
    let loader = document.querySelector(".loadGif");
    loader.scrollIntoView();
    setTimeout(() => {
      setView(true);

      // let height = document
      //   .querySelector(".messCont")
      //   .getBoundingClientRect().height;
      cont.scrollTo(0, height);
    }, 3000);
  }, []);

  const { mes, list } = mes4;

  const click = () => {
    setclick(true);
    set({
      ...mess,
      mes5: true,
    });
  };

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>
      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5">
          <p className="lato">{mes}</p>
          <div className="flx flx-wrp flx-jc-ce flx-ai-ce w-100">
            {!clicked &&
              list.map((elem, index) => (
                <button key={index} className="m-t-2 btn btn-trans">
                  {elem}
                </button>
              ))}
            <button className="m-t-2 btn btn-trans" onClick={click}>
              {email ? email : "sample@yahoo.com"}
            </button>
          </div>
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

let choice = [];

const Mes5 = (props) => {
  const { set, mess } = props;
  const [view, setView] = useState(false);
  const [clicked, setclick] = useState(false);

  useEffect(() => {
    let cont = document.querySelector(".chatCont");
    let height = cont.getBoundingClientRect().height + 500;
    let load = document.querySelector(".loadGif").getBoundingClientRect().top;
    // cont.scrollTo(0, load);
    let loader = document.querySelector(".loadGif");
    loader.scrollIntoView();
    setTimeout(() => {
      setView(true);

      // let height = document
      //   .querySelector(".messCont")
      //   .getBoundingClientRect().height;
      cont.scrollTo(0, height);
    }, 3000);
  }, []);

  const { mes, list } = mes5;

  const click = (val) => {
    if (!clicked) {
      let targ = document.querySelector(`#${val.split(" ")[0]}`);
      targ.classList.remove("btn-trans");
      targ.classList.add("btn-drk");
    }
    // choice = val;
    if (!choice.includes(val)) {
      choice.push(val);
    }
    setTimeout(() => {
      setclick(true);
      set({
        ...mess,
        mes6: true,
      });
    }, 5000);
  };

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>
      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5">
          <p className="lato">{mes}</p>
          <div className="flx flx-wrp flx-jc-ce flx-ai-ce">
            {list.map((elem, index) => (
              <button
                key={index}
                id={elem.split(" ")[0]}
                className="m-t-2 btn btn-trans"
                onClick={() => click(elem)}
              >
                {elem}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

const Mes6 = (props) => {
  const { set, mess } = props;
  const [view, setView] = useState(false);
  let cont = document.querySelector(".chatCont");
  let height = cont.getBoundingClientRect().height + 1000;

  useEffect(() => {
    let load = document.querySelector(".loadGif").getBoundingClientRect().top;
    // cont.scrollTo(0, load);
    let loader = document.querySelector(".loadGif");
    loader.scrollIntoView();
    setTimeout(() => {
      setView(true);
      cont.scrollTo(0, height);
    }, 3000);
    setTimeout(() => {
      set({
        ...mess,
        mes7: true,
      });
    }, 5000);
  }, []);

  const { mes, mes2 } = mes6;

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>
      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5">
          <p className="lato w-100 txt-al-l">{mes}</p>
          {choice.length === 0 ? (
            <button className="m-t-5 btn btn-trans">Pets</button>
          ) : (
            choice.map((elem, ndx) => (
              <p key={ndx} className="w-100 m-t-5 mont mont-b txt-drk">
                {elem}
              </p>
            ))
          )}

          <p className="lato m-t-5">{mes2}</p>
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

const Mes7 = (props) => {
  const { set, mess } = props;
  const [view, setView] = useState(false);
  let cont = document.querySelector(".chatCont");
  let height = cont.getBoundingClientRect().height + 1000;

  useEffect(() => {
    let load = document.querySelector(".loadGif").getBoundingClientRect().top;
    // cont.scrollTo(0, load);
    let loader = document.querySelector(".loadGif");
    loader.scrollIntoView();
    setTimeout(() => {
      setView(true);

      // let height = document
      //   .querySelector(".messCont")
      //   .getBoundingClientRect().height;
      cont.scrollTo(0, height);
    }, 6000);
  }, []);

  const { mes, mes2, btn } = mes7;

  const click = () => {
    set({
      ...mess,
      mes8: true,
    });
  };

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>
      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5">
          <p className="lato">{mes}</p>
          <p className="lato m-t-5">{mes2}</p>
          <button className="m-t-5 btn btn-drk" onClick={click}>
            {btn}
          </button>
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

const Mes8 = (props) => {
  const { set, mess } = props;
  const [view, setView] = useState(false);
  let cont = document.querySelector(".chatCont");
  let height = cont.getBoundingClientRect().height + 1000;

  useEffect(() => {
    let load = document.querySelector(".loadGif").getBoundingClientRect().top;
    // cont.scrollTo(0, load);
    let loader = document.querySelector(".loadGif");
    loader.scrollIntoView();
    setTimeout(() => {
      setView(true);

      // let height = document
      //   .querySelector(".messCont")
      //   .getBoundingClientRect().height;
      cont.scrollTo(0, height);
    }, 4500);
  }, []);

  const { mes } = mes8;

  useEffect(() => {
    setTimeout(() => {
      ActionRedirect(1);
    }, 4500);
  }, []);

  return (
    <div className="flx flx-jc-ce flx-ai-strt m-t-2 flx-shr trans fade-l w-100">
      <div className="flx flx-col flx-jc-strt flx-ai-ce h-100">
        <img src="./img/user.png" alt="user" />
        <p className="lato">Julia</p>
      </div>

      {view ? (
        <div className="flx messCont w-30 flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5">
          <p className="lato">{mes}</p>
        </div>
      ) : (
        <div className="flx flx-jc-ce flx-ai-ce bg-chat flx-col m-l-5 loadGif w-30">
          <img src="./img/load.gif" className="w-30 h-100" />
        </div>
      )}
    </div>
  );
};

const Sample = () => {
  return <div>Sample</div>;
};

const identify = (ctr) => {
  const cont = document.querySelector(".chatCont");

  let div = document.createElement("div");

  div.innerHTML = `<h1>Hello</h1>`;

  switch (ctr) {
    case 0:
      cont.appendChild(div);
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    default:
      break;
  }
};
export {
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
};
