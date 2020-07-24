import React from 'react';
import reducer, { initialState, Types } from "../../src/ducks/protections"

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

describe('Protections reducer should return mock', () => {
    it('match mock', () => {
        expect(reducer(initialState, { type: Types.LOAD, payload: before })).toEqual({
            ...initialState,
            protections: before
        })
    });

    it('match mock accept', () => {
        expect(reducer({ ...initialState, protections: [...before] }, { type: Types.ACCEPT, payload: 1 })).toEqual({
            ...initialState,
            protections: after
        })
    });
})