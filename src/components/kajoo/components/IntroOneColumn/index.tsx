/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Link } from '../../component-library'
import styles from './style.module.css'

const IntroOneColumn = (props) => {
  return (
    <Container
      className={` ${styles['intro-one-column']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div1']}>
          <Container aria-label="Content" className={styles['div2']}>
            <Text
              tag="h1"
              text="At Amica, every day is yours to spend exactly as you wish"
              className={styles['h-1']}
            />
            <Container className={styles['div3']}>
              <Text tag="p" className={styles['p']} />
              <RichText value='&lt;div data-kajoo-element-type="rich-text"&gt;Amica offers an exceptional senior living experience unlike any other. Every residence offers elegant and purposeful designs, premium amenities, unparalleled care that evolves as you do and a lifestyle that leaves you in full control. At Amica, you’ll never have to move again. And you’ll never want to.&lt;/div&gt;' />
              <Container className={styles['div4']}>
                <Link
                  aria-label="Book a Tour"
                  href="https://www.amica.ca/book-a-visit"
                  text="BOOK A TOUR"
                  className={styles['a']}
                />
              </Container>
              <Text tag="p" className={styles['p1']} />
              <Container className={styles['div5']} />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

IntroOneColumn.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    Title: 'Discover life at Amica',
    Copy: '<p>Life at Amica starts with beautifully designed retirement residences in Canada’s best neighbourhoods where seniors are empowered to live with freedom, optimism and peace of mind. Amica is the choice of modern seniors who want more out of life.</p><p><span style="font-weight: bolder;">Inspiring lifestyle, amenities and dining</span><br /><span style="font-weight: bolder;"></span>Every residence provides a vibrant lifestyle with a wide selection of convenient amenities and services where you can pursue your passions and discover new ones. Well-appointed fitness centres help you meet your physical goals. Craft kitchens let you express your creative side or watch chef demonstrations. Relax and connect in our libraries, home theatres and computer lounges.</p><p>Our Red Seal chefs prepare a delicious daily selection of fresh, seasonal, dietitian-approved dishes to suit your appetite. Enjoy your meals in a choice of settings, including elegant, fully licensed dining rooms, self-serve bistros and outdoor patios.</p><p><span style="font-weight: bolder;">Comprehensive wellness and safety programs</span><br />Amica residents stay engaged at extensive daily recreational activities designed to bring people together using the most effective safety protocols in the senior living industry. Every day, you’ll have the opportunity to socialize, learn, and enjoy life in an unparalleled selection of interesting programs, from live music and arts workshops to volunteering opportunities, family events and themed parties.</p><p><span style="font-weight: bolder;">Experiences tailored to you</span><br />You can keep your favourite routines and you don’t have to fit into a schedule at Amica: we adapt to yours. You’re in charge of all aspects of your day, from deciding what to order for lunch to choosing which activities or excursions you’d like to join. We’re here to do whatever we can to make you and your family feel at home.</p><p><span style="font-weight: bolder;">The best care</span><br />With nurses in every residence, our clinical expertise sets us apart. We’re known for providing attentive, comprehensive personalized care that adapts with you. As your needs change, so does our care. At Amica, you will always have the support you need to live your life fully without having to worry about moving again.</p>',
  },
}

IntroOneColumn.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default IntroOneColumn
