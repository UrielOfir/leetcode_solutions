
// https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/description/?envType=daily-question&envId=2023-11-08

function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    if(sx==fx && sy==fy && t==1)
        return false;
    return t >= Math.max(Math.abs(sx-fx),Math.abs(sy-fy));
};