/*
 * Helper functions, common across many components
 */

export function titleCase(str) {
  str = str.trim()
  return str.toLowerCase().split(' ').map(function(word) {
    if(word[0] == undefined) {
      console.log(word, str);
    }
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

export function formatDate(millisec_date) {
  return new Date(parseInt(millisec_date)).toLocaleDateString();
}

export function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

export function formatPercent(num, sigFig) {
  if (num == 0) {
    return "0%"
  }
  return parseFloat(num * 100).toFixed(sigFig)+"%"
}

export function absoluteValue(num) {
  return Math.abs(num)
}

export function convertDate(millsecondDate) {
  return new Date(millsecondDate).toString().substring(0, 15)
}

/*
 * Transposition:
 *
 * [[1, 2, 3, 4],
 *  [5, 6, 7, 8]]
 *
 * [[1, 5],
 *  [2, 6],
 *  [3, 7],
 *  [4, 8]]
 *
 */

export function transposeMatrix(matrix) {
  return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
