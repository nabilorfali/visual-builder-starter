/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link, Image } from '../../component-library'
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
          <Text tag="h2" text={props.data.Text} className={styles['h-2']} />
          <RichText value={props.data.RichText} />
          <Link
            aria-label="discover personalized care"
            href="/amica-difference/best-in-class"
            text="DISCOVER PERSONALIZED CARE"
            className={styles['a']}
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
    Text: 'Personalizing your care, prioritizing your wellness',
    'Rich Text':
      '<div style="display: block; box-sizing: border-box; max-width: 440px; margin-top: auto; margin-right: auto; margin-bottom: 60px; margin-left: auto; line-height: 1.4" ><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px" ><span style=""  >Our professional wellness teams deliver considerate, respectful and personalized care tailored to your wishes and schedule. We learn your needs and routines to provide exceptional support based on your preferences in the privacy of your suite. And, if your needs or preferences change, so will our care. Amica offers </span><strong style="font-weight: bolder; box-sizing: border-box" ><a style="color: rgb(88, 122, 141); text-decoration-line: none; cursor: pointer; box-sizing: border-box" href="/find-a-residence/independent-living" >Independent Living</a></strong><span style=""  >, </span><strong style="font-weight: bolder; box-sizing: border-box" ><a style="color: rgb(88, 122, 141); text-decoration-line: none; cursor: pointer; box-sizing: border-box" href="/find-a-residence/assisted-living" >Assisted Living</a></strong><span style=""  >, </span><strong style="font-weight: bolder; box-sizing: border-box" ><a style="color: rgb(88, 122, 141); text-decoration-line: none; cursor: pointer; box-sizing: border-box" href="/find-a-residence/memory-care" >Memory Care</a></strong><span style=""  >, </span><strong style="font-weight: bolder; box-sizing: border-box" ><a style="color: rgb(88, 122, 141); text-decoration-line: none; cursor: pointer; box-sizing: border-box" href="/conversations/supportive-respite-stays-help-seniors-recover" >Respite Care</a><span style=""  > </span></strong><span style=""  >and/or </span><strong style="font-weight: bolder; box-sizing: border-box" ><span style=""  >Short Stays</span></strong><span style=""  >, depending on the residence.</span></p></div>',
    Discover: {
      href: '#',
      text: 'DISCOVER PERSONALIZED CARE',
    },
  },
}

LeftImageCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default LeftImageCard
