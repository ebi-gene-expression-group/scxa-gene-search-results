import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ExperimentTableCard = ({title}) =>
  <div>
    <p>{title}</p>
  </div>

ExperimentTableCard.propTypes = {
  title: PropTypes.string.isRequired
}

const IconDiv = styled.div`
  width: 15%;
  text-align: center;
`
IconDiv.displayName = 'IconDiv'

const BitDiv = styled.div`
  width: 25%;
  text-align: center;
`
const DoveDiv = styled.div`
  width: 25%;
  text-align: center;
`

const ExperimentTableHeader = ({onClick}) =>
  <DoveDiv>
    <IconDiv onClick={()=>onClick(`test`)}>
      Meow
    </IconDiv>
    <BitDiv onClick={()=>onClick(`test`)}>
      Wow wow
    </BitDiv>
  </DoveDiv>

ExperimentTableHeader.propTypes = {
	onClick: PropTypes.func.isRequired
}

// Stolen from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

const vindicators = [
  { group:`Vindicator`, value: `supernova`, label: `Supernova`, disabled: false},
  { group:`Vindicator`, value: `noob-noob`, label: `Noob-Noob`, disabled: false},
  { group:`Vindicator`, value: `vance_maximus`, label: `Vance Maximus`, disabled: false},
  { group:`Vindicator`, value: `alan_rails`, label: `Alan Rails`, disabled: false},
  { group:`Vindicator`, value: `crocubot`, label: `Crocubot`, disabled: false},
  { group:`Vindicator`, value: `million_ants`, label: `Million Ants`, disabled: false},
  { group:`Vindicator`, value: `morty_smith`, label: `Morty Smith`, disabled: false},
  { group:`Vindicator`, value: `rick_sanchez`, label: `Rick Sanchez`, disabled: false},
  { group:`Vindicator`, value: `lady_katana`, label: `Lady Katana`, disabled: false},
  { group:`Vindicator`, value: `calypso`, label: `Calypso`, disabled: false},
  { group:`Vindicator`, value: `diablo_verde`, label: `Diablo Verde`, disabled: false}
]

const episodes = [
  {
    element: {
      title: `Raising Gazorpazorp`,
      meow: `rasperry`,
      wowWow: `blueberry`
    },

    facets: [
      {
        group: `Planet`,
        value: `gazorpazorp`,
        label: `Gazorpazorp`,
        description: `Planets where events in this episode take place`
      },
      {
        group: `Guest character`,
        value: `gwendolyn`,
        label: `Gwendolyn`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Guest character`,
        value: `ma-sha`,
        label: `Ma-Sha`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Season`,
        value: `1`,
        label: `Season 1`
      },
      {
        group: `Show`,
        value: `rick-morty`,
        label: `Rick & Morty`
      }
    ]
  },
  {
    element: {
      title: `The wedding squanchers`,
      meow: `rasperry`,
      wowWow: `blueberry`
    },

    facets: [
      {
        group: `Planet`,
        value: `squanch`,
        label: `Squanch`,
        description: `Planets where events in this episode take place`
      },
      {
        group: `Guest character`,
        value: `birdperson`,
        label: `Birdperson`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Guest character`,
        value: `squanchy`,
        label: `Squanchy`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Season`,
        value: `2`,
        label: `Season 2`
      },
      {
        group: `Show`,
        value: `rick-morty`,
        label: `Rick & Morty`
      }
    ]
  },
  {
    element: {
      title: `The Rickshank redemption`,
      meow: `rasperry`,
      wowWow: `blueberry`
    },

    facets: [
      {
        group: `Guest character`,
        value: `birdperson`,
        label: `Birdperson`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Planet`,
        value: `buttworld`,
        label: `Buttworld`,
        description: `Planets where events in this episode take place`
      },
      {
        group: `Season`,
        value: `3`,
        label: `Season 3`
      },
      {
        group: `Show`,
        value: `rick-morty`,
        label: `Rick & Morty`
      }
    ]
  },
  {
    element: {
      title: `Ricksy business`,
      meow: `rasperry`,
      wowWow: `blueberry`
    },

    facets: [
      {
        group: `Guest character`,
        value: `squanchy`,
        label: `Squanchy`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Guest character`,
        value: `abradolf_lincler`,
        label: `Abradolf Lincler`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Season`,
        value: `1`,
        label: `Season 1`
      },
      {
        group: `Show`,
        value: `rick-morty`,
        label: `Rick & Morty`
      }
    ]
  },
  {
    element: {
      title: `Close Rick-counters of the Rick kind`,
      meow: `rasperry`,
      wowWow: `blueberry`
    },
    facets: [
      {
        group: `Guest character`,
        value: `ricktiminus_sancheziminius`,
        label: `Ricktiminus Sancheziminius`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Guest character`,
        value: `abradolf_lincler`,
        label: `Abradolf Lincler`,
        description: `Guest characters that tag along for the adventures in this episodes`
      },
      {
        group: `Planet`,
        value: `buttworld`,
        label: `Buttworld`,
        description: `Planets where events in this episode take place`
      },
      {
        group: `Season`,
        value: `1`,
        label: `Season 1`
      },
      {
        group: `Show`,
        value: `rick-morty`,
        label: `Rick & Morty`
      }
    ]
  }
]

export { getRandomInt, vindicators, episodes, ExperimentTableCard, ExperimentTableHeader }
