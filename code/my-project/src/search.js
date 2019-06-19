'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import girl from './images/girl.png';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '我是lzw'
        }

        this.sayCool = this.sayCool.bind(this);
    }

    sayCool() {
        this.setState({
            text: '我很帅'
        })
    }

    render() {
        return <div className="lzw" onClick={ this.sayCool }>
            {this.state.text}<img src={ girl }/>
        </div>
    }

    // render() {
    //     return <div>我是demo</div>
    // }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)