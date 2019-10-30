
class AnimalShelter {
    constructor() {
        this.animals = [];
    }
    enqueue(animal) {
        this.animals.push(animal);
    }

    dequeue(preference) {
        if(this.animals.length === 0) {
            return console.log('the queue is empty')
        }
        for (let i = 0; i < this.animals.length; i++) {
            console.log(this.animals.storage)
        }
    }
}

let queue = new AnimalShelter();

queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('dog');
queue.enqueue('dog');
queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('cat');

queue.dequeue('dog');



