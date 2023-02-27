import { Feed } from "./components/Feed";
import "./main.css";
import ImagemHenritter from "./assets/henriquetter.png"
import { DialogButton } from "./components/DialogButton";

function App() {

  return (
    <div className="flex justify-center">
      <img className="h-7 w-[217px] mr-4 mt-6" src={ImagemHenritter} alt="logo" />
      <Feed />
      <div className="w-[217px]">
        <DialogButton />
      </div>
    </div>
  )
}

export default App
