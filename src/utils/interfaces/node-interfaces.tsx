export interface NodeProps {
    col: number;
    isFinish: boolean;
    isStart: boolean;
    isWall: boolean;
    isShortestPath: boolean;
    isVisited: boolean;
    onClick: (e:any, col:number, row:number) => void;
    mouseEnter: (e:any, col:number, row:number) => void;
    mouseUp: (e:any) => void;
    row: number;
}