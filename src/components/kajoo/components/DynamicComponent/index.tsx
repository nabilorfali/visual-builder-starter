/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text } from '../../component-library'
import styles from './style.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Text text={props.data.Text} tag="h1" />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Text: 'Lorem Ipsum',
  },
}

DynamicComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default DynamicComponent
