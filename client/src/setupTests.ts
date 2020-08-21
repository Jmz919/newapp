// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {ApplicationState} from "./store";
// import {RouterState} from "connected-react-router";
// import {MemberInitState} from "./store/member";

Enzyme.configure({adapter: new Adapter()})

// const initRouter: RouterState = {
//     location: {
//         pathname: 'Pathname',
//         search: 'Search',
//         state: 'S',
//         hash: 'Hash'
//     },
//     action: 'PUSH'
// };
//
// export const initStore: ApplicationState = {
//     members: MemberInitState,
//     router: initRouter,
// };