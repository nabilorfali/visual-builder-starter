/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link, Image } from '../../component-library'
import styles from './style.module.css'

const DifferentorPanel = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Panel"
      className={` ${styles['differentor-panel']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Text tag="h2" text={props.data.Title} className={styles['h-2']} />
          <Container className={styles['div2']}>
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <RichText value='&lt;div data-kajoo-element-type="rich-text"&gt;\n&lt;p style="margin-right: 0px; margin-bottom: 0.8em; margin-left: 0px; line-height: 1.8;"&gt;Will I be in charge of my day? Can I eat what, and when, I want? &amp;nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should be. Ask us. You’ll get the straightforward answers you’re looking for.&lt;/p&gt;\n&lt;p style="margin: 0px 0px 0.8em; line-height: 1.8;"&gt;You have questions. Here are others to consider.&lt;/p&gt;\n&lt;/div&gt;' />
              </Container>
              <Link
                aria-label="Book a Tour"
                href="https://www.amica.ca/book-a-visit"
                text="BOOK A TOUR"
                className={styles['a']}
              />
            </Container>
            <Container className={styles['div5']}>
              <Text text=" " />
            </Container>
          </Container>
        </Container>
        <Container className={styles['div6']}>
          <Image
            src="https://prod-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_desktop-Occ_SenWoman760x546.ashx?h=546&amp;iar=0&amp;w=760&amp;hash=D261DB2400CE3EB79E78982045D6500B"
            width="760"
            height="546"
            className={styles['img']}
          />
        </Container>
      </Container>
    </Container>
  )
}

DifferentorPanel.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Description:
      '<div class="content" style="color: #656567; background-color: #ffffff; padding: 20px; text-align: center;">\n<div class="description" style="margin: auto auto 60px; line-height: 1.4;">\n<div data-kajoo-element-type="rich-text">\n<p style="margin-right: 0px; margin-bottom: 0.8em; margin-left: 0px; line-height: 1.8;">Will I be in charge of my day? Can I eat what, and when, I want? &nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you&rsquo;re not asking questions like these, maybe you should be. Ask us. You&rsquo;ll get the straightforward answers you&rsquo;re looking for.</p>\n<p style="margin: 0px 0px 0.8em; line-height: 1.8;">You have questions. Here are others to consider.</p>\n</div>\n</div>\n<a class="call2action btn cta-default " aria-label="Book a Tour" href="https://www.amica.ca/book-a-visit" style="color: #f8f9fa; background: #587a8d; padding: 0.75rem; border: 1px solid #587a8d; line-height: 1.5;">BOOK A TOUR</a></div>\n<div>&nbsp;</div>',
    Title: 'It’s time for some straight answers.',
  },
}

DifferentorPanel.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default DifferentorPanel
