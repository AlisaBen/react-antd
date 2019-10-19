import React from 'react';
import {Breadcrumb,Alert} from 'antd';
import { Router, Route, Link, hashHistory } from 'react-router';

const Apps = () => (
    <ul className="app-list">
        <li>
            <Link to="/apps/1">Application1</Link>
            <Link to="/apps/1/detail">Detail</Link>
        </li>
        <li>
            <Link to="/apps/2">Application2</Link>
            <Link to="/apps/2/detail">Detail</Link>
        </li>       
    </ul>
);

const Home = ({routes,params,children}) =>(
    <div className="demo">
        <div className="demo-nav">
            <Link to="/">Home</Link>
            <Link to="/apps">Application list</Link>
        </div>
        {children || "Home Page"}
        <Alert style={{margin:'16px 0'}} message="click the navigation above"></Alert>
        <Breadcrumb routes={routes} param={params}></Breadcrumb>
    </div>
);

const App = () => (
    
    <Router distory={hasHistory}>
        <Route name="home" breadcrumbName="Home" path="/" component={Home}>
            <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>
                <Route name="app" breadcrumbName="Application:id" path=":id">
                    <Route name="detail" breadcrumbName="Detail" path="detail"></Route>
                </Route>
            </Route>
        </Route>
    </Router>
    
)

export default App;