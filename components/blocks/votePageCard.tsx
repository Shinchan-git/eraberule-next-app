import React from 'react'
import Card from '../atoms/card'
import TextCell from '../atoms/textCell'
import SupportingTextCell from '../atoms/supportingTextCell'
import Spacer from '../atoms/spacer'
import { ruleDisplayNames } from '../../structs/rules'
import { useRecoilValue } from 'recoil'
import { roomDataState } from '../../recoil/atom'
import { ruleNames } from '../../structs/rules'
import SingleSelectionTable from '../blocks/singleSelectionTable'
import RankSelectionTable from './rankSelectionTable'

type Props = {
  isEnabled: boolean
}

const VotePageCard: React.FC<Props> = (props) => {
  //RECOIL
  const roomData = useRecoilValue(roomDataState)

  //COMPONENTS
  const Table = () => {
    if (roomData.rule === ruleNames.majorityRule) {
      return <SingleSelectionTable isEnabled={props.isEnabled} />
    } else {
      return <RankSelectionTable isEnabled={props.isEnabled} />
    }
  }

  //RETURN
  return (
    <Card isAccordion={false}>
      <SupportingTextCell shouldAlignLeft={true}>
        タイトル
      </SupportingTextCell>
      <TextCell>
        {roomData.title}
      </TextCell>
      <Spacer y="15px" />

      {roomData.explanation !== "" &&
        <React.Fragment>
          <SupportingTextCell shouldAlignLeft={true}>
            説明
          </SupportingTextCell>
          <TextCell>
            {roomData.explanation}
          </TextCell>
          <Spacer y="15px" />
        </React.Fragment>
      }

      <SupportingTextCell shouldAlignLeft={true}>
        候補
      </SupportingTextCell>

      <Table />
      <Spacer y="15px" />

      <SupportingTextCell shouldAlignLeft={true}>
        この投票は{ruleDisplayNames[roomData.rule]}で集計されます。
      </SupportingTextCell>
    </Card>
  )
}

export default VotePageCard