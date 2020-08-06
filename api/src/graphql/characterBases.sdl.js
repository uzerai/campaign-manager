import gql from 'graphql-tag'

export const schema = gql`
  type CharacterBase {
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
    characterBases: [CharacterBase!]!
    characterBase(id: String!): CharacterBase!
  }

  input CreateCharacterBaseInput {
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

  input UpdateCharacterBaseInput {
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

  type Mutation {
    createCharacterBase(input: CreateCharacterBaseInput!): CharacterBase!
    updateCharacterBase(
      id: String!
      input: UpdateCharacterBaseInput!
    ): CharacterBase!
    deleteCharacterBase(id: String!): CharacterBase!
  }
`
