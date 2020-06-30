import { db } from 'src/lib/db'

export const characters = () => {
  return db.character.findMany()
}

export const character = ({ id }) => {
  return db.character.findOne({
    where: { id },
  })
}

export const createCharacter = ({ input }) => {
  return db.character.create({
    data: input,
  })
}

export const updateCharacter = ({ id, input }) => {
  return db.character.update({
    data: input,
    where: { id },
  })
}

export const deleteCharacter = ({ id }) => {
  return db.character.delete({
    where: { id },
  })
}

export const Character = {
  characterDetail: (_obj, { root }) =>
    db.character.findOne({ where: { id: root.id } }).characterDetail(),
  characterBaseStats: (_obj, { root }) =>
    db.character.findOne({ where: { id: root.id } }).characterBaseStats(),
  characterStatBonuses: (_obj, { root }) =>
    db.character.findOne({ where: { id: root.id } }).characterStatBonuses(),
  characterSkills: (_obj, { root }) =>
    db.character.findOne({ where: { id: root.id } }).characterSkills(),
}
