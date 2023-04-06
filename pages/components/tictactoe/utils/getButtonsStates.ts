import {ActiveAction, ButtonState} from "@/pages/components/tictactoe/common/models";

export const getButtonsStates = (actions: Array<number>, activeAction: ActiveAction): Array<ButtonState> => {

    const activeActions = activeAction === 'last' ? actions : actions.slice(0, activeAction + 1)

    return activeActions.reduce((acc: Array<ButtonState>, index: number, actionIndex: number) => {
        const sign = actionIndex % 2 === 0 ? 'showX' : 'show0'
        acc[index][sign] = true
        return acc
    }, Array.from({length: 9}, (_, i) => ({id: i, show0: false, showX: false})));
}