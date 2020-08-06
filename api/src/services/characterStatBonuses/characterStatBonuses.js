import { db } from 'src/lib/db'

export const characterStatBonuses = () => {
  return db.characterStatBonus.findMany()
}

export const characterStatBonus = ({ id }) => {
  return db.characterStatBonus.findOne({
    where: { id },
  })
}

export const createCharacterStatBonus = ({ input }) => {
  return db.characterStatBonus.create({
    data: input,
  })
}

export const updateCharacterStatBonus = ({ id, input }) => {
  return db.characterStatBonus.update({
    data: input,
    where: { id },
  })
}

export const deleteCharacterStatBonus = ({ id }) => {
  return db.characterStatBonus.delete({
    where: { id },
  })
}

export const CharacterStatBonus = {
  character: (_obj, { root }) =>
    db.characterStatBonus.findOne({ where: { id: root.id } }).character(),
}
