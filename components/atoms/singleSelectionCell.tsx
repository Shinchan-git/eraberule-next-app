import React from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { primaryColor, primarySelectedColor } from '../../styles/colors'
import Spacer from '../atoms/spacer'
import RadioIcon from '../icons/radioIcon'

type Props = {
  text: string
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  isSelected: boolean
  children?: React.ReactNode
}

const SingleSelectionCell: React.FC<Props> = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      css={() => layoutStyle(props.isSelected)}
    >
      <span><RadioIcon isChecked={props.isSelected} color={primaryColor} /></span>
      <Spacer x="6px" />
      <span css={textStyle}>{props.text}</span>
    </motion.button>
  )
}

const layoutStyle = (isSelected) => css`
  width: 100%;
  margin: 3px 0;
  padding: 5px;
  border: none;
  border-radius: 6px;
  background-color: ${isSelected ? primarySelectedColor : "transparent"};
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  display: flex;
  &:focus {
    outline: none;
  }
`
const textStyle = css`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  text-align: left;
`

export default SingleSelectionCell