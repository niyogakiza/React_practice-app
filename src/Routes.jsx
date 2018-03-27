import React from 'react';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './components/views/Home';
import PortfolioPage from './components/views/PortfolioPage';
import NotFound from './components/views/NotFound';
import data from './store/portfolio/data';

ReactGA.initialize('UA-116455486-1');

const Router = () =>(
    <div style={{ height: '100%' }}>
        <BrowserRouter>
            <div style={{ height: '100%' }}>
                <Route path="/" component={RouteChange} />
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/portfolio/restaurant" render={() => <PortfolioPage data={data.restaurant} />}/>
                    <Route exact path="/portfolio/database" render={() => <PortfolioPage data={data.database} />}/>
                    <Route exact path="/portfolio/game" render={() => <PortfolioPage data={data.game} />}/>
                    <Route exact path="/portfolio/reactnative" render={() => <PortfolioPage data={data.reactnative} />}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
);

const RouteChange = () =>{
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo(0,0);
    return null;
};

export default Router;