/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link } from '../../component-library'
import styles from './style.module.css'

const TestBackgroundDifferentiatorPanel = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Background Panel"
      className={` ${styles['test-background-differentiator-panel']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <RichText value='&lt;div data-kajoo-element-type="rich-text"&gt;Get expert&amp;nbsp;tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.&lt;/div&gt;' />
              </Container>
              <Link
                aria-label="Watch Now"
                href="https://www.amica.ca/webinars"
                text="WATCH NOW"
                className={styles['a']}
              />
            </Container>
            <Container className={styles['div5']}>
              <Text text=" " />
            </Container>
          </Container>
        </Container>
        <Container className={styles['div6']} />
      </Container>
    </Container>
  )
}

TestBackgroundDifferentiatorPanel.defaultProps = {
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
    Title: 'Webinars for seniors',
  },
}

TestBackgroundDifferentiatorPanel.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default TestBackgroundDifferentiatorPanel
