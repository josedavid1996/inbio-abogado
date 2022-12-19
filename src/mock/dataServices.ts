/* eslint-disable comma-dangle */
import { IconType } from 'react-icons'
import { FaBriefcase, FaGavel, FaUser } from 'react-icons/fa'

export interface IDataServices {
  Icon: IconType
  tittle: string
  description: string
}
export const DataServices: IDataServices[] = [
  {
    Icon: FaBriefcase,
    tittle: 'Commercial Services',
    description:
      'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.',
  },
  {
    Icon: FaUser,
    tittle: 'Employment Services',
    description:
      'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.',
  },
  {
    Icon: FaGavel,
    tittle: 'Civil Litigation',
    description:
      'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.',
  },
]
