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
                <RichText value={props.data.Description} />
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
            src={props.data.Image}
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
    FullImageLink: '',
    Image: {
      src: 'https://stage-xm-102cm.kajoo.ai/-/media/Amica/Differentiator_panel_desktop-Occ_SenWoman760x546.ashx?h=546&iar=0&w=760&hash=D261DB2400CE3EB79E78982045D6500B',
      alt: '',
    },
    'Anchor ID': '',
    'Background Image': {
      src: '',
      alt: '',
    },
    Description:
      '<div data-kajoo-element-type="rich-text">\n<p style="margin-right: 0px; margin-bottom: 0.8em; margin-left: 0px; line-height: 1.8;">Will I be in charge of my day? Can I eat what, and when, I want? &nbsp;Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should be. Ask us. You’ll get the straightforward answers you’re looking for.</p>\n<p style="margin: 0px 0px 0.8em; line-height: 1.8;">You have questions. Here are others to consider.</p>\n</div>',
    ImageLink: '',
    'Mobile Background Image': {
      src: '',
      alt: '',
    },
    'Show Image In Mobile Mode': false,
    Title: 'It’s time for some straight answers.',
  },
}

DifferentorPanel.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default DifferentorPanel