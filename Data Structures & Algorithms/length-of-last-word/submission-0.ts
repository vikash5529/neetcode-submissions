class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const filtered= s.split(" ").filter(Boolean);
        return filtered[filtered.length-1].length;
    }
}
