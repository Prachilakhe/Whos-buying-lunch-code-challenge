function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
        var numberOfPeople = names.length;
        var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
        var randomPerson = names[randomPersonPosition];
        return randomPerson + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }