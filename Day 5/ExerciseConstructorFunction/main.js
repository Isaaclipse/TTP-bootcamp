        function Dog(breed, fur, eyes) {
            this.breed = breed;
            this.fur = fur;
            this.eyes = eyes;
        }

      
            var myDog = new Dog("lab", "brown", "black");
            var johnsDog = new Dog("pomeranian", "black", "brown");
        
    
            Dog.prototype.eyess = function() {
                return "This dog's eyes are the color " + this.eyes;
            }

            Console.log(johnsDog.eyess())