import * as React from 'react'
import { SVGProps } from 'react'

export const IconScroll = (props: SVGProps<SVGSVGElement>) => (
  <a className="scroll-link" href="#About">
    <svg
      {...props}
      xmlns="..."
      viewBox="0 0 76 130"
      // preserveAspectRatio="xMidYmid meet"
    >
      <g fill="none" fillRule="evenodd">
        <rect
          width="60"
          height="122"
          x="1.5"
          y="1.5"
          stroke="#FFF"
          strokeWidth="3"
          rx="36"
        />
        <circle cx="32" cy="31.5" r="4.5" fill="#FFF" className="scroll" />
      </g>
    </svg>
  </a>
)
