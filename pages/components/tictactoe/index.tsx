'use client';
// https://epic-react-exercises.vercel.app/react/hooks/1

import {useTictactoe} from "@/pages/components/tictactoe/useTictactoe";
import {HistoryButtons} from "@/pages/components/tictactoe/historyButtons";
import {TictacRow} from "@/pages/components/tictactoe/tictacRow";
export const Tictactoe = () => {
    const {
        buttonStates: [s1, s2, s3, s4, s5, s6, s7, s8, s9],
        winner,
        activeAction,
        actionsLength,
        setActiveAction,
        pushAction, // [0(X), 1 (0), 4 (X), 5]
        reset
    } = useTictactoe()

    return (
        <div>
            {winner && <div>Winner is {winner}</div>}
            <TictacRow buttonStates={[s1, s2, s3]} pushAction={pushAction}/>
            <TictacRow buttonStates={[s4, s5, s6]} pushAction={pushAction}/>
            <TictacRow buttonStates={[s7, s8, s9]} pushAction={pushAction}/>
            <HistoryButtons
                numberOfButtons={actionsLength}
                activeButton={activeAction}
                onButtonClick={setActiveAction}
            />
            <button onClick={reset}>RESET</button>
        </div>
    )
}