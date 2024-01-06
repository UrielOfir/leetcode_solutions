// https://leetcode.com/problems/maximum-profit-in-job-scheduling/?envType=daily-question&envId=2024-01-06

function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const jobs = startTime.map((start, index) => ({ start, end: endTime[index], profit: profit[index] }));
    jobs.sort((a, b) => a.end - b.end);

    const dp = Array(jobs.length).fill(0);
    dp[0] = jobs[0].profit;

    for (let i = 1; i < jobs.length; i++) {
        let nonConflict = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (jobs[j].end <= jobs[i].start) {
                nonConflict = j;
                break;
            }
        }

        const profitIfInclude = jobs[i].profit + (nonConflict !== -1 ? dp[nonConflict] : 0);
        const profitIfExclude = dp[i - 1];

        dp[i] = Math.max(profitIfInclude, profitIfExclude);
    }

    return dp[jobs.length - 1];
}