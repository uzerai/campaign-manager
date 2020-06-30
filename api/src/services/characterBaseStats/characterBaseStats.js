import { db } from 'src/lib/db'

export const characterBaseStats = () => {
  return db.characterBaseStats.findMany()
}

export const CharacterBaseStats = {
  character: (_obj, { root }) =>
    db.characterBaseStats.findOne({ where: { id: root.id } }).character(),
}
