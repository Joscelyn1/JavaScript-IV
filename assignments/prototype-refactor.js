/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several 
  constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/ 



class GameObject {
    constructor(attributes) {
        this.createdAt = new Date();
        this.dimensions = attributes.dimensions;
        this.name = attributes.name;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
class CharacterStats extends GameObject {
    constructor(characterStatsAttributes) {
        super(characterStatsAttributes);
        this.healthPoints = characterStatsAttributes.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`
    }

}
  

  
  function Humanoid(attributes) { // (Having an appearance or character resembling that of a human.) ===
    CharacterStats.call(this, attributes);
  
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`
  };
  
  function Villain(attributes) {
    Humanoid.call(this, attributes);
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.slash = function(hero) {
    hero.healthPoints = hero.healthPoints - 1;
    if (hero.healthPoints === 0) {
      return `${this.name} kills ${hero.name}`;
    } else if (hero.healthPoints < 0) {
      return `${this.name} is kicking ${hero.name}'s corpse!`
    } else {
    return `${this.name} slashes ${hero.name} for one point of damge. ${hero.name} now has ${hero.healthPoints} hp`;
    }
  }
  
  function Hero(attributes) {
    Humanoid.call(this, attributes);
  }
  
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.slash = function(villain) {
    villain.healthPoints = villain.healthPoints - 1;
  
    if (villain.healthPoints === 0) {
      return `${this.name} kills ${villain.name}`;
    } else if (villain.healthPoints < 0) {
      return `${this.name} is kicking ${villain.name}'s corpse!`
    } else {
    return `${this.name} slashes ${villain.name} for one point of damage. ${villain.name} now has ${villain.healthPoints} hp`;
    }
  }
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const mario = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Mario',
      team: 'Mushroom Kingdom',
      weapons: [
        'Jump',
        'Stomp',
      ],
      language: 'Toad',
    });
  
  
    const bowser = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 5,
        height: 10,
      },
      healthPoints: 10,
      name: 'Bowser',
      team: 'Mushroom Kingdom',
      weapons: [
        'Claw',
        'Stomp',
      ],
      language: 'Koopa',
    });
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(mario.slash(bowser));
    console.log(bowser.slash(mario));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
    console.log(mario.slash(bowser));
  
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!