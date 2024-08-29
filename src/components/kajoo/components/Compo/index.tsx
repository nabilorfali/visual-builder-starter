/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Image } from '../../component-library'
import styles from './style.module.css'

const Compo = (props) => {
  return (
    <Container
      className={` ${styles['compo']} ${styles[props.rootClassName]} `}
    >
      <Text text={props.data.Title} tag="h1" />
      <Image
        src={props.data.Image}
        alt="default-kajoo-image"
        className={'image-default'}
      />
    </Container>
  )
}

Compo.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Title: 'Lorem Ipsum',
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
  },
}

Compo.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default Compo
