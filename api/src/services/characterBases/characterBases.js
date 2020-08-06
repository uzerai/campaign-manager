import { db } from 'src/lib/db'

export const characterBases = () => {
  return db.characterBase.findMany()
}

export const characterBase = ({ id }) => {
  return db.characterBase.findOne({
    where: { id },
  })
}

export const createCharacterBase = ({ input }) => {
  return db.characterBase.create({
    data: input,
  })
}

export const updateCharacterBase = ({ id, input }) => {
  return db.characterBase.update({
    data: input,
    where: { id },
  })
}

export const deleteCharacterBase = ({ id }) => {
  return db.characterBase.delete({
    where: { id },
  })
}

export const CharacterBase = {
  character: (_obj, { root }) =>
    db.characterBase.findOne({ where: { id: root.id } }).character(),
}
