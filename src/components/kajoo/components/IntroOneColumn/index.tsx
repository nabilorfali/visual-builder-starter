/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link } from '../../component-library'
import styles from './style.module.css'

const IntroOneColumn = (props) => {
  return (
    <Container
      className={` ${styles['intro-one-column']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container aria-label="Content" className={styles['div2']}>
            <Text
              tag="h1"
              text="At Amica, every day is yours to spend exactly as you wish"
              className={styles['h-1']}
            />
            <Container className={styles['div3']}>
              <Text tag="p" className={styles['p']} />
              <RichText value='&lt;div data-kajoo-element-type="rich-text"&gt;Amica offers an exceptional senior living experience unlike any other. Every residence offers elegant and purposeful designs, premium amenities, unparalleled care that evolves as you do and a lifestyle that leaves you in full control. At Amica, you’ll never have to move again. And you’ll never want to.&lt;/div&gt;' />
              <Container className={styles['div4']}>
                <Link
                  aria-label="Book a Tour"
                  href="https://www.amica.ca/book-a-visit"
                  text="BOOK A TOUR"
                  className={styles['a']}
                />
              </Container>
              <Text tag="p" className={styles['p1']} />
              <Container className={styles['div5']} />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

IntroOneColumn.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    'Address 1': '',
    'Address 2': '',
    'Label 1': '',
    'Label 2': '',
    Copy: '',
    Title: 'Discover life at Amica',
  },
}

IntroOneColumn.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default IntroOneColumn
