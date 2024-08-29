/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link } from '../../component-library'
import styles from './style.module.css'

const NoImageCard = (props) => {
  return (
    <Container
      className={` ${styles['no-image-card']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container
            role="main"
            aria-label="Content"
            className={styles['div2']}
          >
            <Text
              tag="h1"
              text={props.data.Heading}
              className={styles['h-1']}
            />
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <RichText value="&lt;p style=&quot;display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px&quot;  &gt;We could tell you what makes Amica different than other senior-living residences, but we'd rather show you. Visit our exclusive residences, and see how life can be exactly how you want. Imagine: professional, personalized care that's always there if you need it.&lt;/p&gt;" />
                <Text tag="p" text=" " className={styles['p']} />
              </Container>
              <Container className={styles['div5']}>
                <Link
                  aria-label="Book a tour campaign"
                  href={props.data.Link.url}
                  target="|Custom"
                  text={props.data.Link.text}
                  className={styles['a']}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NoImageCard.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Heading: 'Experience the Amica difference',
    Link: {
      href: '#',
      text: 'Book a Tour',
    },
    Description:
      "We could tell you what makes Amica different than other senior-living residences, but we'd rather show you. Visit our exclusive residences, and see how life can be exactly how you want. Imagine: professional, personalized care that's always there if you need it.",
  },
}

NoImageCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default NoImageCard