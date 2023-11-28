// https://leetcode.com/problems/knight-dialer/?envType=daily-question&envId=2023-11-27

function knightDialer(n: number): number {
    const MOD = 1e9 + 7;
    const moves = [
        [4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [],
        [0, 1, 7], [2, 6], [1, 3], [2, 4]
    ];

    let dp = new Array(10).fill(1);
    for (let i = 2; i <= n; i++) {
        const dp2 = new Array(10).fill(0);
        for (let j = 0; j < 10; j++) {
            for (let move of moves[j]) {
                dp2[j] = (dp2[j] + dp[move]) % MOD;
            }
        }
        dp = dp2;
    }

    return dp.reduce((a, b) => (a + b) % MOD);
}