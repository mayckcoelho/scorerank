import React from 'react';
import DebtList from '../../src/pages/DebtList';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import configureStore from "redux-mock-store"
import { Provider } from "react-redux"
let store: any
import { initialState as InitialStateDebt } from "../../src/ducks/debts"

const mockStore = configureStore([])

beforeAll(() => {
    store = mockStore({
        debt: {
            ...InitialStateDebt
        }

    })
    store.dispatch = jest.fn();
})

describe('DebtList should render correctly', () => {
    it('match snapshot', () => {
        const debtlist = renderer
            .create(
                <SafeAreaProvider>
                    <Provider store={store}>
                        <DebtList />
                    </Provider>
                </SafeAreaProvider>)
            .toJSON();
        expect(debtlist).toMatchSnapshot();
    });
})