/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link, Image } from '../../component-library'
import styles from './style.module.css'

const RightImageCard = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Panel"
      className={` ${styles['right-image-card']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <Text
              tag="p"
              text={props.data.Description}
              className={styles['p']}
            />
          </Container>
          <Link
            aria-label="Link"
            href={props.data.Link.url}
            text={props.data.Link.text}
            className={styles['a']}
          />
        </Container>
        <Container className={styles['div3']}>
          <Image
            src={props.data.Image}
            title="Occ_SenWoman760x546webp"
            className={styles['img']}
          />
        </Container>
      </Container>
    </Container>
  )
}

RightImageCard.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Title: 'You have questions, we have answers',
    Description:
      'Will I be in charge of my day? Can I eat what, and when, I want? Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should. Ask us. You’ll get the straightforward answers you deserve.',
    Link: {
      href: '#',
      text: 'Link',
    },
    Image: {
      src: 'https://app.kajoo.ai/icons/default-imag.svg',
      alt: '',
    },
  },
}

RightImageCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default RightImageCard
