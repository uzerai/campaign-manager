import gql from 'graphql-tag'

export const schema = gql`
  type CharacterDetail {
    id: String!
    characterId: String!
    character: Character!
    age: String!
    alginment: String!
    height: String!
    weight: String!
    deity: String!
    homeland: String!
  }

  type Query {
    characterDetails: [CharacterDetail!]!
  }

  input CreateCharacterDetailInput {
    characterId: String!
    age: String!
    alginment: String!
    height: String!
    weight: String!
    deity: String!
    homeland: String!
  }

  input CreateCharacterDetailWithoutCharacterInput {
    age: String!
    alginment: String!
    height: String!
    weight: String!
    deity: String!
    homeland: String!
  }

  input UpdateCharacterDetailInput {
    characterId: String
    age: String
    alginment: String
    height: String
    weight: String
    deity: String
    homeland: String
  }
`
