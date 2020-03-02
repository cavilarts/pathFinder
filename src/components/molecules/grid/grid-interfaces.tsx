export interface GridProps {
    rows: number;
    columns: number;
}

export interface NodeProps {
    col: number;
    isStart: boolean;
    isFinish: boolean;
    distance: number;
    isVisited: boolean;
    isWall: boolean;
    row: number;
    previousNode: any;
}