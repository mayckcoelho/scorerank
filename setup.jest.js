// react-native-simple-toast
jest.mock('react-native-simple-toast', () => ({
    SHORT: jest.fn(),
}));

// async-storage
import mockAsyncStorage from 'mock-async-storage'
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock("react-redux", () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn()
}));

// jest.mock("@unform/core", () => {
//     useField: (name) => ({
//         fieldName: name,
//         registerField: (field) => jest.fn(field),
//         defaultValue: jest.fn(),
//         clearError: () => jest.fn(),
//         error: ""
//     })
// })