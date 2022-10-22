export interface IProgressBar {
  tittle: string
  color?: string
  tittlePercentege?: string
  percentage: string
}
export const DataProgressBar: IProgressBar[] = [
  {
    tittle: 'Business Lawyer',
    color: '#AD8E6D',
    percentage: 'w-[80%]',
    tittlePercentege: '80'
  },
  {
    tittle: 'Corporate Lawyer',
    color: '#AD8E6D',
    percentage: 'w-[70%]',
    tittlePercentege: '70'
  },
  {
    tittle: 'Personal Lawyer',
    color: '#AD8E6D',
    percentage: 'w-[82%]',
    tittlePercentege: '82'
  },
  {
    tittle: 'Family Lawyer',
    color: '#AD8E6D',
    percentage: 'w-[62%]',
    tittlePercentege: '62'
  },
  {
    tittle: 'Estate Lawyer',
    color: '#AD8E6D',
    percentage: 'w-[90%]',
    tittlePercentege: '90'
  }
]
