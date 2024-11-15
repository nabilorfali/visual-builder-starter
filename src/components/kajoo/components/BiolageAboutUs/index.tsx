/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Image, RichText } from '../../component-library'
import styles from './style.module.css'

const BiolageAboutUs = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['biolage-about-us']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Image
            src={props.data.Image}
            alt="About Biolage"
            className={styles['img']}
          />
        </Container>
        <Container className={styles['div2']}>
          <RichText value={props.data.Title} />
          <RichText value={props.data.Descripton} />
        </Container>
      </Container>
    </Container>
  )
}

BiolageAboutUs.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Image: {
      src: 'https://www.biolage.ca/dist/img/about_us_logo.jpg',
      alt: '',
    },
    Title:
      '<h2 style="display: block; font-size: 2em; font-weight: bold; box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: Gilroy, sans-serif; line-height: 1.2em; padding-top: 0px; padding-right: 0px; padding-bottom: 15px; padding-left: 0px" ><span style=""  >about </span><span style="box-sizing: border-box; color: rgb(120, 157, 74); font-family: Gilroy, sans-serif; font-weight: bold"  >us</span></h2>',
    Descripton:
      '<p style="display: block; box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; line-height: 1.4em; font-size: 1em; font-family: Gilroy, sans-serif; font-weight: 400; font-style: normal" ><span style="box-sizing: border-box; color: rgb(120, 157, 74); font-family: Gilroy, sans-serif; font-weight: bold"  >BIOLAGE</span><span style="width: 604px; height: 17px"  > is recognized worldwide as a leader in the professional haircare field. This is because </span><span style="box-sizing: border-box; color: rgb(120, 157, 74); font-family: Gilroy, sans-serif; font-weight: bold"  >BIOLAGE</span><span style=""  > is constantly improving — taking haircare to new levels by offering high-performance, professional-quality products powered by botanicals.</span></p>',
  },
}

BiolageAboutUs.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default BiolageAboutUs
