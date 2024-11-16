/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container } from '../../component-library'
import styles from './style.module.css'

const HeroBanner = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['hero-banner']} ${styles[props.rootClassName]} `}
    />
  )
}

HeroBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
  },
}

HeroBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default HeroBanner
