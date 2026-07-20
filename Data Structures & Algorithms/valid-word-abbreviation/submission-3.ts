class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word: string, abbr: string): boolean {
        let i: number = 0;
        let j: number = 0;

        while (i < word.length && j < abbr.length) {
            if (word[i] === abbr[j]) {
                i++;
                j++;
                continue;
            }
            if (abbr[j] < "0" || abbr[j] > "9") {
                return false;
            }

            // Leading zero is invalid
            if (abbr[j] === "0") {
                return false;
            }
            let skip = 0;
            while (j < abbr.length && abbr[j] >= '0' && abbr[j] <= "9") {
                skip = skip * 10 + Number(abbr[j++])
            }
            i += Number(skip);
        }
        return i == word.length && j == abbr.length;

    }
}

