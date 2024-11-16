/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container } from '../../component-library'
import styles from './style.module.css'

const BiolageHeroBanner = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['biolage-hero-banner']} ${
        styles[props.rootClassName]
      } `}
    />
  )
}

BiolageHeroBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
  },
}

BiolageHeroBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default BiolageHeroBanner
