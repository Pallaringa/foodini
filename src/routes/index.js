import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Restaurant from '../components/Restaurant'

export default function Routes() {
    return (
        <Router>
            <Route path="/Restaurant" exact>
                <Home/>
            </Route>
            <Route path="/">
                <Restaurant/>
            </Route>
        </Router>
    )
}
