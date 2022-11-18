/* eslint-disable comma-dangle */
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaRss,
} from 'react-icons/fa'
import { IconType } from 'react-icons'
export interface IDataFooter {
  DesignedBy: { description: string; url: string }
  SocialNetworks: { Icon: IconType; url: string }[]
}
export const DataFooter: IDataFooter = {
  DesignedBy: {
    description: '© Copyright 2022 - Inbio by Softaki',
    url: 'https://www.softaki.com/',
  },
  SocialNetworks: [
    { Icon: FaFacebookF, url: 'https://www.facebook.com/' },
    { Icon: FaTwitter, url: 'https://twitter.com/' },
    { Icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
    { Icon: FaPinterest, url: 'https://www.pinterest.com/' },
    { Icon: FaRss, url: 'https://www.google.com/' },
  ],
}
