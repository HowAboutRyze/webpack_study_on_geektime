'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '我是react demo'
        }
    }

    render() {
        return <div onClick={e => (this.state.text = '我很帅')}>{this.state.text}</div>
    }

    // render() {
    //     return <div>我是demo</div>
    // }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)