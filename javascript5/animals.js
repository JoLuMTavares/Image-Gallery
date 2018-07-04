// The original class
class Animal {
    constructor(name, eat = false, sleep = false, die = false) {
        this.name = name;
        this.eat = eat;
        this.sleep = sleep;
        this.die = die;
    }

    eat() {
        this.eat = true;
        this.sleep = false;
        this.die = false;
    }

    sleep() {
        this.eat = false;
        this.sleep = true;
        this.die = false;
    }

    die() {
        this.eat = false;
        this.sleep = false;
        this.die = true;
        console.log(this.name + ' is now dead.');
    }

    /*
    getAnimal(name) {
        return Animal;
    }
    */
}

// Mammals extending Animal
class Mammals extends Animal {
    constructor(name, eat, sleep, die, breathe = true) {
        super(name, eat, sleep, die);
        this.breathe = breathe;
    }

    stopBreathe() {
        this.breathe = false;
        super.die();
    }

}

class Tiger extends Mammals {
    constructor(name, eat, sleep, die, breathe, kill = false) {
        super(name, eat, sleep, die, breathe);

        this.kill = kill;
    }

    stopBreathe() {
        super.stopBreathe();
    }

    kill(otherAnimal) {
        this.kill = true;
        otherAnimal.die(); 
    }
}

class Horse extends Mammals {
    constructor(name, eat, sleep, die, breathe) {
        super(name, eat, sleep, die, breathe);
    }

    stopBreathe() {
        super.stopBreathe();
    }

}

// Birds extending Animal
class Birds extends Animal {
    constructor(name, eat, sleep, die, breathe = true, fly = false) {
        super(name, eat, sleep, die);
        
        this.breathe = breathe;
        this.fly = fly;
    }

    stopBreathe() {
        this.breathe = false;
    }

    fly() {
        this.fly = true;
    }

    sleep() {
        this.fly = false;
        super.sleep();
    }
}

// Fish extending Animal
class Fish extends Animal {
    constructor(name, eat, sleep, die, swim = true) {
        super(name, eat, sleep, die);
        
        this.swim = swim;
    }

    swim() {
        this.swim = true;
    }

    sleep() {
        this.swim = false;
        super().sleep();
    }

}

class Tuna extends Fish {
    constructor(name, eat, sleep, die, swim) {
        super(name, eat, sleep, die, swim);
    }
}


class Shark extends Fish {
    constructor(name, eat, sleep, die, swim = true, kill = false) {
        super(name, eat, sleep, die, swim);

        this.kill = kill;
    }

    kill(theAnimal) {
        this.kill = true;
        theAnimal.die();         
    }
}

var horse1 = new Horse('Fury', false, false, false);

var tiger1 = new Tiger('Vitaly', false, false, false, true);

var shark1 = new Shark("Nemo", false, false, false, true);


