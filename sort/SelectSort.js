

const selectSort = (arr) =>{
    for (let unSortArr = arr.length -1; unSortArr >= arr.length; unSortArr--) {
        
        for (let index = 0; index < unSortArr; index++) {
            const element = array[index];
            
        }
        
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