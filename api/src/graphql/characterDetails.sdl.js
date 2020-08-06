import gql from 'graphql-tag'

export const schema = gql`
  type CharacterDetail {
    id: String!
    characterId: String!
    character: Character!
    age: String
    alignment: String
    height: String
    weight: String
    deity: String
    homeland: String
  }

  type Query {
    characterDetails: [CharacterDetail!]!
    characterDetail(id: String!): CharacterDetail!
  }

  input CreateCharacterDetailInput {
    characterId: String!
    age: String
    alignment: String
    height: String
    weight: String
    deity: String
    homeland: String
  }

  input UpdateCharacterDetailInput {
    characterId: String
    age: String
    alignment: String
    height: String
    weight: String
    deity: String
    homeland: String
  }

  type Mutation {
    createCharacterDetail(input: CreateCharacterDetailInput!): CharacterDetail!
    updateCharacterDetail(
      id: String!
      input: UpdateCharacterDetailInput!
    ): CharacterDetail!
    deleteCharacterDetail(id: String!): CharacterDetail!
  }
`
