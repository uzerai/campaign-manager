import { db } from 'src/lib/db'

export const skillStatuses = () => {
  return db.skillStatus.findMany()
}

export const SkillStatus = {
  characterSkills: (_obj, { root }) =>
    db.skillStatus.findOne({ where: { id: root.id } }).characterSkills(),
}
