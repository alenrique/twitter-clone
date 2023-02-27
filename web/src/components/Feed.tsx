import { DialogButton } from "./DialogButton";
import { Tweet } from "./Tweet";

export function Feed() {
    return (
        <div className="max-w-2xl border-x border-white border-opacity-50 w-full h-[100vh]">
            <div className="border-b border-white border-opacity-50">
                <h1 className="p-4 text-white text-2xl font-semibold">Página Inicial</h1>
            </div>
            <Tweet />
        </div>
    )
}