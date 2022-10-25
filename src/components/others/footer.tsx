/* eslint-disable comma-dangle */
import React from 'react'
import { Container } from './container'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaRss,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="bg-[#171A1D] z-30 py-[22px] border-t-[0.5px] border-[#999187]">
      <div className="h-[58px] md:h-[30px]">
        <Container Class="flex flex-col md:flex-row justify-between items-center ">
          <h4 className="text-left  tracking-normal w-full">© Copyright 2022 - Kyros by Designesia</h4>
          <div className="flex justify-end w-full text-white  ">
            <div className="w-[205px] flex flex-row justify-between  ">
              <FaFacebookF className="w-4 h-4" />
              <FaTwitter className="w-4 h-4" />
              <FaLinkedinIn className="w-4 h-4" />
              <FaPinterest className="w-4 h-4" />
              <FaRss className="w-4 h-4" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
