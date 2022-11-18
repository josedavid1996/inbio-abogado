/* eslint-disable comma-dangle */
import { IconType } from 'react-icons'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from 'react-icons/fa'

export interface IDataTeam {
  img: string
  tittle: string
  subtittle: string
  icons: {
    Icon: IconType
    url: string
  }[]
}
export const DataTeam: IDataTeam[] = [
  {
    img: '/images/person1.webp',
    tittle: 'Fynley Wilkinson',
    subtittle: 'Managing Partner',
    icons: [
      { Icon: FaFacebookF, url: 'https://www.facebook.com/' },
      { Icon: FaTwitter, url: 'https://www.twitter.com/' },
      { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
      { Icon: FaPinterest, url: 'https://www.pinterest.com/' },
    ],
  },
  {
    img: '/images/person2.webp',
    tittle: 'Sasha Welsh',
    subtittle: 'Senior Partner',
    icons: [
      { Icon: FaFacebookF, url: 'https://www.facebook.com/' },
      { Icon: FaTwitter, url: 'https://www.twitter.com/' },
      { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
      { Icon: FaPinterest, url: 'https://www.pinterest.com/' },
    ],
  },
  {
    img: '/images/person3.webp',
    tittle: 'John Shepard',
    subtittle: 'Associate',
    icons: [
      { Icon: FaFacebookF, url: 'https://www.facebook.com/' },
      { Icon: FaTwitter, url: 'https://www.twitter.com/' },
      { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
      { Icon: FaPinterest, url: 'https://www.pinterest.com/' },
    ],
  },
]
