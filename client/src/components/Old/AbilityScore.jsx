import React from 'react';

function AbilityScore(props) {
  return (
    <div>
      <div>
        Strength:
          {' '}
        {props.str}
      </div>
      <div>
        Dexterity:
          {' '}
        {props.dex}
      </div>
      <div>
        Constitution:
          {' '}
        {props.con}
      </div>
      <div>
        Intelligence:
          {' '}
        {props.int}
      </div>
      <div>
        Wisdom:
          {' '}
        {props.wis}
      </div>
      <div>
        Charisma:
          {' '}
        {props.cha}
      </div>
    </div>
  )
}

export default AbilityScore