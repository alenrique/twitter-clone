import { Feed } from "./components/Feed";
import "./main.css";
import ImagemHenritter from "./assets/henriquetter.png"
import { DialogButton } from "./components/DialogButton";

function App() {

  return (
    <div className="flex justify-center max-md:flex-col">
      <div className="max-md:flex max-md:justify-center max-md:border-x max-md:border-white max-md:border-opacity-50">
        <img className="h-7 w-[217px] mr-4 mt-6 max-[810px]:h-5 max-md:h-7" src={ImagemHenritter} alt="logo" />
      </div>
      <Feed />
      <div className="w-[217px]">
        <DialogButton />
      </div>
    </div>
  )
}

export default App
