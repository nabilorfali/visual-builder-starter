/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text } from '../../component-library'
import styles from './style.module.css'

const Guvanch = (props) => {
  return (
    <Container
      className={` ${styles['guvanch']} ${styles[props.rootClassName]} `}
    >
      <Text text="Heading" tag="h1" />
    </Container>
  )
}

Guvanch.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Text: 'Lorem Ipsum',
  },
}

Guvanch.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default Guvanch
