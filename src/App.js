import { useState, useEffect } from "react";
import { Head, Chat } from "./components/Components";
function App() {
  const [mes, setMes] = useState({
    mes1: true,
    mes2: false,
    mes3: false,
    mes4: false,
    mes5: false,
    mes6: false,
    mes7: false,
    mes8: false,
  });
  useEffect(() => {
    setTimeout(() => {
      let target = document.querySelector(".hidden");
      let header =
        document.querySelector("header").getBoundingClientRect().height + 75;

      target.style.height = header + "px";
    }, 300);
  }, []);

  return (
    <div className="flx flx-col flx-jc-sp flx-ai-ce w-100 h-100 pos-rel z-top">
      <Head />
      <div className="hidden w-100"></div>

      <Chat mes={mes} set={setMes} />
    </div>
  );
}

export default App;
