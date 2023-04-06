import {ActiveAction, Winner} from "@/pages/components/tictactoe/common/models";

const WIN_SETS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
]

const areSignsWon = (signs: Array<number>) =>
    WIN_SETS.some(set => set.every(n => signs.includes(n)))

const NO_WINNER = ''

export const getWinner = (actions: Array<number>, activeAction: ActiveAction): Winner => {

    if (activeAction !== 'last' || actions.length <= 4) {
        return NO_WINNER
    }

    const {XSigns, OSigns} = actions.reduce((
        acc: { XSigns: Array<number>, OSigns: Array<number> },
        index,
        actionIndex) => {
        actionIndex % 2 === 0 ? acc.XSigns.push(index) : acc.OSigns.push(index)
        return acc
    }, {XSigns: [], OSigns: []})

    if (XSigns.length >= 3 && areSignsWon(XSigns)) {
        return 'X'
    }
    if (OSigns.length >= 3 && areSignsWon(OSigns)) {
        return 'O'
    }
    return NO_WINNER
}
