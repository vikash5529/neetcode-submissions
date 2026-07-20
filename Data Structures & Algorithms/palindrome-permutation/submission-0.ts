class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    canPermutePalindrome(s: string): boolean {

        if (s.length === 1) return true;

        const isEven = s.length % 2 === 0;
        const count: Record<string, number> = {};
        let sum = 0;
        for (let char of s) {
            count[char] = 1 + (count[char] ?? 0)
        }

        for (const [key, value] of Object.entries(count)) {
            sum += value % 2;
        }
        return isEven ? sum === 0 : sum === 1;
    }

}
