import React from 'react'

import { BulletPoint, KeyContainer } from './styles'

const Key = () => {
  return (
    <KeyContainer role="list">
        <BulletPoint role="listitem" >
            Not completed
        </BulletPoint>
        <BulletPoint role="listitem" >
            completed
        </BulletPoint>
        </KeyContainer>

  )
}

export default Key