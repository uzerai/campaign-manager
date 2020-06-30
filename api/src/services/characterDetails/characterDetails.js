import { db } from 'src/lib/db'

export const characterDetails = () => {
  return db.characterDetail.findMany()
}

export const CharacterDetail = {
  character: (_obj, { root }) =>
    db.characterDetail.findOne({ where: { id: root.id } }).character(),
}
