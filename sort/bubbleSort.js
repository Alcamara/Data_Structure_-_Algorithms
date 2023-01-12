

const  bubbleSort = (arr) => {

    for (let unSortArr = array.length; unSortArr > 0; unSortArr--) {
        
        for (let index = 1; index < array.length; index++) {
            
            if(arr[index] > arr[index - 1]){

                swapElements(arr, index, index -1);

            }
            
        }
        
    }
    
}

function swapElements(arr,index1, index2){
    let temp;

    temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}


module.exports = bubbleSort;

