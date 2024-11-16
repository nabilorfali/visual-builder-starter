/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link } from '../../component-library'
import styles from './style.module.css'

const BiolageHeroBanner1 = (props) => {
  return (
    <Container
      className={` ${styles['biolage-hero-banner-1']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text
            text={props.data.HeroTitle}
            tag="h1"
            className={styles['text']}
          />
          <Text
            text={props.data.HeroDescription}
            tag="p"
            className={styles['text1']}
          />
          <Link
            href={props.data.HeroCta}
            target="_blank"
            rel="noreferrer noopener"
            text={props.data.HeroCta}
            className={styles['link']}
          />
        </Container>
      </Container>
    </Container>
  )
}

BiolageHeroBanner1.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    HeroTitle: 'Discover the Power of Nature with Biolage',
    HeroDescription:
      'Experience the perfect blend of science and nature for healthier, more beautiful hair. Our advanced formulas harness the power of natural ingredients to nourish and revitalize your locks.',
    HeroCTA: {
      href: '#',
      text: 'Shop Now',
    },
  },
}

BiolageHeroBanner1.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default BiolageHeroBanner1
