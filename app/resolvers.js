const humans = [{
  id: 1,
  name: 'Luke Skywalker',
  appearsIn: ['Star Wars', 'The Empire Strikes Back', 'Return of the Jedi']
}];

const droids = [{
  id: 1,
  name: 'R2D2',
  appearsIn: ['Star Wars', 'The Empire Strikes Back', 'Return of the Jedi']
}];

export const resolvers = {
  Query: {
    human: function(root, { id }) {
      return humans.find(function(human) { return human.id == id; });
    },
    droid: function(root, { id }) {
      return droids.find(function(droid) { return droid.id == id; });
    },
    characters: function(root, { episode }) {
      const result = [];
      droids.forEach(function(droid) { 
        if (droid.appearsIn.includes(episode)) { result.push(droid); }
      });
      humans.forEach(function(human) { 
        if (human.appearsIn.includes(episode)) { result.push(human); }
      });
      return result;
    }
  },

  Mutation: {
    addHuman: function(root, { name, appearsIn }) {
      const lastHumanId = humans[humans.length - 1].id;
      const newHuman = {
        id: lastHumanId + 1,
        name, appearsIn,
      };
      humans.push(newHuman);
      return newHuman;
    }
  }

};
