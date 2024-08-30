/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Image, Text } from '../../component-library'
import styles from './style.module.css'

const HeroBanner = (props) => {
  return (
    <Container
      tag="header"
      id="hero-banner"
      className={` ${styles['hero-banner']} ${styles[props.rootClassName]} `}
    >
      <picture id="picture-aux" className={styles['picture']}>
        <source
          media="(min-width: 1200)"
          srcSet="https://stage-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_with_background_desktop-ASL-NEW-HomepageHeroBanner-OptionB-Desktop-230413.ashx"
          className={styles['source']}
        />
        <Image
          src={props.data.Image}
          aria-hidden="true"
          alt="Hero Banner"
          className={styles['img']}
        />
      </picture>
      <Container className={styles['div']}>
        <Text tag="p" text={props.data.HatTitle} className={styles['p']} />
        <Text tag="h1" text={props.data.Headline} className={styles['h-1']} />
        <Text tag="h2" text={props.data.Subtitle} className={styles['h-2']} />
      </Container>
    </Container>
  )
}

HeroBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    FullImageLink: '',
    'Hide on Mobile': false,
    ImageLink: '',
    'Scroll Down Text': 'Scroll down ',
    'Image Mobile': {
      src: '',
      alt: '',
    },
    'Image Tablet': {
      src: '',
      alt: '',
    },
    'Hat Title': 'Hat Title',
    Headline: 'Headline',
    Image: {
      src: 'https://stage-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_with_background_desktop-ASL-NEW-HomepageHeroBanner-OptionB-Desktop-230413.ashx',
      alt: '',
    },
    Subtitle: 'Subtitle',
  },
}

HeroBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default HeroBanner
