/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link, Button, Image } from '../../component-library'
import styles from './style.module.css'

const NewFigmaComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} `}>
      <Container className={styles['careers']}>
        <Container className={styles['frame-14190']}>
          <Container className={styles['frame-14189']}>
            <Text text={props.data.Text} className={styles['text']} />
            <Container className={styles['frame-14192']}>
              <Text text={props.data.Text1} className={styles['text1']} />
              <Container className={styles['frame-14191']}>
                <Link
                  href={props.data.Link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  text={props.data.Link.text}
                  className={styles['link']}
                />
                <Button
                  text={props.data.Link1.text}
                  className={styles['submit-button']}
                />
              </Container>
            </Container>
          </Container>
          <Container className={styles['maskgroup']}>
            <Image
              src={props.data.Image}
              className={styles['peel-village-outdoor-patio-1']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewFigmaComponent.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Text: 'Work with us',
    Text1:
      'At Amica, we work hard to enrich the lives of others and grow as a company. We believe in teamwork, compassion, and always learning and improving.',
    Link: {
      href: '#',
      text: 'Explore Jobs',
    },
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
    Link1: {
      href: '#',
      text: 'Volunteer',
    },
  },
}

NewFigmaComponent.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default NewFigmaComponent
