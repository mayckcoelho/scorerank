import React from 'react';
import reducer, { initialState, Types } from "../../src/ducks/proposals"

const before = [{
    id: 1,
    mock: "foo"
},
{
    id: 2,
    mock: "foo1"
}]

const after = [{
    id: 2,
    mock: "foo1"
}]

describe('Proposals reducer should return mock', () => {
    it('match mock load', () => {
        expect(reducer(initialState, { type: Types.LOAD, payload: before })).toEqual({
            ...initialState,
            proposals: before
        })
    });

    it('match mock accept', () => {
        expect(reducer({ ...initialState, proposals: [...before] }, { type: Types.ACCEPT, payload: 1 })).toEqual({
            ...initialState,
            proposals: after
        })
    });
})