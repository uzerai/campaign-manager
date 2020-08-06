import { db } from 'src/lib/db'

export const characterDetails = () => {
  return db.characterDetail.findMany()
}

export const characterDetail = ({ id }) => {
  return db.characterDetail.findOne({
    where: { id },
  })
}

export const createCharacterDetail = ({ input }) => {
  return db.characterDetail.create({
    data: input,
  })
}

export const updateCharacterDetail = ({ id, input }) => {
  return db.characterDetail.update({
    data: input,
    where: { id },
  })
}

export const deleteCharacterDetail = ({ id }) => {
  return db.characterDetail.delete({
    where: { id },
  })
}

export const CharacterDetail = {
  character: (_obj, { root }) =>
    db.characterDetail.findOne({ where: { id: root.id } }).character(),
}
