import { db } from 'src/lib/db'

export const skillStatuses = () => {
  return db.skillStatus.findMany()
}

export const skillStatus = ({ id }) => {
  return db.skillStatus.findOne({
    where: { id },
  })
}

export const createSkillStatus = ({ input }) => {
  return db.skillStatus.create({
    data: input,
  })
}

export const updateSkillStatus = ({ id, input }) => {
  return db.skillStatus.update({
    data: input,
    where: { id },
  })
}

export const deleteSkillStatus = ({ id }) => {
  return db.skillStatus.delete({
    where: { id },
  })
}

export const SkillStatus = {
  character: (_obj, { root }) =>
    db.skillStatus.findOne({ where: { id: root.id } }).character(),
}
