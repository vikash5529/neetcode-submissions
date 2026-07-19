class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
       let sum =0;
       let first=0;
       let second=1;
       while(second <=s.length-1){
         sum += Math.abs(s[first++].charCodeAt(0) - s[second++].charCodeAt(0));
       } 
       return sum;
    }
}
