import React from 'react';
import Dashboard from '../../src/pages/Dashboard';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import configureStore from "redux-mock-store"
import { Provider } from "react-redux"
let store: any
import { initialState as InitialStateDebt } from "../../src/ducks/debts"
import { initialState as InitialStateProposal } from "../../src/ducks/proposals"
import { initialState as InitialStateProtection } from "../../src/ducks/protections"

const mockStore = configureStore([])

beforeAll(() => {
    store = mockStore({
        debt: {
            ...InitialStateDebt
        },
        proposal: {
            ...InitialStateProposal
        },
        protection: {
            ...InitialStateProtection
        }

    })
    store.dispatch = jest.fn();
})


describe('Dashboard should render correctly', () => {
    it('match snapshot', () => {
        const dashboard = renderer
            .create(
                <SafeAreaProvider>
                    <Provider store={store}>
                        <Dashboard />
                    </Provider>
                </SafeAreaProvider>)
            .toJSON();
        expect(dashboard).toMatchSnapshot();
    });
})