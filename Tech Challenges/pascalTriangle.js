/* 
 https://en.wikipedia.org/wiki/Pascal%27s_triangle
 
 0 => 1
 1 => 1  1
 2 => 1  2  1
 3 => 1  3  3  1
 4 => 1  4  6  4  1
 5 => 1  5 10 10  5  1 
*/

function pascalTriangle(num){
    let result = [];
    let previous = [1,1];
    let index = 2;

    if(num === 0){
        return [1]
    } else if (num === 1){
        return [1,1]
    }

    while(index <= num){
        result = [];
        result.push(1);
        for(let i = 1; i < index; i++){
            result[i] = previous[i] + previous[i-1]
        }
        result.push(1);
        previous = result;
        index++;
    }
    return result;
}

