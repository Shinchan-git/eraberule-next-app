import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { roomDataState, personalRankState } from '../../recoil/atom'
import TextCell from '../atoms/textCell'
import SingleSelectionCell from '../atoms/singleSelectionCell'
import Spacer from '../atoms/spacer'

type Props = {
  isEnabled: boolean
}

const MjSelectionTable: React.FC<Props> = (props) => {
  const roomData = useRecoilValue(roomDataState)
  const [personalRank, setPersonalRank] = useRecoilState(personalRankState)

  const handleSelection = (optionIndex, languageIndex) => {
    if (!props.isEnabled) { return }
    let rank = [...personalRank]

    if (rank[optionIndex] === languageIndex + 1) {
      rank[optionIndex] = 0
    } else {
      rank[optionIndex] = languageIndex + 1
    }

    setPersonalRank(rank)
  }

  //DEV
  useEffect(() => {
    console.log("personalRank", personalRank)
  }, [personalRank])

  //UI
  return (
    <div css={tableStyle}>
      {roomData.options.map((option, optionIndex) => (
        <React.Fragment key={optionIndex}>
          <TextCell>
            {option}
          </TextCell>

          {roomData.commonLanguage.map((language, languageIndex) => (
            <SingleSelectionCell
              text={language}
              onClick={() => handleSelection(optionIndex, languageIndex)}
              isSelected={personalRank[optionIndex] === languageIndex + 1}
              key={languageIndex}
            />
          ))}

          <Spacer y="10px" />
        </React.Fragment>
      ))}
    </div>
  )
}

const tableStyle = css`
  padding: 0 6px;
`

export default MjSelectionTable