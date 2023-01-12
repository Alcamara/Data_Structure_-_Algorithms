

const selectSort = (arr) =>{
    for (let unSortArr = arr.length -1; unSortArr > 0; unSortArr--) {

        let largestNum = 0;
        
        for (let index = 0; index <= unSortArr; index++) {
           
            if (arr[index] > arr[largestNum]) {
                
                largestNum = index;

            }
            
        }

        swapElements(arr,unSortArr, largestNum);
        
    }


    return arr
}

function swapElements(arr,index1, index2){
    let temp;

    temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}


module.exports = selectSort;