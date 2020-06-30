import { db } from 'src/lib/db'

export const characterStatBonuses = () => {
  return db.characterStatBonus.findMany()
}

export const CharacterStatBonus = {
  character: (_obj, { root }) =>
    db.characterStatBonus.findOne({ where: { id: root.id } }).character(),
}
