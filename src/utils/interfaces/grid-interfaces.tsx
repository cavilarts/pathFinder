export interface GridProps {
    rows: number;
    columns: number;
}

export interface NodeProps {
    col: number;
    isStart: boolean;
    isFinish: boolean;
    distance: number;
    isShortestPath: boolean;
    isVisited: boolean;
    isWall: boolean;
    row: number;
    previousNode: any;
}