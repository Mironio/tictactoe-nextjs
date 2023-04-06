import {FC} from "react";
import {TictacButton} from "@/pages/components/tictactoe/tictacbutton";
import {ButtonState} from "@/pages/components/tictactoe/common/models";

interface TictacRowProps {
    buttonStates: Array<ButtonState>;
    pushAction: (a: number) => void;
}

export const TictacRow: FC<TictacRowProps> = ({buttonStates, pushAction}) =>
    <div>
        {buttonStates.map(s => <TictacButton {...s} key={s.id} onClick={pushAction}/>)}
    </div>