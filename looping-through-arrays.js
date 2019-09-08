const pets = ['cat', 'dog','rat']

//why pets.lenght?
for (let i = 0; i<pets.length; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets)