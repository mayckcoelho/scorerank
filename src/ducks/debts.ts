import api from "../services/api";
import IDebt from "../interfaces/IDebt";

// Action Types
export const Types = {
    LOAD: 'debt/LOAD',
    DELETE: 'debt/DELETE'
};

// Reducer
interface Action {
    type: string;
    payload: any;
}

export const initialState = {
    debts: [],
};

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, debts: [...state.debts, ...action.payload] };
        case Types.DELETE:
            const newDebts = state.debts.filter((d: IDebt) => d.id !== action.payload)
            return { ...state, debts: [...newDebts] };
        default:
            return state;
    }
}

// Action Creators
export function load(userId: string | undefined, score: number | undefined, count: number) {
    return async (dispatch: any) => {

        if (userId && score && score < 30 && (count === 0 || count > 10)) {
            const response = await api.get(`/users/${userId}/debts?_start=${count}&_limit=10`)

            if (response) {
                dispatch({
                    type: Types.LOAD,
                    payload: response.data
                })
            }
        } else {
            dispatch({
                type: Types.LOAD,
                payload: []
            })
        }
    }
}

export function pay(debtId: string | undefined) {
    return async (dispatch: any) => {

        const response = await api.delete(`/debts/${debtId}`)

        if (response) {
            dispatch({
                type: Types.DELETE,
                payload: debtId
            })
        }
    }
}