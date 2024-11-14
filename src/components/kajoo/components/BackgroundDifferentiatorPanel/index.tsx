/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link } from '../../component-library'
import styles from './style.module.css'

const BackgroundDifferentiatorPanel = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Background Panel"
      className={` ${styles['background-differentiator-panel']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <RichText value='&lt;div data-kajoo-element-type="rich-text"&gt;Get expert&amp;nbsp;tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.&lt;/div&gt;' />
              </Container>
              <Link
                aria-label="Watch Now"
                href="https://www.amica.ca/webinars"
                text="WATCH NOW"
                className={styles['a']}
              />
            </Container>
            <Container className={styles['div5']}>
              <Text text=" " />
            </Container>
          </Container>
        </Container>
        <Container className={styles['div6']} />
      </Container>
    </Container>
  )
}

BackgroundDifferentiatorPanel.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Description:
      '<div class="content" style="color: #656567; padding: 20px; text-align: center;">\n<div class="description" style="margin: auto auto 60px; line-height: 1.4;">\n<div data-kajoo-element-type="rich-text">Get expert&nbsp;tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.</div>\n</div>\n<a class="call2action btn btn-transparent " aria-label="Watch Now" href="https://www.amica.ca/webinars" style="color: #587a8d; background: 0px 0px; padding: 0.75rem; border: 1px solid #587a8d; line-height: 1.5;">WATCH NOW</a></div>\n<div>&nbsp;</div>',
    Title: 'Webinars for seniors',
  },
}

BackgroundDifferentiatorPanel.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default BackgroundDifferentiatorPanel
