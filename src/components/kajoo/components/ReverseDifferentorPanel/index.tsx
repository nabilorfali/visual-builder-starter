/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link, Image } from '../../component-library'
import styles from './style.module.css'

const ReverseDifferentorPanel = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Reverse Panel"
      className={` ${styles['reverse-differentor-panel']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <Container
                  data-kajoo-element-type="richtext"
                  className={styles['div5']}
                >
                  <Text text="Care that is considerate, respectful and personalized to your wishes and schedule — that’s what you can expect from our highly trained professional wellness teams. We get to know your needs and routines to provide exceptional, experienced support based on your preferences in the privacy of your suite. And if your needs or preferences change, so will our care." />
                </Container>
              </Container>
              <Link
                aria-label="DISCOVER PERSONALIZED CARE"
                href="https://www.amica.ca/amica-difference/best-in-class"
                text="DISCOVER PERSONALIZED CARE"
                className={styles['a']}
              />
            </Container>
            <Container className={styles['div6']}>
              <Text text=" " />
            </Container>
          </Container>
        </Container>
        <Container className={styles['div7']}>
          <Image
            src="https://stage-xm-102cm.kajoo.ai/-/media/Amica/Amica-Difference/Differentiator_panel_desktop-Amica_ButtonsDressing_0249.ashx?h=507&amp;iar=0&amp;w=760&amp;hash=A938613B1420A13B6561B3BE101DBB42"
            width="760"
            height="507"
            className={styles['img']}
          />
        </Container>
      </Container>
    </Container>
  )
}

ReverseDifferentorPanel.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    FullImageLink: '',
    Image: {
      src: '',
      alt: '',
    },
    'Anchor ID': '',
    'Background Image': {
      src: '',
      alt: '',
    },
    Description: '',
    ImageLink: '',
    'Mobile Background Image': {
      src: '',
      alt: '',
    },
    'Show Image In Mobile Mode': false,
    Title: 'Personalizing your care, prioritizing your wellness',
  },
}

ReverseDifferentorPanel.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default ReverseDifferentorPanel
