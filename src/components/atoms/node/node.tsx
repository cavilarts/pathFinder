import React, { useCallback } from 'react';

import { NodeProps } from '../../../utils/interfaces/node-interfaces';
import './node.scss';

export const Node: React.FC<NodeProps> = (props => {
    const {
        col,
        isFinish,
        isStart,
        isWall,
        isShortestPath,
        isVisited,
        onClick,
        mouseEnter,
        mouseUp,
        row
    } = props;
    const memoMouseDown = useCallback(e => {
        onClick(e, col, row);
    }, [row, col, onClick]);
    const memoMouseEnter = useCallback(e => {
        mouseEnter(e, col, row);
    }, [row, col, mouseEnter]);
    const memoMouseUp = useCallback(e => {
        mouseUp(e);
    }, [mouseUp])
    

    const className = ():string => {
        const calc = isFinish ? 'node-end' :
            isStart ? 'node-start' :
            isWall ? 'node-wall':
            isVisited && !isShortestPath ? 'node-visited':
            isVisited && isShortestPath ? 'node-shortest-path' : '';

        return 'node ' + calc;
    };

    return (
        <div
            onMouseDown={memoMouseDown}
            onMouseEnter={memoMouseEnter}
            onMouseUp={memoMouseUp}
            id={`node-${row}-${col}`}
            className={className()}
        ></div>
    );
});
