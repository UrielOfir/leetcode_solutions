// https://leetcode.com/problems/eliminate-maximum-number-of-monsters


function eliminateMaximum(dist: number[], speed: number[]): number {
    
    let maxEliminated = 0;
    const timeToReach = dist.map((d, i) => d / speed[i]).sort((a, b) => a - b);
    let minutesPassed = 0;
    
    for (let i = 0; i < timeToReach.length; i++) {
        if (minutesPassed >= timeToReach[i] ) {
            break;
        }
        maxEliminated++;
        minutesPassed++;
    }

    return maxEliminated
};