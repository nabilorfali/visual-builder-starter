/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text } from '../../component-library'
import styles from './style.module.css'

const Compo = (props) => {
  return (
    <Container
      className={` ${styles['compo']} ${styles[props.rootClassName]} `}
    >
      <Text text={props.data.Title} tag="h1" />
    </Container>
  )
}

Compo.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Title: 'Lorem Ipsum',
  },
}

Compo.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default Compo
