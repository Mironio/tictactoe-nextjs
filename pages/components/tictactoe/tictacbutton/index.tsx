import {FC} from "react";
import styles from "./tictacButton.module.scss"
interface TictacButtonProps {
    showX: boolean;
    show0: boolean;
    onClick: (a: number) => void;

    id: number;
}

export const TictacButton: FC<TictacButtonProps> = ({showX, show0, id, onClick}) => {

    let text = '.'
    if (showX) {
        text = 'X'
    }
    if (show0) {
        text = '0'
    }
    return <button className={styles.tictacbutton} onClick={_ => onClick(id)}>{text}</button>
}