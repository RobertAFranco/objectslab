
const pokemonArray = [
    { number: 1, name: "Bulbasaur", type: "Grass", hp: 45, starter: true },
    { number: 2, name: "Ivysaur", type: "Grass", hp: 60, starter: false },
    { number: 3, name: "Venusaur", type: "Grass", hp: 80, starter: false },
    { number: 4, name: "Charmander", type: "Fire", hp: 39, starter: true },
    { number: 5, name: "Charmeleon", type: "Fire", hp: 58, starter: false },
    { number: 6, name: "Charizard", type: "Fire", hp: 78, starter: false },
    { number: 7, name: "Squirtle", type: "Water", hp: 44, starter: true },
    { number: 8, name: "Wartortle", type: "Water", hp: 59, starter: false },
    { number: 9, name: "Blastoise", type: "Water", hp: 79, starter: false },
    { number: 25, name: "Pikachu", type: "Electric", hp: 35, starter: true },
    { number: 26, name: "Raichu", type: "Electric", hp: 60, starter: false }
    // ... could contine
  ];
  
  const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 }
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 }
    ],
    
    // Exercise 1
    printPokemonNameByNumber: function(pokemonNumber) {
      const pokemon = pokemonArray.find(p => p.number === pokemonNumber);
      if (pokemon) {
        console.log(pokemon.name);
      } else {
        console.log('Pokemon not found');
      }
    },
  
    // Exercise 2
    logGame: function() {
      console.log(game);
    },
  
    // Exercise 3
    difficulty: "Medium",
  
    // Exercise 4
    addStarterToParty: function() {
      const starterPokemon = pokemonArray.filter(p => p.starter);
      if (starterPokemon.length > 0) {
        this.party.push(starterPokemon[0]); // Add the first starter Pokemon to the party
      }
    },
  
    // Exercise 5
    addMorePokemonToParty: function() {
      const additionalPokemon = [
        pokemonArray.find(p => p.number === 2), // Ivysaur
        pokemonArray.find(p => p.number === 5), // Charmeleon
        pokemonArray.find(p => p.number === 8)  // Wartortle
      ];
      this.party.push(...additionalPokemon);
    },
  
    // Exercise 6
    completeGymsBelowDifficulty: function(maxDifficulty) {
      this.gyms.forEach(gym => {
        if (gym.difficulty < maxDifficulty) {
          gym.completed = true;
        }
      });
    },
  
    // Exercise 7
    evolvePokemon: function(pokemonNumber) {
      const evolutionMap = {
        1: 2,  // Bulbasaur -> Ivysaur
        4: 5,  // Charmander -> Charmeleon
        7: 8,  // Squirtle -> Wartortle
        25: 26 // Pikachu -> Raichu
      };
      
      const pokemon = this.party.find(p => p.number === pokemonNumber);
      if (pokemon) {
        const evolvedNumber = evolutionMap[pokemonNumber];
        const evolvedPokemon = pokemonArray.find(p => p.number === evolvedNumber);
        if (evolvedPokemon) {
          const index = this.party.indexOf(pokemon);
          if (index !== -1) {
            this.party.splice(index, 1, evolvedPokemon);
          }
        }
      }
    },
  
    // Exercise 8
    printPartyPokemonNames: function() {
      this.party.forEach(pokemon => console.log(pokemon.name));
    },
  
    // Exercise 9
    printStarterPokemon: function() {
      const starters = pokemonArray.filter(p => p.starter);
      starters.forEach(pokemon => console.log(pokemon.name));
    },
  
    // Exercise 10
    catchPokemon: function(pokemonObj) {
      this.party.push(pokemonObj);
    },
  
    // Exercise 11
    catchPokemonAndDecreasePokeballs: function(pokemonObj) {
      this.party.push(pokemonObj);
      const pokeball = this.items.find(item => item.name === "pokeball");
      if (pokeball) {
        pokeball.quantity -= 1;
      }
    },
  
    // Exercise 12
    completeGymsBelowDifficulty6: function() {
      this.completeGymsBelowDifficulty(6);
    },
  
    // Exercise 13
    gymStatus: function() {
      const gymTally = {
        completed: 0,
        incomplete: 0
      };
      this.gyms.forEach(gym => {
        if (gym.completed) {
          gymTally.completed += 1;
        } else {
          gymTally.incomplete += 1;
        }
      });
      console.log(gymTally);
    },
  
    // Exercise 14
    partyCount: function() {
      return this.party.length;
    },
  
    // Exercise 15
    completeGymsBelowDifficulty8: function() {
      this.completeGymsBelowDifficulty(8);
    }
  };
  
  // Exercise 16: Log the entire game object
  console.log(game);
  
  // Example calls for testing
  game.printPokemonNameByNumber(59); // Print name of Pokémon with number 59
  game.addStarterToParty();
  game.addMorePokemonToParty();
  game.completeGymsBelowDifficulty(3);
  game.evolvePokemon(1); // Evolve Bulbasaur
  game.printPartyPokemonNames();
  game.printStarterPokemon();
  game.catchPokemon({ number: 10, name: "Caterpie", type: "Bug", hp: 45 });
  game.catchPokemonAndDecreasePokeballs({ number: 11, name: "Metapod", type: "Bug", hp: 50 });
  game.completeGymsBelowDifficulty6();
  game.gymStatus();
  console.log("Party Count:", game.partyCount());
  game.completeGymsBelowDifficulty8();
  