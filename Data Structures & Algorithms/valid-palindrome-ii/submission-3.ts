class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let start = 0;
        let end = s.length - 1;
        while (start < end) {
            if (s[start] !== s[end]) {
                return (this.isPalindrome(s, start + 1, end) || this.isPalindrome(s, start, end - 1)
                )
            }
            start++;
            end--
        }

        return true
    }

    isPalindrome(s: string, start: number, end: number) {
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true
    }
}
