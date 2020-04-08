import React, { Fragment, useState } from 'react';

import { dijkstra, getNodesInShortestPath } from '../../../utils/algorithms/dijkstra';
import { GridProps, NodeProps } from '../../../utils/interfaces/grid-interfaces';
import { getNodesProps, renderNode } from './grid-utilities';
import {
    START_NODE_ROW,
    START_NODE_COL,
    FINISH_NODE_ROW,
    FINISH_NODE_COL
} from '../../constants/grid';
import './grid.scss';


export const Grid: React.FC<GridProps> = (props => {
    const { rows, columns } = props;
    const nodesProps = getNodesProps(rows, columns);
    const [state, setState] = useState({ nodes: nodesProps, mousePressed: false });
    const clickHandler = (e: any, c: any, r: any) => {
        state.nodes[r][c].isWall = true;
        state.mousePressed = true;
        setState(Object.assign({}, state));
    };
    const handleMouseEnter = (e: any, c: number, r: number) => {
        if (state.mousePressed) {
            state.nodes[r][c].isWall = !state.nodes[r][c].isWall;
            setState(Object.assign({}, state));
        } else {
            return;
        }
    };
    const mouseUp = () => {
        state.mousePressed = false;
        setState(Object.assign({}, state));
    };
    const events = {
        clickHandler: clickHandler,
        handleMouseEnter: handleMouseEnter,
        mouseUp: mouseUp
    };
    const visualize = () => {
        const nodes = state.nodes;
        const startNode = nodes[START_NODE_ROW][START_NODE_COL];
        const finishNode = nodes[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitNodesInOrder = dijkstra(state.nodes, startNode, finishNode);
        const nodesInShortestPath = getNodesInShortestPath(finishNode);
        debugger
        if (visitNodesInOrder) {
            animate(visitNodesInOrder, nodesInShortestPath);
        }
    };
    const animate = (visitedNodesInOrder: NodeProps[] , nodesInShortestPath:NodeProps[]) => {
        for (let i = 0; i <= visitedNodesInOrder.length; i++){
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    animateShortedPath(nodesInShortestPath)
                }, 45 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                const copyAllState = Object.assign({}, state);
                copyAllState.nodes[node.row][node.col].isVisited = true;
                setTimeout(() => {
                    setState(copyAllState);
                }, 0);
            }, 45 * i)
        }
    }
    const animateShortedPath = (nodesInShortestPath: NodeProps[]) => {
        debugger
        for (let i = 0; i < nodesInShortestPath.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPath[i];
                const copyAllState = Object.assign({}, state);
                copyAllState.nodes[node.row][node.col].isShortestPath = true;
                setTimeout(() => {
                    setState(copyAllState);
                }, 0);
            }, 50 * i)
        }
    }

    return (
        <Fragment>
            <button onClick={visualize}>Visualize</button>
            {state.nodes.map((node, key) => {
                return (
                    <div key={key} className="row">
                        {node.map((item, index) => renderNode(item, index, events))}
                    </div>
                );
            })}
        </Fragment>
    );
});