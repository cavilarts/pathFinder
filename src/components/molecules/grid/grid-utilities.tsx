import React from 'react';
import { Node } from '../../atoms/node/node';
import { NodeProps } from '../../../utils/interfaces/grid-interfaces';
import {
    START_NODE_ROW,
    START_NODE_COL,
    FINISH_NODE_ROW,
    FINISH_NODE_COL
} from '../../constants/grid';

function getNodeProps(row:number, col:number):NodeProps {
    return {
        col,
        row,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        distance: Infinity,
        isShortestPath: false,
        isVisited: false,
        isWall: false,
        previousNode: null
    };
}

export function getNodesProps(rows:number, columns:number):NodeProps[][] {
    return [...Array(rows)]
        .map((x, i) => Array(columns).fill({}).map((y, j) => getNodeProps(i, j)))
}

export function renderNode(item:NodeProps, key:number, events:any):React.ReactNode {
    return (
        <Node
            onClick={(e, col, row) => events.clickHandler(e, col, row)}
            mouseEnter={(e, col, row) => events.handleMouseEnter(e, col, row)}
            mouseUp={e => {events.mouseUp()}}
            col={item.col}
            isFinish={item.isFinish}
            isStart={item.isStart}
            isWall={item.isWall}
            isVisited={item.isVisited}
            isShortestPath={item.isShortestPath}
            key={key}
            row={item.row}
        />
    );
}