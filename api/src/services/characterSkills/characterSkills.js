import { db } from 'src/lib/db'

export const characterSkills = () => {
  return db.characterSkills.findMany()
}

export const CharacterSkills = {
  character: (_obj, { root }) =>
    db.characterSkills.findOne({ where: { id: root.id } }).character(),
  skillStatuses: (_obj, { root }) =>
    db.characterSkills.findOne({ where: { id: root.id } }).skillStatuses(),
}
