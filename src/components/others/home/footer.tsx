/* eslint-disable comma-dangle */
import { Container } from './container'
import { DataFooter } from '@mock/dataFooter'
import NextLink from 'next/link'

export const Footer = () => {
  return (
    <div className="bg-[#171A1D]  py-[22px]  border-t-[0.5px] border-[#999187] static w-full bottom-0">
      <div className="h-[58px] md:h-[30px]">
        <Container Class="flex flex-col md:flex-row justify-between items-center ">
          <h4 className="text-left  tracking-normal w-full text-custom3">
            <NextLink href={DataFooter.DesignedBy.url}>
              <a target={'_blank'}>
                {DataFooter?.DesignedBy.description || ''}
              </a>
            </NextLink>
          </h4>
          <div className="flex justify-end w-full text-white  ">
            <div className="w-[205px] flex flex-row justify-between  ">
              {DataFooter?.SocialNetworks?.map(({ Icon, url }, k) => (
                <NextLink href={url} key={k}>
                  <a target={'_blank'}>
                    <Icon className="w-4 h-4" />
                  </a>
                </NextLink>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
