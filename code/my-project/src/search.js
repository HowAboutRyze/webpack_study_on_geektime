'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';

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
        return <div className="lzw" onClick={this.sayCool}>{this.state.text}</div>
    }

    // render() {
    //     return <div>我是demo</div>
    // }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)