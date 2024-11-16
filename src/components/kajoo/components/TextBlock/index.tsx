/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, RichText, Text } from '../../component-library'
import styles from './style.module.css'

const TextBlock = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['text-block']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <RichText value='&lt;h1 style="display: block; font-size: 60px; font-weight: bold; box-sizing: border-box; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: Gilroy, sans-serif; line-height: 1em; text-transform: uppercase; color: rgb(46, 56, 65); padding-top: 0px; padding-right: 0px; padding-bottom: 25px; padding-left: 0px; text-align: center" &gt;&lt;span style=""  &gt;naturally beautiful.&lt;/span&gt;&lt;br style="box-sizing: border-box" &gt;&lt;/br&gt;&lt;span style=""  &gt;naturally biolage.&lt;/span&gt;&lt;/h1&gt;' />
        <Text
          tag="p"
          text="at biolage we are committed to creating hair care that combines the best of science and nature."
          className={styles['p']}
        />
      </Container>
    </Container>
  )
}

TextBlock.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Title: 'Lorem Ipsum',
    Description: 'Lorem Ipsum',
  },
}

TextBlock.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default TextBlock
