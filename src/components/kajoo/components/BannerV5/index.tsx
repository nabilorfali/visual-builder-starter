/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Button, Image } from '../../component-library'
import styles from './style.module.css'

const BannerV5 = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['banner-v-1']}>
        <Container className={styles['container1']}>
          <Text
            text="Revolutionize Your Workflow with AI"
            tag="text"
            className={styles['text']}
          />
          <Text
            text="Our AI tools automate and optimize your business processes."
            tag="text"
            className={styles['text1']}
          />
          <Button text="Button" className={styles['submit-button']} />
        </Container>
      </Container>
      <Image
        src="https://app.kajoo.ai/icons/default-imag.svg"
        alt="default-kajoo-image"
        className={'image-default'}
      />
    </Container>
  )
}

BannerV5.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Heading: 'Revolutionize Your Workflow with AI',
    Subheading: 'Our AI tools automate and optimize your business processes.',
    Link: {
      href: '#',
      text: 'Get Started',
    },
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
  },
}

BannerV5.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default BannerV5
