import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../Home/Home'
import Contact from '../Contact/Contact'

import Works from '../Works/Works'
import './Content.scss'
import ResumePDF from '../../components/ResumePDF/ResumePDF';

const Content: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window['scrollTo']({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [location.pathname]);
    return (
        <div className='content'>
            <Switch>
                <Route exact={true} path='/' component={Home}></Route>
                <Route path='/resume' component={ResumePDF}></Route>
                <Route path='/works' component={Works}></Route>
                <Route path='/contact' component={Contact}></Route>
            </Switch>

        </div>
    )
}
export default Content