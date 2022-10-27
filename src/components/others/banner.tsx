/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react'
import { Container } from '@components/others/container'
import NextImage from 'next/image'
import Typed from 'typed.js'
const OptionTyped = ['Personal Lawyer', 'Corporate Lawyer', 'Business Lawyer']

export const Banner = () => {
  const typedElement = useRef(null)
  useEffect(() => {
    const typed = new Typed(typedElement.current || '', {
      strings: OptionTyped,
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato
    })
    // Destropying
    return () => {
      typed.destroy()
    }
  })
  return (
    <Container>
      <section className="h-auto flex flex-col gap-10 md:gap-4 md:flex-row justify-center items-center lg:pt-16 py-16">
        <div className="w-full flex flex-col gap-[10px] md:w-1/2  h-full ">
          <h4 className="text-white tracking-[4px] text-xs  ">
            YOUR LEGAL PARTNER
          </h4>
          <div className="text-white  text-[32px] lg:text-[50px] tracking-[-1px] font-semibold">
            Hi, I´m <span className="text-[#AD8E6D]">Alberto Kyros </span>
            <br /> a {' '}
            <span className="" ref={typedElement}></span>
          </div>
          <p className="text-[#999187] ">
            In quis amet ex veniam in irure est culpa veniam velit fugiat
            cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt
            commodo voluptate ullamco magna nulla amet. Lorem ipsum officia
          </p>
          <div className=" w-[130px] h-[37px] rounded-lg bg-[#AD8E6D] text-white">
            <button
              className=" w-full h-full z-50"
              onClick={() => console.log('hola')}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center ">
        {/* <div className="animate-renderimgabanner relative w-full h-[438px] lg:h-[554px] aspect-square z-0 "> */}
          <div className="animate-renderimgabanner relative w-full aspect-custom z-0 ">
            <NextImage
              src="/images/personbanner.png"
              layout="fill"
              className="w-full h-full absolute"
            />
          </div>
        </div>
      </section>
    </Container>
  )
}
