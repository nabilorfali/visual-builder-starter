/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText } from '../../component-library'
import styles from './style.module.css'

const ContentBlock = (props) => {
  return (
    <Container
      className={` ${styles['content-block']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container
            role="main"
            aria-label="Content"
            className={styles['div2']}
          >
            <Text tag="h1" text={props.data.Title} className={styles['h-1']} />
            <RichText value={props.data.Content} />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

ContentBlock.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Title: 'Discover life at Amica',
    Content:
      '<div style="display: block; box-sizing: border-box; max-width: 890px; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto" ><div style="display: block; box-sizing: border-box" ><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px"  >Life at Amica starts with beautifully designed retirement residences in Canada’s best neighbourhoods where seniors are empowered to live with freedom, optimism and peace of mind. Amica is the choice of modern seniors who want more out of life.</p><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px" ><strong style="font-weight: bolder; box-sizing: border-box" ><span style=""  >Inspiring lifestyle, amenities and dining</span></strong><br style="box-sizing: border-box" ></br><strong style="font-weight: bolder; box-sizing: border-box" ></strong><span style=""  >Every residence provides a vibrant lifestyle with a wide selection of convenient amenities and services where you can pursue your passions and discover new ones. Well-appointed fitness centres help you meet your physical goals. Craft kitchens let you express your creative side or watch chef demonstrations. Relax and connect in our libraries, home theatres and computer lounges.</span></p><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px"  >Our Red Seal chefs prepare a delicious daily selection of fresh, seasonal, dietitian-approved dishes to suit your appetite. Enjoy your meals in a choice of settings, including elegant, fully licensed dining rooms, self-serve bistros and outdoor patios.</p><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px" ><strong style="font-weight: bolder; box-sizing: border-box" ><span style=""  >Comprehensive wellness and safety programs</span></strong><br style="box-sizing: border-box" ></br><span style=""  >\nAmica residents stay engaged at extensive daily recreational activities designed to bring people together using the most effective safety protocols in the senior living industry. Every day, you’ll have the opportunity to socialize, learn, and enjoy life in an unparalleled selection of interesting programs, from live music and arts workshops to volunteering opportunities, family events and themed parties.</span></p><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px" ><strong style="font-weight: bolder; box-sizing: border-box" ><span style=""  >Experiences tailored to you</span></strong><br style="box-sizing: border-box" ></br><span style=""  >\nYou can keep your favourite routines and you don’t have to fit into a schedule at Amica: we adapt to yours. You’re in charge of all aspects of your day, from deciding what to order for lunch to choosing which activities or excursions you’d like to join. We’re here to do whatever we can to make you and your family feel at home.</span></p><p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px" ><strong style="font-weight: bolder; box-sizing: border-box" ><span style=""  >The best care</span></strong><br style="box-sizing: border-box" ></br><span style=""  >\nWith nurses in every residence, our clinical expertise sets us apart. We’re known for providing attentive, comprehensive personalized care that adapts with you. As your needs change, so does our care. At Amica, you will always have the support you need to live your life fully without having to worry about moving again.</span></p></div><div style="display: block; box-sizing: border-box; text-align: center" ></div></div>',
  },
}

ContentBlock.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default ContentBlock
