import React from 'react';
import reducer, { initialState, Types } from "../../src/ducks/debts"

const data = [{
    mock: "foo"
}]

describe('Debts reducer should return mock', () => {
    it('match mock', () => {
        expect(reducer(initialState, { type: Types.LOAD, payload: data })).toEqual({
            ...initialState,
            debts: data
        })
    });
})