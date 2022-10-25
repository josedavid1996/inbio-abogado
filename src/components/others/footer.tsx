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
    <div className="bg-[#171A1D] z-30 py-5 border-t-[0.5px] border-[#999187]">
      <div className=" h-[63px] md:h-[34px]">
        <Container Class="flex flex-col md:flex-row justify-between items-center">
          <h4 className="">© Copyright 2022 - Kyros by Designesia</h4>
          <div className="flex flex-row gap-2  justify-between text-white md:w-[216px] ">
            <FaFacebookF className="w-4 h-4" />
            <FaTwitter className="w-4 h-4" />
            <FaLinkedinIn className="w-4 h-4" />
            <FaPinterest className="w-4 h-4" />
            <FaRss />
          </div>
        </Container>
      </div>
    </div>
  )
}
