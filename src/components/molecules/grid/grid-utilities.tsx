import React from 'react';
import { Node } from '../../atoms/node/node';
import { NodeProps } from './grid-interfaces';
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
        isVisited: false,
        isWall: false,
        previousNode: null
    };
}

export function getNodesProps(rows:number, columns:number):NodeProps[][] {
    const grid = [];

    for (let row = 0; row < rows; ++row) {
        const currentRow = [];

        for (var col = 0; col < columns; ++col) {
            currentRow.push(getNodeProps(col, row));
        }

        grid.push(currentRow);
    }

    return grid;
}

export function renderNode(item:NodeProps, key:number):any {
    return (
        <Node
            col={item.col}
            isFinish={item.isFinish}
            isStart={item.isStart}
            isWall={item.isWall}
            key={key}
            onMouseDown={(e) => onMouseEvent(e)}
            onMouseEnter={(e) => onMouseEvent(e)}
            onMouseUp={onMouseEvent}
            row={item.row}
        />
    );
}

function onMouseEvent(evt:any):void {
    debugger
}