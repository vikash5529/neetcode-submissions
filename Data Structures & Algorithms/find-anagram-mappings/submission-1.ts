class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1: number[], nums2: number[]): number[] {
        const map = new Map();
        const res = [];
        for (let i = 0; i < nums2.length; i++) {
            map.set(nums2[i], i);
        }
        for (let i = 0; i < nums1.length; i++) {
            res.push(map.get(nums1[i]))
        }
        return res;
    }
}

