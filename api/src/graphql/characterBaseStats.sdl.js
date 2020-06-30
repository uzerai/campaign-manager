import gql from 'graphql-tag'

export const schema = gql`
  type CharacterBaseStats {
    id: String!
    characterId: String!
    character: Character!
    spellResistance: Int!
    strength: Int!
    dexterity: Int!
    constitution: Int!
    intelligence: Int!
    wisdom: Int!
    charisma: Int!
    initiative: Int!
    armorClass: Int!
    touchArmorClass: Int!
    flatArmorClass: Int!
    cmb: Int!
    cld: Int!
    bab: Int!
    hitPoints: Int!
    landSpeed: Int!
    waterSpeed: Int!
    climbSpeed: Int!
    burrowSpeed: Int!
    flySpeed: Int!
  }

  type Query {
    characterBaseStats: [CharacterBaseStats!]!
  }

  input CreateCharacterBaseStatsInput {
    characterId: String!
    spellResistance: Int!
    strength: Int!
    dexterity: Int!
    constitution: Int!
    intelligence: Int!
    wisdom: Int!
    charisma: Int!
    initiative: Int!
    armorClass: Int!
    touchArmorClass: Int!
    flatArmorClass: Int!
    cmb: Int!
    cld: Int!
    bab: Int!
    hitPoints: Int!
    landSpeed: Int!
    waterSpeed: Int!
    climbSpeed: Int!
    burrowSpeed: Int!
    flySpeed: Int!
  }

  input CreateCharacterBaseStatsWithoutCharacterInput {
    spellResistance: Int!
    strength: Int!
    dexterity: Int!
    constitution: Int!
    intelligence: Int!
    wisdom: Int!
    charisma: Int!
    initiative: Int!
    armorClass: Int!
    touchArmorClass: Int!
    flatArmorClass: Int!
    cmb: Int!
    cld: Int!
    bab: Int!
    hitPoints: Int!
    landSpeed: Int!
    waterSpeed: Int!
    climbSpeed: Int!
    burrowSpeed: Int!
    flySpeed: Int!
  }

  input UpdateCharacterBaseStatsInput {
    characterId: String
    spellResistance: Int
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    initiative: Int
    armorClass: Int
    touchArmorClass: Int
    flatArmorClass: Int
    cmb: Int
    cld: Int
    bab: Int
    hitPoints: Int
    landSpeed: Int
    waterSpeed: Int
    climbSpeed: Int
    burrowSpeed: Int
    flySpeed: Int
  }
`
