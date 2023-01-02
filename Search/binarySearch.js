function binarySearch( min, max, value){

    let i = 1;
    let currMax = max;
    let currMin = min;
    
   do {

    let med = Math.floor(currMin + (currMax - currMin)/2);

        console.log(`attempt ${i} \n max = ${currMax}  \n med = ${med} \n min = ${currMin}`);

        if ( value === med ) {
            
            return true;

        } else if(value < med){

            currMax = med;

        } else if( value > med){

            currMin = med + 1;

        }

        i++;
    
   } while (currMin < currMax);

   return "number not found"

}

module.exports = binarySearch;