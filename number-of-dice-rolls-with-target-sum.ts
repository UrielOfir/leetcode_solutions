// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/?envType=daily-question&envId=2023-12-26

function numRollsToTarget(d: number, f: number, target: number): number {
    const MOD = 1e9 + 7;
    const dp = Array(d + 1).fill(0).map(() => Array(target + 1).fill(0));
    dp[0][0] = 1; // number of ways to roll 0 dice to get sum 0 is 1

    for (let i = 1; i <= d; i++) {
        for (let j = 1; j <= target; j++) {
            for (let k = 1; k <= f; k++) {
                if (j >= k) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD;
                }
            }
        }
    }

    return dp[d][target];
}