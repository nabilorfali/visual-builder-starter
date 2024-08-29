/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link, Image } from '../../component-library'
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
          <Text
            tag="h2"
            text="You have questions, we have answers"
            className={styles['h-2']}
          />
          <RichText value={props.data.Description} />
          <Link
            aria-label="Link"
            href={props.data.SeeMore.url}
            text={props.data.SeeMore.text}
            className={styles['a']}
          />
        </Container>
        <Container className={styles['div2']}>
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
      '<div style="display: block; box-sizing: border-box; max-width: 440px; margin-top: auto; margin-right: auto; margin-bottom: 60px; margin-left: auto; line-height: 1.4"><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px">Will I be in charge of my day? Can I eat what, and when, I want? Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should. Ask us. You’ll get the straightforward answers you deserve.</p></div>',
    'See More': {
      href: '#',
      text: 'SEE MORE',
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
