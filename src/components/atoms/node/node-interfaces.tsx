export interface NodeProps {
    col: number;
    isFinish: boolean;
    isStart: boolean;
    isWall: boolean;
    onMouseDown: () => void;
    onMouseEnter: () => void;
    onMouseUp: () => void;
    row: number;
}