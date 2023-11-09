// https://leetcode.com/problems/count-number-of-homogenous-substrings/?envType=daily-question&envId=2023-11-09

function countHomogenous(s: string): number {
    let count = 0;
    let curr = 0;
    let prev = '';
    const mod = 1e9 + 7;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === prev) {
            curr++;
        } else {
            curr = 1;
        }
        count = (count + curr) % mod;
        prev = s[i];
    }

    return count;
};