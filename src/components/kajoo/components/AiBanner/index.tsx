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
        <Text text={props.data.Heading} tag="text" className={styles['text']} />
        <Text
          text={props.data.Subheading}
          tag="text"
          className={styles['text1']}
        />
        <Link
          href={props.data.Link.url}
          target="_blank"
          rel="noreferrer noopener"
          text={props.data.Link.text}
          className={` ${styles['link']} ${'link-solid-cta'} `}
        />
      </Container>
    </Container>
  )
}

AiBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Heading: 'Revolutionize Your Workflow with AI',
    Subheading: 'Our AI tools automate and optimize your business processes.',
    Link: {
      href: '#',
      text: 'Get Started',
    },
  },
}

AiBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AiBanner
