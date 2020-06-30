import gql from 'graphql-tag'

export const schema = gql`
  type SkillStatus {
    id: String!
    type: SkillType!
    characterSkillId: String!
    characterSkill: CharacterSkills!
    value: Int!
    classSkill: Boolean!
    proficient: Boolean!
  }

  enum SkillType {
    ACROBATICS
    APPRAISE
    BLUFF
    CLIMB
    CRAFT_A
    CRAFT_B
    CRAFT_C
    DIPLOMACY
    DISABLE_DEVICE
    DISGUISE
    ESCAPE_ARTIST
    FLY
    HANDLE_ANIMAL
    HEAL
    INTIMIDATE
    KNOWLEDGE_ARCANA
    KNOWLEDGE_DUNGONEERING
    KNOWLEDGE_ENGINEERING
    KNOWLEDGE_GEOGRAPHY
    KNOWLEDGE_HISTORY
    KNOWLEDGE_LOCAL
    KNOWLEDGE_NATURE
    KNOWLEDGE_NOBILITY
    KNOWLEDGE_PLANES
    KNOWLEDGE_RELIGION
    LINGUISTICS
    PERCEPTION
    PERFORM_A
    PERFORM_B
    PROFESSION_A
    PROFESSION_B
    RIDE
    SENSE_MOTIVE
    SLEIGHT_OF_HAND
    SPELLCRAFT
    STEALTH
    SURVIVAL
    SWIM
    USE_MAGIC_DEVICE
  }

  type Query {
    skillStatuses: [SkillStatus]!
  }

  input CreateSkillStatusInput {
    type: SkillType!
    characterSkillId: String!
    value: Int!
    classSkill: Boolean!
    proficient: Boolean!
  }

  input UpdateSkillStatusInput {
    type: SkillType
    characterSkillId: String
    value: Int
    classSkill: Boolean
    proficient: Boolean
  }
`
