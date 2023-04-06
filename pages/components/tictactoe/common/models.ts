export interface ButtonState {
    show0: boolean;
    showX: boolean;
    id: number;
}

export type ActiveAction = number | 'last'
export type Winner = 'X' | 'O' | ''