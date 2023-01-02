const animalSearch = require('./LinearSearch');
const animals = ["Cat","Dog", "Bird", "Lion", "Lizard"];

test("Search Should return true with search for a \"Dog\" ", () =>{

    expect(animalSearch(animals,"Dog")).toBe(true);

});