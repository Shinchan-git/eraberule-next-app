import React from 'react'
import { css } from '@emotion/react'
import { primaryColor } from '../../styles/colors'

type Props = {
  value: string
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = (props) => {
  return (
    <div css={containerStyle}>
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        css={inputStyle}
      />
    </div>
  )
}
const containerStyle = css`
  padding: 0 10px;
`
const inputStyle = css`
  width: 100%;
  background-color: #fff;
  font-size: 16px;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: none;
  border: solid 1px rgb(200, 200, 200);
  border-radius: 6px;
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  &:focus {
    border: solid 1px ${primaryColor};
    outline: none;
  }
`

export default Input