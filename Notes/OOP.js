// Pillars of Object Oriented Programming
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism

// 1. Abstraction:
// -hiding implementation details while just presenting the features to the outside world
// -info on what the object DOES instead of HOW it does it
    // Advantages 
    // -reduce code complexity
    // -hiding details and exposing the essential parts
    // 1) when creating classes -taking only the necessary attributes instead of all
        // -ex: student management app - in abstraction student class includes roll number, student id, grades instead of all attributes - roll number, student id, grades, height, weight, hair color, etc
        // -out of all possible attributes and behaviors, you take only the necessary ones for the specified app
    // 2) when using functions
        // -using console log without know code of the function console log
        // using map without knowing exactly what the code of map function is like
        // using lodash function to solve a particular problem but knowing the blueprint of how that function is written



// 2. Encapsulation:
    // -restricts access to some of an object's components
        // -private data members
        // -data members only accessed through getter and setter methods
        // Advantages
            // -private data members
            // -data members only assessed through getter and setter methods
    // -protecting data - put access specifiers (private) so that it can only be accessed within the class
        //  -make attributes private, functions public (interface). interface functions will use private data but the data itself cannot be accessed outside

// 3. Polymorphism
    // -objects that have more than 1 Form
    // -class has the same behavior and shares same functionality of its parent
    // -"same function when applied on different objects gives different results"
    // Tiger - can be a mammal, can be an animal, can be a carnivore, etc...

// 4. Inheritance:
    // -creating or modifying new classes from existing classes
    // -uses same properties of parent object
    // -increases reusability of code with extensibility
