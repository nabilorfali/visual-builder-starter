/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link } from '../../component-library'
import styles from './style.module.css'

const AiBanner = (props) => {
  return (
    <Container
      className={` ${styles['ai-banner']} ${styles[props.rootClassName]} `}
    >
      <Container>
        <Container className={styles['container1']}>
          <Text text={props.data.Text} tag="text" className={styles['text']} />
          <Text text={props.data.Desc} tag="text" className={styles['text1']} />
          <Link
            href={props.data.Cta.url}
            target="_blank"
            rel="noreferrer noopener"
            text={props.data.Cta.text}
            className={` ${styles['link']} ${'link-outline-cta'} `}
          />
        </Container>
      </Container>
    </Container>
  )
}

AiBanner.defaultProps = {
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

AiBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AiBanner
