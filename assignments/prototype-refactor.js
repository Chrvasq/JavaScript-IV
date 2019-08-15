/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes) {
      this.createdAt = attributes.createdAt;
      this.name = attributes.name;
      this.dimensions = attributes.dimensions;
    }
    destroy() {
      return `${this.name} was removed from the game.`;
    }
  }

  /*
      === CharacterStats ===
      * healthPoints
      * takeDamage() // prototype method -> returns the string '<object name> took damage.'
      * should inherit destroy() from GameObject's prototype
    */
  class CharacterStats extends GameObject {
    constructor(attributes) {
      super(attributes);
      this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
      return `${this.name} took damage.`;
    }
  }

  /*
      === Humanoid (Having an appearance or character resembling that of a human.) ===
      * team
      * weapons
      * language
      * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
      * should inherit destroy() from GameObject through CharacterStats
      * should inherit takeDamage() from CharacterStats
    */
  class Humanoid extends CharacterStats {
    constructor(attributes) {
      super(attributes);
      this.team = attributes.team;
      this.weapons = attributes.weapons;
      this.language = attributes.language;
    }
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`;
    }
  }

  /*
   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
   * Instances of CharacterStats should have all of the same properties as GameObject.
   */

  // Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
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

  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  class Villain extends Humanoid {
    constructor(attributes) {
      super(attributes);
      this.attackPower = attributes.attackPower;
    }
    attack(object) {
      if (object.healthPoints > 0) {
        console.log(
          `${this.name} attacks ${object.name} with ${this.weapons} for ${
            this.attackPower
          } damage.`
        );
        console.log(object.takeDamage());
        object.healthPoints -= this.attackPower;
        console.log(`${object.name}'s HP remaining: ${object.healthPoints}`);
        if (object.healthPoints <= 0) {
          console.log(object.destroy());
        }
      }
    }
  }

  class Hero extends Humanoid {
    constructor(attributes) {
      super(attributes);
      this.attackPower = attributes.attackPower;
      this.healPower = attributes.healPower;
      this.spells = attributes.spells;
    }
    attack(object) {
      if (object.healthPoints > 0) {
        console.log(
          `${this.name} attacks ${object.name} with ${this.weapons} for ${
            this.attackPower
          } damage.`
        );
        console.log(object.takeDamage());
        object.healthPoints -= this.attackPower;
        console.log(`${object.name}'s HP remaining: ${object.healthPoints}`);
        if (object.healthPoints <= 0) {
          console.log(object.destroy());
        }
      }
    }
    holyLight(object) {
      if (this.healthPoints > 0) {
        console.log(
          `${this.name} casts ${this.spells[0]} on ${object.name} restoring ${
            this.healPower
          } HP.`
        );
        object.healthPoints += this.healPower;
        console.log(`${object.name}'s HP remaining: ${object.healthPoints}`);
      }
    }
  }

  const theLichKing = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 8
    },
    healthPoints: 30,
    attackPower: 5,
    name: "The Lich King",
    team: "The Scourge",
    weapons: ["Frostmourne"],
    language: "Common Tongue"
  });

  const tirionFordring = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 4,
      height: 8
    },
    healthPoints: 30,
    attackPower: 5,
    healPower: 3,
    spells: ["Holy Light", "Flash of Light"],
    name: "Tirion Fordring",
    team: "Argent Crusade",
    weapons: ["Ashbringer"],
    language: "Common Tongue"
  });

  tirionFordring.attack(theLichKing);
  theLichKing.attack(tirionFordring);
  tirionFordring.attack(theLichKing);
  theLichKing.attack(tirionFordring);
  tirionFordring.holyLight(tirionFordring);
  theLichKing.attack(tirionFordring);
  tirionFordring.holyLight(tirionFordring);
  theLichKing.attack(tirionFordring);
  tirionFordring.attack(theLichKing);
  theLichKing.attack(tirionFordring);
  tirionFordring.attack(theLichKing);
  theLichKing.attack(tirionFordring);
  tirionFordring.attack(theLichKing);
  theLichKing.attack(tirionFordring);
  tirionFordring.attack(theLichKing);
