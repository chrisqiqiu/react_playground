import React from 'react'
import { render } from 'react-dom'
import { SkiDayList} from './components/SkiDayList'
import { SkiDayCount} from './components/SkiDayCount'
import {App} from './components/App'
import {Whoops404} from './components/Whoops404'
import { Router, Route,hashHistory } from 'react-router'

window.React = React

// render(
//     <SkiDayCount backcountry={false}/>,
//     document.getElementById('react-container')
// )


render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/> 
        <Route path="list-days" component={App}>
            <Route path=":filter" component={App} />
        </Route> 
        <Route path="add-day" component={App}/>                 
        <Route path="*" component={Whoops404}/>
    </Router>,
    document.getElementById('react-container')
)