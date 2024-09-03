/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link } from '../../component-library'
import styles from './style.module.css'

const AiBannerNew = (props) => {
  return (
    <Container
      className={` ${styles['ai-banner-new']} ${styles[props.rootClassName]} `}
    >
      <Container>
        <Container className={styles['container1']}>
          <Text text={props.data.Text} tag="text" className={styles['text']} />
          <Text text={props.data.Desc} tag="text" className={styles['text1']} />
          <Link
            href={props.data.Cta}
            target="_blank"
            rel="noreferrer noopener"
            text={props.data.Cta}
            className={` ${styles['link']} ${'link-outline-cta'} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AiBannerNew.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Text: 'Lorem Ipsum',
    Desc: 'Lorem Ipsum',
    CTA: {
      href: '#',
      text: 'Link',
    },
  },
}

AiBannerNew.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AiBannerNew
