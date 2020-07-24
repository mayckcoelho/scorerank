import api from "../services/api";
import IProtection from "../interfaces/IProtection";

// Action Types
export const Types = {
    LOAD: 'protections/LOAD',
    ACCEPT: 'protections/ACCEPT'
};

// Reducer
interface Action {
    type: string;
    payload: any;
}

export const initialState = {
    protections: [],
};

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, protections: [...action.payload] };
        case Types.ACCEPT:
            const newProtections = state.protections.filter((d: IProtection) => d.id !== action.payload)
            return { ...state, protections: [...newProtections] };
        default:
            return state;
    }
}

// Action Creators
export function load(userId: string | undefined, score: number) {
    return async (dispatch: any) => {
        if (userId && score >= 50) {
            const response = await api.get(`/users/${userId}/protections`)

            if (response)
                dispatch({
                    type: Types.LOAD,
                    payload: response.data
                })
        } else {

            dispatch({
                type: Types.LOAD,
                payload: []
            })
        }
    }
}

export function accept(protectionId: string | undefined) {
    return async (dispatch: any) => {

        const response = await api.delete(`/protections/${protectionId}`)

        if (response) {
            dispatch({
                type: Types.ACCEPT,
                payload: protectionId
            })
        }
    }
}