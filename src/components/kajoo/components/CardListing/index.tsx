/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, RichText, Image, Text } from '../../component-library'
import styles from './style.module.css'

const CardListing = (props) => {
  return (
    <Container
      tag="section"
      id="promise"
      className={` ${styles['card-listing']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <RichText value='&lt;h2 style="display: block; font-size: 2em; font-weight: bold; box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: Gilroy, sans-serif; line-height: 1.2em; padding-top: 0px; padding-right: 0px; padding-bottom: 40px; padding-left: 0px; text-align: center" &gt;&lt;span style="box-sizing: border-box; color: rgb(120, 157, 74)"  &gt;sustainability&lt;/span&gt;&lt;span style=""  &gt; is an &lt;/span&gt;&lt;span style="box-sizing: border-box; color: rgb(120, 157, 74)"  &gt;everyday&lt;/span&gt;&lt;span style=""  &gt; promise&lt;/span&gt;&lt;/h2&gt;' />
        <Container className={styles['div1']}>
          <Container className={styles['div2']}>
            <Image
              src="https://www.biolage.ca/dist/img/green_icon_vegan_formula.png"
              alt="vegan formula"
              className={styles['img']}
            />
            <Text tag="h5" text="VEGAN FORMULA" className={styles['h-5']} />
            <Text
              tag="p"
              text="All our formulas are now 100% vegan."
              className={styles['p']}
            />
          </Container>
          <Container className={styles['div3']}>
            <Image
              src="https://www.biolage.ca/dist/img/green_icon_cruelty_free.png"
              alt="cruelty free"
              className={styles['img1']}
            />
            <Text tag="h5" text="CRUELTY FREE" className={styles['h-51']} />
            <Text
              tag="p"
              text="Approved as cruelty-free under the Leaping Bunny programme."
              className={styles['p1']}
            />
          </Container>
          <Container className={styles['div4']}>
            <Image
              src="https://www.biolage.ca/dist/img/green_icon_plastic_pledge.png"
              alt="plastic pledge"
              className={styles['img2']}
            />
            <Text tag="h5" text="PLASTIC PLEDGE" className={styles['h-52']} />
            <Text
              tag="p"
              text="Our bottles are now made with 100% recycled plastic."
              className={styles['p2']}
            />
          </Container>
          <Container className={styles['div5']}>
            <Image
              src="https://www.biolage.ca/dist/img/green_icon_the_ingredients.png"
              alt="ingredients"
              className={styles['img3']}
            />
            <Text tag="h5" text="THE INGREDIENTS" className={styles['h-53']} />
            <Text
              tag="p"
              text="Natural and chosen to rival the most potent synthetic ones."
              className={styles['p3']}
            />
          </Container>
          <Container className={styles['div6']}>
            <Image
              src="https://www.biolage.ca/dist/img/green_icon_manufacturing.png"
              alt="manufacturing"
              className={styles['img4']}
            />
            <Text tag="h5" text="MANUFACTURING" className={styles['h-54']} />
            <Text
              tag="p"
              text="100% carbon-neutral primary manufacturing facility sends zero waste to landfill."
              className={styles['p4']}
            />
          </Container>
          <Container className={styles['div7']}>
            <Image
              src="https://www.biolage.ca/dist/img/green_icon_formula_standards.png"
              alt="formula standards"
              className={styles['img5']}
            />
            <Text
              tag="h5"
              text="FORMULA STANDARDS"
              className={styles['h-55']}
            />
            <Text
              tag="p"
              text="Minimum of 85% biodegradable*, paraben-free**."
              className={styles['p5']}
            />
            <small className={styles['small']}>
              <Text text="*All shampoos,**All shampoos and conditioners" />
            </small>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

CardListing.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Cardlistingtitle: 'Lorem Ipsum',
  },
}

CardListing.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default CardListing
