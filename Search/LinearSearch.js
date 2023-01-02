
function findAnimal( animalArr, value){

    for(let i = 0; i < animalArr.length; i++){

        if(animalArr[i] === value) return true

    }

    return false;

}

module.exports = findAnimal;