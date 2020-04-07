import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/dogs" component={Dogs} /> */}
            {/* <Route exact path="/dogs/:id" component={DogShow} /> */}
            {/* <Route exact path="/auth" component={Auth} /> */}
        </Switch>
    );
}
//from here on, import every page that is created into this mother file. eg: import Dogs from './Dogs';
