class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // to avoid out of bound
      const frequencyBucket = Array.from({length: nums.length + 1},()=>[]);
      const count = {}
      for(const n of nums){
         count[n] = 1 + (count[n] || 0)
      }
     
     for( const n in count) {
        frequencyBucket[count[n]].push(parseInt(n));
     }
     const res= [];
     for( let i = frequencyBucket.length -1 ; i>0;i--){
        for(const n of frequencyBucket[i]){
            res.push(n);
            if(res.length ===k) {
                return res;
            }
        }
     }
    }
}

