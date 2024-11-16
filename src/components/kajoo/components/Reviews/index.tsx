/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText } from '../../component-library'
import styles from './style.module.css'

const Reviews = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['reviews']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <h2 className={styles['h-2']}>
          <Text text="what others say about " />
          <Text text="BIOLAGE" className={styles['span']} />
        </h2>
      </Container>
      <Container className={styles['div1']}>
        <Container className={styles['div2']}>
          <video autoplay muted playsinline loop className={styles['video']}>
            <source
              src="https://www.biolage.ca/dist/video/biolage_video_1080x1080.mp4"
              type="video/mp4"
              className={styles['source']}
            />
          </video>
        </Container>
        <Container className={styles['div3']}>
          <Container className={styles['div4']}>
            <RichText
              value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 20"&gt;&lt;path d="m11.125 0 2.435 6.877h7.88l-6.375 4.25 2.435 6.877-6.375-4.25-6.376 4.25 2.435-6.877-6.376-4.25H8.69L11.125 0ZM33.22 0l2.526 6.877h8.173l-6.612 4.25 2.525 6.877-6.611-4.25-6.612 4.25 2.525-6.877-6.612-4.25h8.173L33.221 0ZM77.412 0l2.526 6.877h8.172l-6.611 4.25 2.525 6.877-6.612-4.25-6.612 4.25 2.526-6.877-6.612-4.25h8.173L77.412 0ZM55.316 0l2.436 6.877h7.88l-6.375 4.25 2.435 6.877-6.376-4.25-6.375 4.25 2.435-6.877L45 6.877h7.881L55.316 0ZM99.508 0l2.435 6.877h7.881l-6.376 4.25 2.436 6.877-6.376-4.25-6.376 4.25 2.436-6.877-6.376-4.25h7.88L99.509 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;'
              className={styles['richtext']}
            />
            <Text
              tag="h3"
              text="“The scent is unmatched”"
              className={styles['h-3']}
            />
            <p className={styles['p']}>
              <Text text="My hair's picky but the Color Last line is amazing. My hair never gets weighed down and it helps the color last a longer time in between my hair appointments." />
              <br className={styles['br']} />
              <strong className={styles['strong']}>
                <Text text="- Customer from Amazon" />
              </strong>
            </p>
          </Container>
          <Container className={styles['div5']}>
            <RichText
              value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 20"&gt;&lt;path d="m11.125 0 2.435 6.877h7.88l-6.375 4.25 2.435 6.877-6.375-4.25-6.376 4.25 2.435-6.877-6.376-4.25H8.69L11.125 0ZM33.22 0l2.526 6.877h8.173l-6.612 4.25 2.525 6.877-6.611-4.25-6.612 4.25 2.525-6.877-6.612-4.25h8.173L33.221 0ZM77.412 0l2.526 6.877h8.172l-6.611 4.25 2.525 6.877-6.612-4.25-6.612 4.25 2.526-6.877-6.612-4.25h8.173L77.412 0ZM55.316 0l2.436 6.877h7.88l-6.375 4.25 2.435 6.877-6.376-4.25-6.375 4.25 2.435-6.877L45 6.877h7.881L55.316 0ZM99.508 0l2.435 6.877h7.881l-6.376 4.25 2.436 6.877-6.376-4.25-6.376 4.25 2.436-6.877-6.376-4.25h7.88L99.509 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;'
              className={styles['richtext1']}
            />
            <Text
              tag="h3"
              text="“All my clients love it”"
              className={styles['h-31']}
            />
            <p className={styles['p1']}>
              <Text text="I've been a hairstylist for 8 years and love Biolage. The smell is divine and there's something for every hair type, especially color-treated hair." />
              <br className={styles['br1']} />
              <strong className={styles['strong1']}>
                <Text text="- Hairstylist in Ontario" />
              </strong>
            </p>
          </Container>
          <Container className={styles['div6']}>
            <RichText
              value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 20"&gt;&lt;path d="m11.125 0 2.435 6.877h7.88l-6.375 4.25 2.435 6.877-6.375-4.25-6.376 4.25 2.435-6.877-6.376-4.25H8.69L11.125 0ZM33.22 0l2.526 6.877h8.173l-6.612 4.25 2.525 6.877-6.611-4.25-6.612 4.25 2.525-6.877-6.612-4.25h8.173L33.221 0ZM77.412 0l2.526 6.877h8.172l-6.611 4.25 2.525 6.877-6.612-4.25-6.612 4.25 2.526-6.877-6.612-4.25h8.173L77.412 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;path d="m100.249 0 2.525 6.877h8.173l-6.612 4.25 2.526 6.877-6.612-4.25-6.612 4.25 2.525-6.877-6.611-4.25h8.172L100.25 0Z" fill="url(#a)"&gt;&lt;/path&gt;&lt;path d="m55.316 0 2.436 6.877h7.88l-6.375 4.25 2.435 6.877-6.376-4.25-6.375 4.25 2.435-6.877L45 6.877h7.881L55.316 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;defs&gt;&lt;linearGradient id="a" x1="100" y1="9.5" x2="101" y2="9.5" gradientUnits="userSpaceOnUse"&gt;&lt;stop stop-color="#789D4A"&gt;&lt;/stop&gt;&lt;stop offset="1" stop-color="#959595"&gt;&lt;/stop&gt;&lt;/linearGradient&gt;&lt;/defs&gt;&lt;/svg&gt;'
              className={styles['richtext2']}
            />
            <Text
              tag="h3"
              text="“Get a personalized haircare routine”"
              className={styles['h-32']}
            />
            <p className={styles['p2']}>
              <Text text="Biolage allows you to customize your hair routine. I can't live without the Full Density line, reducing hair loss and fuller-feeling hair. I also use All-In-One Shampoo Scrub to exfoliate and clean in just one step." />
              <br className={styles['br2']} />
              <strong className={styles['strong2']}>
                <Text text="- Hairstylist in Alberta" />
              </strong>
            </p>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Reviews.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    ReviewsTitle: 'Lorem Ipsum',
  },
}

Reviews.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default Reviews
