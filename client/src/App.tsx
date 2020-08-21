import React from 'react';
import './App.css';
import {ApplicationState} from "./store";
import {Store} from "redux";
import {Provider} from "react-redux";
import {History} from "history";
import MemberContainer from "./components/MemberContainer";
import {ConnectedRouter} from "connected-react-router";
import {Route, Router, Switch} from "react-router";

interface MainProps {
    store: Store<ApplicationState>;
    history: History;
}

const App: React.FC<MainProps> = ({store, history}) => {
    return (
        <Provider store={store}>
            {/*<ConnectedRouter history={history}>*/}
            {/*    <Router>*/}
            {/*        <div className={"App"}>*/}
            {/*            <Switch>*/}
            {/*                <Route exact path={'/'}*/}
            {/*                       render={(props) =>*/}
            {/*                           <MemberContainer />}*/}
            {/*                />*/}
            {/*                <Route exact path={'/search'} component={SearchDashboard}/>*/}
            {/*            </Switch>*/}
            {/*        </div>*/}
            {/*    </Router>*/}
            {/*</ConnectedRouter>*/}

            <div>
                <MemberContainer/>
            </div>
        </Provider>
)
    ;
}

export default App;
