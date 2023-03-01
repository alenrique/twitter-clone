import * as Dialog from "@radix-ui/react-dialog";
import { TweetForm } from "./TweetForm";

export function DialogButton() {
    return (
      <Dialog.Root>
        <Dialog.Trigger 
          type="button"
          className="w-32 h-14 ml-4 mt-4 rounded-full bg-blue-400 text-white transition-colors duration-300 hover:bg-white hover:text-blue-400"
        >Tweetar</Dialog.Trigger>
        
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
            <Dialog.Content className="absolute p-10 bg-[#15202b] rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:translate-y-7">
            <Dialog.Title className="text-3xl text-white font-extrabold" >
              Novo Tweet
            </Dialog.Title>
            <Dialog.Close className="text-white absolute right-6 top-6" >x</Dialog.Close>
            <TweetForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    
    )
}