import { combineReducers } from 'redux'

import debtReducer from './ducks/debts'
import proposalReducer from "./ducks/proposals";
import protectionReducer from "./ducks/protections";

const rootReducer = combineReducers({
    debt: debtReducer,
    proposal: proposalReducer,
    protection: protectionReducer,
})

export default rootReducer