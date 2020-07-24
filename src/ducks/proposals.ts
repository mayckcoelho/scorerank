import api from "../services/api";
import IProposal from "../interfaces/IProposal";

// Action Types
export const Types = {
    LOAD: 'proposal/LOAD',
    ACCEPT: 'proposal/ACCEPT'
};

// Reducer
interface Action {
    type: string;
    payload: any;
}

export const initialState = {
    proposals: [],
};

export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case Types.LOAD:
            return { ...state, proposals: [...action.payload] };
        case Types.ACCEPT:
            const newProposals = state.proposals.filter((d: IProposal) => d.id !== action.payload)
            return { ...state, proposals: [...newProposals] };
        default:
            return state;
    }
}

// Action Creators
export function load(userId: string | undefined, score: number) {
    return async (dispatch: any) => {
        if (userId && score >= 31 && score <= 60) {
            const response = await api.get(`/users/${userId}/proposals`)

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

export function accept(proposalId: string | undefined) {
    return async (dispatch: any) => {

        const response = await api.delete(`/proposals/${proposalId}`)

        if (response) {
            dispatch({
                type: Types.ACCEPT,
                payload: proposalId
            })
        }
    }
}