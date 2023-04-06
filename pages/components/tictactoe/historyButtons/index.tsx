import {FC} from "react";
import {ActiveAction} from "@/pages/components/tictactoe/common/models";

interface HistoryButtonsProps {
    numberOfButtons: number;
    activeButton: ActiveAction;
    onButtonClick: (a: ActiveAction) => void

}

const isButtonDisabled = (currentButton: number, activeButton: ActiveAction, allButtonsNumber: number): boolean => {
    if (activeButton === 'last' && allButtonsNumber === currentButton) {
        return true
    }

    if (activeButton !== 'last' && currentButton === activeButton) {
        return true
    }
    return false

}

export const HistoryButtons: FC<HistoryButtonsProps> = (
    {
        numberOfButtons,
        activeButton,
        onButtonClick
    }
) => {
    return <div>
        {[...Array(numberOfButtons)]
            .map((e, i, array) =>
                <button key={i}
                        disabled={isButtonDisabled(i, activeButton, array.length - 1)}

                        onClick={_ => onButtonClick(i === array.length - 1 ? 'last' : i)}
                >{i + 1}
                </button>)}
    </div>


}