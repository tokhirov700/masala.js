
let matn = ["Slyvia", "Kristal", "Sharilyn", "Calista"];

let yangiMatn = matn.map(satr => {
    if (satr.trim() !== "") {
        return satr.charAt(0).toUpperCase() + satr.slice(1);
    } else {
        return satr;
    }
});

console.log(yangiMatn);
