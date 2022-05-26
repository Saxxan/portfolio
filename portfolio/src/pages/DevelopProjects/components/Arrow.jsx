import React from 'react';
import styled from 'styled-components';

const CardArrow = styled.svg`
    width: 84px;
    height: 84px;
    align-self: flex-end;
`

export default function Arrow() {
  return (
      <CardArrow viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg">
          <path d="M66.5 22.435L61.565 17.5L24.5 54.565V31.5H17.5V66.5H52.5V59.5H29.435L66.5 22.435Z" fill="url(#paint0_linear_666_595)" />
          <defs>
              <linearGradient id="paint0_linear_666_595" x1="11" y1="71.5" x2="72" y2="13.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0066FF" />
                  <stop offset="1" stop-color="#0066FF" stop-opacity="0.1" />
              </linearGradient>
          </defs>
      </CardArrow>
  )
}
