/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Image, Text } from '../../component-library'
import styles from './style.module.css'

const AboutUs = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['about-us']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Image
            src="https://www.biolage.ca/dist/img/about_us_logo.jpg"
            alt="About Biolage"
            className={styles['img']}
          />
        </Container>
        <Container className={styles['div2']}>
          <h2 className={styles['h-2']}>
            <Text text="about " />
            <Text text="us" className={styles['span']} />
          </h2>
          <p className={styles['p']}>
            <Text text="BIOLAGE" className={styles['span1']} />
            <Text text=" is recognized worldwide as a leader in the professional haircare field. This is because " />
            <Text text="BIOLAGE" className={styles['span2']} />
            <Text text=" is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals." />
          </p>
        </Container>
      </Container>
    </Container>
  )
}

AboutUs.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

AboutUs.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AboutUs
