import React from 'react';
import { Helmet } from 'react-helmet';
import Routes from './Routes';


const App = () =>(
    <div style={{ height: '100%'}}>
        <Helmet>
            <title> Aimable Niyogakiza</title>
        </Helmet>
        <Routes/>
    </div>
);
export default App;

