import React, { Component } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Router1Component from './components/Router1Component/Router1Component';

export class RouterComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         router : 1,

      }
    }

  render() {
    return (
      <div className=''>
        <Router className='flex'>
            <ul className='flex justify-around'>
                {/* <li><h1>{this.props.titles}</h1></li> */}
                <li>
                    <Link to={{
                        pathname : `router${this.props.id}`
                    }}>{this.props.titles}</Link>
                </li>
            </ul>

            <Routes>
                <Route exact path={`router${this.props.id}`} render={<Router1Component/>}></Route>
            </Routes>
        </Router>
      </div>
    )
  }
}

export default RouterComponent