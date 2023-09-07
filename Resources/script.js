class Animal {
    constructor(species, sound){
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.species} ${this.sound}s`);
        //The dog barks
    }
}

class Dog extends Animal {
    constructor(species, sound, color){
        super(species, sound);
        this.color = color;
    }
makeSound() {
    super.makeSound();
    console.log(`The ${this.color} dog ${this.sound}s`);
}
}
const dog = new Dog("Dog", "bark", "black");
dog.makeSound();
//The black dog barks