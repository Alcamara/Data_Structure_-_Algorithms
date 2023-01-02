const animalSearch = require('./LinearSearch');
const animals = ["Cat","Dog", "Bird", "Lion", "Lizard"];

test("Search Should return true with search for a \"Dog\" ", () =>{

    expect(animalSearch(animals,"Dog")).toBe(true);

});

test("Search Should return true with search for a \"Cat\" ", () =>{

    expect(animalSearch(animals,"Cat")).toBe(true);

});

test("Search Should return false with search for a \"Tiger\" ", () =>{

    expect(animalSearch(animals,"Tiger")).toBe(false);

});
