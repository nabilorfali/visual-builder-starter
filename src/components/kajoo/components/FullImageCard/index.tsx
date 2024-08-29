/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link } from '../../component-library'
import styles from './style.module.css'

const FullImageCard = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Panel"
      bgImage={props.data.BgImage}
      className={` ${styles['full-image-card']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <RichText value={props.data.Description} />
          </Container>
          <Link
            aria-label="Watch now"
            href={props.data.Link.url}
            text={props.data.Link.text}
            className={styles['a']}
          />
        </Container>
        <Container className={styles['div3']} />
      </Container>
    </Container>
  )
}

FullImageCard.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Title: 'Webinars for seniors',
    Link: {
      href: '#',
      text: 'WATCH NOW',
    },
    'Bg Image': {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
    Description:
      'Get expert tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.',
  },
}

FullImageCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default FullImageCard
