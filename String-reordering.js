/*
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the 
order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. 
The dictionaries' keys & values will always be strings and will always not be empty.

Example:
  Input:
  List = [
          {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
          {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
        ]

  Output:
  'Vatsan took his dog for a spin'
*/


// Solution

function sentence(List) {
  let arr = [];
  let res = '';
  let min = 0;
   for (let key of List) {
     arr.push(+Object.keys(key))
   }
  for (let j of arr) {
    min = Math.min(...arr);
    res += Object.values(List[arr.indexOf(min)]) + ' ';
    arr.splice(arr.indexOf(min), 1, 999);  
  }
  return res.trim();
}