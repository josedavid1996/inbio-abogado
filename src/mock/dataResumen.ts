/* eslint-disable comma-dangle */
export interface History {
  RangeYear: {
    initial: string
    finish: string
  }
  tittle: string
  subtittle: string
  description: string
}
export interface IDataResumen {
  Tittle: string
  History: History[]
}

export const DataResumen: IDataResumen[] = [
  {
    History: [
      {
        RangeYear: { finish: 'now', initial: '2014' },
        tittle: 'Director of Kyros & Co',
        subtittle: 'Kyros & Co Law Firm',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.',
      },
      {
        RangeYear: { finish: '2014', initial: '2010' },
        tittle: 'Director of Kyros & Co',
        subtittle: 'Kyros & Co Law Firm',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.',
      },
      {
        RangeYear: { finish: '2010', initial: '2008' },
        tittle: 'Director of Kyros & Co',
        subtittle: 'Kyros & Co Law Firm',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.',
      },
    ],
    Tittle: 'Experiences',
  },
  {
    History: [
      {
        RangeYear: { finish: 'now', initial: '2014' },
        tittle: 'Director of Kyros & Co',
        subtittle: 'Kyros & Co Law Firm',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.',
      },
      {
        RangeYear: { finish: '2014', initial: '2010' },
        tittle: 'Director of Kyros & Co',
        subtittle: 'Kyros & Co Law Firm',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.',
      },
      {
        RangeYear: { finish: '2010', initial: '2008' },
        tittle: 'Director of Kyros & Co',
        subtittle: 'Kyros & Co Law Firm',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.',
      },
    ],
    Tittle: 'Education',
  },
]
