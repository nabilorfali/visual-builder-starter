/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Image, Link } from '../../component-library'
import styles from './style.module.css'

const BiolageHeader = (props) => {
  return (
    <Container
      tag="header"
      className={` ${styles['biolage-header']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <Image
          src={props.data.Image}
          alt="Biolage Professional"
          className={styles['img']}
        />
      </Container>
      <Link href="fr/index.html" text="FR" className={styles['a']} />
    </Container>
  )
}

BiolageHeader.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Image: {
      src: 'https://www.biolage.ca/dist/img/logo.png',
      alt: '',
    },
  },
}

BiolageHeader.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default BiolageHeader
