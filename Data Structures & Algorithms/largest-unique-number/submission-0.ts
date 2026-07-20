class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums: number[]): number {
      const map = new Map();
      const uniqueNumbers =[];
      for(let i=0;i<nums.length;i++){
       map.set(nums[i],1+(map.get(nums[i]) || 0))
      }
      for(const [key,value] of map){
        if(value ===1){
           uniqueNumbers.push(key)
        }
      } 
      return uniqueNumbers.length? Math.max(...uniqueNumbers) : -1;
    }
}

 

