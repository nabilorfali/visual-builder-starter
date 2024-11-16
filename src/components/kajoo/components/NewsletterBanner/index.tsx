/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, RichText, Text, Link, Image } from '../../component-library'
import styles from './style.module.css'

const NewsletterBanner = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['newsletter-banner']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <RichText value='&lt;h2 style="display: block; font-size: 2em; font-weight: bold; box-sizing: border-box; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; font-family: Gilroy, sans-serif; line-height: 1.2em; padding-top: 0px; padding-right: 0px; padding-bottom: 30px; padding-left: 0px; text-align: center; max-width: 360px" &gt;&lt;span style=""  &gt;let’s be &lt;/span&gt;&lt;span style="box-sizing: border-box; color: rgb(120, 157, 74)"  &gt;friends&lt;/span&gt;&lt;/h2&gt;' />
        <Text
          tag="p"
          text="Sign up for our newsletter to receive information on new product innovations, promotions, contests, trends &amp; more. Your hair will love it!"
          className={styles['p']}
        />
        <Text tag="h3" text="Subscribe now" className={styles['h-3']} />
        <Container className={styles['div1']}>
          <Link
            onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'body_button_click','eventAction': 'Subscribe','eventCategory':'Newsletter','eventLabel': 'subscribe::https://cloud.mail.professionalproducts.loreal.ca/biolage_stylist_sign_up','cta_name': 'Subscribe Stylist EN','link_url': 'https://cloud.mail.professionalproducts.loreal.ca/biolage_stylist_sign_up','module_name': 'Signup for newsletters'&#125;);"
            href="https://cloud.mail.professionalproducts.loreal.ca/biolage_stylist_sign_up"
            text="I am a stylist"
            className={styles['a']}
          />
          <Link
            onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'body_button_click','eventAction': 'Subscribe','eventCategory':'Newsletter','eventLabel': 'subscribe::https://mcqg7tb-yjgl2414mz73fvhqnjg1.pub.sfmc-content.com/0ctil10dqf1','cta_name': 'Subscribe Conso EN','link_url': 'https://mcqg7tb-yjgl2414mz73fvhqnjg1.pub.sfmc-content.com/0ctil10dqf1','module_name': 'Signup for newsletters'&#125;);"
            href="https://mcqg7tb-yjgl2414mz73fvhqnjg1.pub.sfmc-content.com/0ctil10dqf1"
            text="I am a consumer"
            className={styles['a1']}
          />
        </Container>
      </Container>
      <Image
        src="https://www.biolage.ca/dist/img/texture_last_section-1.png"
        alt="Texture"
        className={styles['img']}
      />
      <Image
        src="https://www.biolage.ca/dist/img/texture_last_section-2.png"
        alt="Texture"
        className={styles['img1']}
      />
      <Container className={styles['div2']}>
        <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"&gt;&lt;circle cx="18" cy="18" r="18" fill="#789D4A"&gt;&lt;/circle&gt;&lt;path d="M8.182 22.91 18 13.09l9.818 9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
      </Container>
    </Container>
  )
}

NewsletterBanner.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

NewsletterBanner.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default NewsletterBanner
