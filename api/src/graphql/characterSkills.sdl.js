import gql from 'graphql-tag'

export const schema = gql`
  type CharacterSkills {
    id: String!
    characterId: String!
    character: Character!
    skills: [SkillStatus]
  }

  type Query {
    characterSkills: [CharacterSkills!]!
  }

  input CreateCharacterSkillsInput {
    characterId: String!
    skills: [CreateSkillStatusInput]
  }

  input CreateCharacterSkillsWithoutCharacterInput {
    skills: [CreateSkillStatusInput]
  }

  input UpdateCharacterSkillsInput {
    characterId: String
  }
`
