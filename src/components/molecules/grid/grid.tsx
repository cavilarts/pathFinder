import React, { Fragment } from 'react';


import { GridProps } from './grid-interfaces';
import { getNodesProps, renderNode } from './grid-utilities'


export const Grid: React.FC<GridProps> = (props => {
    const { rows, columns } = props;
    const initialGrid = getNodesProps(rows, columns);

    return (
        <Fragment>
            <button>Visualize</button>
            {initialGrid.map((node, key) => {
                return (
                    <div key={key}>
                        {node.map((item, index) => {return renderNode(item, index)})}
                    </div>
                );
            })}
        </Fragment>
    );
});