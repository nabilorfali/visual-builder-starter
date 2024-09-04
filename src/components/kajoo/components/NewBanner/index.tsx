/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text } from '../../component-library'
import styles from './style.module.css'

const NewBanner = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['about']}>
        <Container className={styles['frame-14206']}>
          <Container className={styles['frame-14182']}>
            <Container className={styles['frame-14181']}>
              <Text text={props.data.Ti} className={styles['text']} />
              <Text text={props.data.Text} className={styles['text1']} />
            </Container>
          </Container>
          <Container className={styles['button']}>
            <Text text="Discover our vision" className={styles['text2']} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Ti: 'Lorem Ipsum',
    Text: 'Lorem Ipsum',
  },
}

NewBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default NewBanner
