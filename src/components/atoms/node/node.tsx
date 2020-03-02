import React, { useCallback } from 'react';

import { NodeProps } from './node-interfaces';

export const Node: React.FC<NodeProps> = (props => {
    const {
        col,
        isFinish,
        isStart,
        isWall,
        onMouseDown,
        onMouseEnter,
        onMouseUp,
        row
    } = props;
    const actionDown = useCallback(():any => { onMouseDown() }, [col, row]);
    const actionEnter = useCallback(():any => { onMouseEnter() }, [col, row]);
    const actionUp = useCallback(():any => { onMouseUp() }, []);
    const className = ():string => {
        return 'node ' + isFinish ? 'node-end' :
            isStart ? 'node-start' :
            isWall ? 'node-wall': '';
    };


    return (
        <button
            id={`node-${row}-${col}`}
            className={className()}
            onMouseDown={actionDown()}
            onMouseEnter={actionEnter()}
            onMouseUp={actionUp()}
        ></button>
    );
});
