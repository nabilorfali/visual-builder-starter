/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Link, Image, Text } from '../../component-library'
import styles from './style.module.css'

const AmicaMainNavigation = (props) => {
  return (
    <Container
      tag="nav"
      aria-label="Main Navigation"
      className={` ${styles['amica-main-navigation']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Link href="/en/" className={styles['a']}>
          <Image
            src="https://stage-xm-102cm.kajoo.ai/-/media/Amica/Logos/webimage-9B1B98BC-10CA-4E19-B459EED98FAAE3FA.ashx?h=402&amp;iar=0&amp;w=800&amp;hash=5B3678B2EF15F2345ED7327019ACB4BB"
            width="800"
            height="402"
            role="img"
            className={styles['img']}
          />
        </Link>
        <Container className={styles['div1']}>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={styles['button']}
          >
            <span className={styles['span']}>
              <Text className={styles['span1']} />
            </span>
          </button>
          <ul id="mainMenu" role="menu" className={styles['ul']}>
            <li className={styles['li']} />
          </ul>
        </Container>
      </Container>
      <input
        id="IsExperienceEditor"
        type="hidden"
        value="notexpeditor"
        className={styles['input']}
      />
    </Container>
  )
}

AmicaMainNavigation.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    FullImageLink: '',
    'Hide on Mobile': false,
    ImageLink: '',
    'Scroll Down Text': 'Scroll down',
    'Image Mobile': {
      src: '',
      alt: '',
    },
    'Image Tablet': {
      src: '',
      alt: '',
    },
    'Hat Title': 'Hat Title',
    Headline: 'Headline',
    Image: {
      src: '',
      alt: '',
    },
    Subtitle: 'Subtitle',
  },
}

AmicaMainNavigation.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AmicaMainNavigation
