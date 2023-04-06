import {Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState} from "react";
import {ActiveAction, ButtonState, Winner} from "@/pages/components/tictactoe/common/models";
import {getWinner} from "@/pages/components/tictactoe/utils/getWinner";
import {getButtonsStates} from "@/pages/components/tictactoe/utils/getButtonsStates";


const getActionsFromStorage = () => JSON.parse(localStorage.getItem('actions')!);

const saveActionsToStorage = actions => {
    const localActions = getActionsFromStorage()
    if (localActions.length !== actions.length) {
        localStorage.setItem('actions', JSON.stringify(actions));

    }
};
const resetActionsInStorage = () => saveActionsToStorage([])

export function useTictactoe():
    {
        buttonStates: Array<ButtonState>,
        winner: Winner,
        activeAction: ActiveAction,
        actionsLength: number,
        setActiveAction: Dispatch<SetStateAction<ActiveAction>>,
        pushAction: (a: number) => void,
        reset: () => void
    } {

    const [activeAction, setActiveAction] = useState<ActiveAction>('last')
    const [actions, setActions] = useState<Array<number>>([])
    const actionsLength = actions.length

    useEffect(() => {
        setActions(getActionsFromStorage() || [])
    }, [])

    useEffect(() => {
        if (actionsLength > 0) {
            saveActionsToStorage(actions)
        }
    }, [actions]);

    const buttonStates = useMemo(
        () => getButtonsStates(actions, activeAction),
        [actions, activeAction]
    )
    const winner = useMemo(
        () => getWinner(actions, activeAction),
        [actions, activeAction])

    const pushAction = useCallback((newAction: number) => {

        setActiveAction('last')
        const newActions = activeAction === 'last' ? actions : actions.slice(0, activeAction + 1)

        if (!newActions.some(a => a === newAction) && !winner) {
            setActions([...newActions, newAction]);
        }

    }, [actions, setActions, activeAction, setActiveAction, winner])

    const reset = useCallback(() => {
        setActions([]);
        resetActionsInStorage()
    }, [setActions])

    return {buttonStates, winner, activeAction, actionsLength, setActiveAction, pushAction, reset}
}


