import React, { Component } from 'react';
import './Node.css'
class Node extends Component {
    render() {
        const {
            isStart,
            isFinish,
            col,
            row,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            isWall
            
        } = this.props;
        const extraClassName = isStart
            ? 'node-start'
            : isFinish
            ? 'node-finish'
            : isWall
            ? 'node-wall'
                    : '';
        return (
            <div
               
                id={`node-${row}-${col}`}
                onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={()=> onMouseUp()}
                className={`node ${extraClassName}`}>
                
            </div>
        );
    }
}

export const DEFAULT_NODE = {
    row: 0,
    col:0
}

export default Node;