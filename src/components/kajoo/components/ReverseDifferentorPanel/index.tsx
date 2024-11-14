/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link, Image } from '../../component-library'
import styles from './style.module.css'

const ReverseDifferentorPanel = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Reverse Panel"
      className={` ${styles['reverse-differentor-panel']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <Container
                  data-kajoo-element-type="richtext"
                  className={styles['div5']}
                >
                  <Text text="Care that is considerate, respectful and personalized to your wishes and schedule — that’s what you can expect from our highly trained professional wellness teams. We get to know your needs and routines to provide exceptional, experienced support based on your preferences in the privacy of your suite. And if your needs or preferences change, so will our care." />
                </Container>
              </Container>
              <Link
                aria-label="DISCOVER PERSONALIZED CARE"
                href="https://www.amica.ca/amica-difference/best-in-class"
                text="DISCOVER PERSONALIZED CARE"
                className={styles['a']}
              />
            </Container>
            <Container className={styles['div6']}>
              <Text text=" " />
            </Container>
          </Container>
        </Container>
        <Container className={styles['div7']}>
          <Image
            src="https://prod-xm-102cm.kajoo.ai/-/media/Amica/Amica-Difference/Differentiator_panel_desktop-Amica_ButtonsDressing_0249.ashx?h=507&amp;iar=0&amp;w=760&amp;hash=A938613B1420A13B6561B3BE101DBB42"
            width="760"
            height="507"
            className={styles['img']}
          />
        </Container>
      </Container>
    </Container>
  )
}

ReverseDifferentorPanel.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Description:
      '<div class="content" style="color: #656567; padding: 20px; text-align: center;">\n<div class="description" style="margin: auto auto 60px; line-height: 1.4;">\n<div data-kajoo-element-type="richtext">Care that is considerate, respectful and personalized to your wishes and schedule &mdash; that&rsquo;s what you can expect from our highly trained professional wellness teams. We get to know your needs and routines to provide exceptional, experienced support based on your preferences in the privacy of your suite. And if your needs or preferences change, so will our care.</div>\n</div>\n<a class="call2action btn btn-transparent " aria-label="DISCOVER PERSONALIZED CARE" href="https://www.amica.ca/amica-difference/best-in-class" style="color: #587a8d; background: 0px 0px; padding: 0.75rem; border: 1px solid #587a8d; line-height: 1.5;">DISCOVER PERSONALIZED CARE</a></div>\n<div>&nbsp;</div>',
    Title: 'Personalizing your care, prioritizing your wellness',
  },
}

ReverseDifferentorPanel.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default ReverseDifferentorPanel
