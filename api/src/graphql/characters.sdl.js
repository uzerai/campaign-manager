import gql from 'graphql-tag'

export const schema = gql`
  type Character {
    id: String!
    type: CharacterType!
    name: String!
    level: Int!
    race: Race!
    size: Size!
    details: CharacterDetail!
    baseStats: CharacterBase!
    statBonus: [CharacterStatBonus]!
    skills: [SkillStatus]!
  }

  enum CharacterType {
    NPC
    PLAYER
  }
  enum Race {
    HUMAN
    HALFLING
    SKINWALKER
    DWARF
    GNOME
  }
  enum Size {
    TINY
    SMALL
    MEDIUM
    LARGE
    HUGE
    GIGANTIC
  }

  type Query {
    characters: [Character!]!
    character(id: String!): Character!
  }

  input CreateCharacterInput {
    type: CharacterType!
    name: String!
    level: Int!
    race: Race!
    size: Size!
  }

  input UpdateCharacterInput {
    type: CharacterType
    name: String
    level: Int
    race: Race
    size: Size
  }

  type Mutation {
    createCharacter(input: CreateCharacterInput!): Character!
    updateCharacter(id: String!, input: UpdateCharacterInput!): Character!
    deleteCharacter(id: String!): Character!
  }
`
