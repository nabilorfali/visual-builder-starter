/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import {
  Container,
  Text,
  RichText,
  Button,
  Image,
} from '../../component-library'
import styles from './style.module.css'

const LeftImageCard = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Panel"
      className={` ${styles['left-image-card']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Heading} className={styles['h-2']} />
          <RichText
            value={props.data.Description}
            className={styles['rich-text']}
          />
          <Button
            text={props.data.Discover.text}
            className={styles['submit-button']}
          />
        </Container>
        <Container className={styles['div2']}>
          <Image
            alt="ASL-WebsitePanels-Desktop-220709"
            src="https://brand.amica.ca/m/855d76c2a7f346f/webimage-ASL-WebsitePanels-Desktop-220709.jpg"
            title="ASL-WebsitePanels-Desktop-220709"
            className={styles['img']}
          />
        </Container>
      </Container>
    </Container>
  )
}

LeftImageCard.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Heading: 'Personalizing your care, prioritizing your wellness',
    Description:
      '<p>Our professional wellness teams deliver considerate, respectful and personalized care tailored to your wishes and schedule. We learn your needs and routines to provide exceptional support based on your preferences in the privacy of your suite. And, if your needs or preferences change, so will our care. Amica offers <strong><a href="/find-a-residence/independent-living">Independent Living</a></strong>, <strong><a href="/find-a-residence/assisted-living">Assisted Living</a></strong>, <strong><a href="/find-a-residence/memory-care">Memory Care</a></strong>,&nbsp;<strong><a href="/conversations/supportive-respite-stays-help-seniors-recover">Respite Care</a>&nbsp;</strong>and/or <strong>Short Stays</strong>, depending on the residence.</p>',
    Discover: {
      href: '#',
      text: 'DISCOVER PERSONALIZED CARE',
    },
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
  },
}

LeftImageCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default LeftImageCard
