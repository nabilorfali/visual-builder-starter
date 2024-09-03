/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link } from '../../component-library'
import styles from './style.module.css'

const AiSaaSHeroBanner = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text text={props.data.Text} tag="text" className={styles['text']} />
          <Text
            text={props.data.Text1}
            tag="text"
            className={styles['text1']}
          />
          <Link
            href={props.data.Link}
            target="_blank"
            rel="noreferrer noopener"
            text={props.data.Link}
            className={styles['link']}
          />
        </Container>
      </Container>
    </Container>
  )
}

AiSaaSHeroBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Text: 'Lorem Ipsum',
    Text1: 'Lorem Ipsum',
    Link: {
      href: '#',
      text: 'Link',
    },
  },
}

AiSaaSHeroBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AiSaaSHeroBanner
