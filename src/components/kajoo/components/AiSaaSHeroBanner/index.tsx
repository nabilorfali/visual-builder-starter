/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text } from '../../component-library'
import styles from './style.module.css'

const AiSaaSHeroBanner = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container tag="h1" className={styles['container1']}>
          <Text text="Revolutionize Your Workflow with AI" tag="text" />
        </Container>
        <Container tag="p" className={styles['container2']}>
          <Text
            text="Our AI tools automate and optimize your business processes."
            tag="text"
          />
        </Container>
        <Container tag="button" className={styles['container3']}>
          <Text text="Get Started" tag="text" />
        </Container>
      </Container>
    </Container>
  )
}

AiSaaSHeroBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

AiSaaSHeroBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AiSaaSHeroBanner
