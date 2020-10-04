
var pokemon = [
    [1, 'Bulbasaur', 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'],
    [2, 'Ivysaur', 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'],
    [3, 'Venusaur', 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'],
    [4, 'Charmander', 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'],
    [5, 'Charmeleon', 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.'],
    [6, 'Charizard', 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.'],
    [7, 'Squirtle', 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'],
    [8, 'Wartotle', 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.'],
    [9, 'Blastoise', 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'],
    [10, 'Caterpie', 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.'],
    [11, 'Metapod', 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.'],
    [12, 'Butterfree', 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.'],
    [13, 'Weedle', 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.'],
    [14, 'Kakuna', 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.'],
    [15, 'Beedrill', 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.'],
    [16, 'Pidgey', 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.'],
    [17, 'Pidgeotto', 'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.'],
    [18, 'Pidgeot', 'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.'],
    [19, 'Rattata', 'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.'],
    [20, 'Raticate', 'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.']
]

function searchEngine(type, arg){
    var validity = validateSearch(type, arg);//uses validatesearch function to return validity
        if(validity == "valid"){//it checks if it's a valid input then depending on the type calls the respective search functions
            switch(type){
                case "lSearch":
                    return retrieveByName(arg);//either one returns and array with the adress in the pokemon array
                case "nSearch":
                     return retrieveByNumber(arg);
                default:
                return "Invalid Button";
            }
        }
        else{ 
        return validity; //in case its not valid it just returns the error message
        }
}
function retrieveByName(arg) {
    var rLPokemon = [];//generates empty array to store adress in pokemon array
    var lPokemon;
    
    for (var i = 0; i< pokemon.length; i++){//loop to check all pokemon in array
        lPokemon = pokemon[i][1].toLowerCase();//retrieves the name and changes it to lowercase so it can compare and to have the same number of letters as input

        if(lPokemon.includes(arg.toLowerCase())){
                rLPokemon.push(i);//adds array if the letters match
        }
     }
     return rLPokemon;//returns the array
 }

 function retrieveByNumber(arg){
    var rNPokemon = [];//empty array for pokemon adress
    var nPokemon;
    
    for (var i = 0; i<pokemon.length; i++){//loop to check all the pokemon
        nPokemon = pokemon[i][0].toString();//changes pokemon number to string its already been validated at this point so should just be numbers
        if(nPokemon.includes(arg)){//check if the number inputed is contained within any of the pokemon id
            rNPokemon.push(i);//adds to array
        }
    }
    return rNPokemon;//returns array
 }
 function validateSearch(type, arg){

    if(arg == ""){return "emptyQuery";}
    else if(type == "nSearch"){//depending on the type it is send it to first if or second if statements shouldve used switch statementhere tbh
        //depending on the validity itll return an error message or valid
        if(isNaN(arg)){//checks if its a number
            return "invalidCharacters";
        }
        else if(arg >20 || arg <0){//checks if its within range
            return "invalidOutOfRange";
        }
        else{
            return "valid";
        }
    }  
    else if(type == "lSearch"){
        if(!(/^[a-zA-Z]+$/.test(arg))){//checks that it only contains letters ofd the alphabet
            return "invalidCharacters";
        }
        else if(arg.length > 20 || arg.length == 0){//checks its under 20 characters
            return "invalidLength";
        }
        else return "valid";
    }    
 }
function toText(type, arg){
    var text;
    var selectedPokemon = searchEngine(type, arg);//return the adresses from search engine into an array
    if(typeof selectedPokemon == "string"){//checks that it is an array or a string
        text = "Error: " + selectedPokemon;//if its an error itll return an error message plus the specific error
        return text;
        
    }
    else{
        text = "Results: \n"; //just asthetic
        if(selectedPokemon.length==0){//if string because it couldnt find anything returns no results found to be displayed
            text = "No Results Found";
        }
        for(var i = 0; i < selectedPokemon.length; i++){//goes through all the adresses
           text = text.concat(pokemon[selectedPokemon[i]][0] + ". " + pokemon[selectedPokemon[i]][1]+ ": " + pokemon[selectedPokemon[i]][2] + "\n");
           //for every pokemon it adds its number name and desscritpion a text string with spaces
        }
        return text;//returns string
    }
}
function displaySearch(type, arg){
    var x = toText(type,arg);//sends this to a text
    window.alert(x);
}

