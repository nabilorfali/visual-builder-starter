/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, RichText, Image } from '../../component-library'
import styles from './style.module.css'

const SocialProof = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['social-proof']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <RichText
          value='&lt;h2 style="display: block; font-size: 2em; font-weight: bold; box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: Gilroy, sans-serif; line-height: 1.2em; padding-top: 0px; padding-right: 0px; padding-bottom: 70px; padding-left: 0px; text-align: center" &gt;&lt;span style=""  &gt;you might have &lt;/span&gt;&lt;span style="box-sizing: border-box" &gt;&lt;span style="box-sizing: border-box; color: rgb(120, 157, 74)"  &gt;seen us&lt;/span&gt;&lt;span style=""  &gt; on&lt;/span&gt;&lt;/span&gt;&lt;/h2&gt;'
          className={styles['rich-text']}
        />
        <Container className={styles['div1']}>
          <Container className={styles['div2']}>
            <Image
              src="https://www.biolage.ca/dist/img/logo_elle_magazine.png"
              alt="Elle Canada"
              className={styles['img']}
            />
          </Container>
          <Container className={styles['div3']}>
            <Image
              src="https://www.biolage.ca/dist/img/logo_chatelaine_magazine.png"
              alt="Chatelaine"
              className={styles['img1']}
            />
          </Container>
          <Container className={styles['div4']}>
            <Image
              src="https://www.biolage.ca/dist/img/logo_salon_magazine.png"
              alt="Salon"
              className={styles['img2']}
            />
          </Container>
          <Container className={styles['div5']}>
            <Image
              src="https://www.biolage.ca/dist/img/logo_clin_oeil_magazine.png"
              alt="Clin d'oeil"
              className={styles['img3']}
            />
          </Container>
          <Container className={styles['div6']}>
            <Image
              src="https://www.biolage.ca/dist/img/logo_canadian_living_magazine.png"
              alt="Canadian_Living"
              className={styles['img4']}
            />
          </Container>
          <Container className={styles['div7']}>
            <Image
              src="https://www.biolage.ca/dist/img/logo_narcity_magazine.png"
              alt="Narcity"
              className={styles['img5']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

SocialProof.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

SocialProof.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default SocialProof
