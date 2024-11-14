/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text } from '../../component-library'
import styles from './style.module.css'

const HeroBanner = (props) => {
  return (
    <Container
      tag="header"
      id="hero-banner"
      className={` ${styles['hero-banner']} ${styles[props.rootClassName]} `}
    >
      <picture id="picture-aux" className={styles['picture']} />
      <Container className={styles['div']}>
        <Text tag="p" className={styles['p']} />
      </Container>
    </Container>
  )
}

HeroBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

HeroBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default HeroBanner
