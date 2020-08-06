import gql from 'graphql-tag'

export const schema = gql`
  type CharacterStatBonus {
    id: String!
    characterId: String!
    character: Character!
    temporary: Boolean!
    source: StatBonusSource
    target: CharacterStat!
  }

  enum StatBonusSource {
    RACE
    CLASS
    SKILL
    ABILITY
  }
  enum CharacterStat {
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
    SPELL_RESISTANCE
    STRENGTH
    DEXTERITY
    CONSTITUTION
    INTELLIGENCE
    WISDOM
    CHARISMA
    INITIATIVE
    ARMOR_CLASS
    TOUCH_ARMOR_CLASS
    FLAT_ARMOR_CLASS
    CMB
    CLD
    BAB
    HIT_POINTS
    LAND_SPEED
    WATER_SPEED
    CLIMBS_PEED
    BURROW_SPEED
    FLY_SPEED
  }

  type Query {
    characterStatBonuses: [CharacterStatBonus!]!
    characterStatBonus(id: String!): CharacterStatBonus!
  }

  input CreateCharacterStatBonusInput {
    characterId: String!
    temporary: Boolean!
    source: StatBonusSource
    target: CharacterStat!
  }

  input UpdateCharacterStatBonusInput {
    characterId: String
    temporary: Boolean
    source: StatBonusSource
    target: CharacterStat
  }

  type Mutation {
    createCharacterStatBonus(
      input: CreateCharacterStatBonusInput!
    ): CharacterStatBonus!
    updateCharacterStatBonus(
      id: String!
      input: UpdateCharacterStatBonusInput!
    ): CharacterStatBonus!
    deleteCharacterStatBonus(id: String!): CharacterStatBonus!
  }
`
