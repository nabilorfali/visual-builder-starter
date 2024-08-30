/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text } from '../../component-library'
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
              text="Discover life at Amica"
              className={styles['h-1']}
            />
            <Container className={styles['div3']}>
              <Text tag="p" className={styles['p']} />
              <Text
                tag="p"
                text="Life at Amica starts with beautifully designed retirement residences in Canada’s best neighbourhoods where seniors are empowered to live with freedom, optimism and peace of mind. Amica is the choice of modern seniors who want more out of life."
                className={styles['p1']}
              />
              <p className={styles['p2']}>
                <Text
                  text="Inspiring lifestyle, amenities and dining"
                  className={styles['span']}
                />
                <br className={styles['br']} />
                <Text className={styles['span1']} />
                <Text text="Every residence provides a vibrant lifestyle with a wide selection of convenient amenities and services where you can pursue your passions and discover new ones. Well-appointed fitness centres help you meet your physical goals. Craft kitchens let you express your creative side or watch chef demonstrations. Relax and connect in our libraries, home theatres and computer lounges." />
              </p>
              <Text
                tag="p"
                text="Our Red Seal chefs prepare a delicious daily selection of fresh, seasonal, dietitian-approved dishes to suit your appetite. Enjoy your meals in a choice of settings, including elegant, fully licensed dining rooms, self-serve bistros and outdoor patios."
                className={styles['p3']}
              />
              <p className={styles['p4']}>
                <Text
                  text="Comprehensive wellness and safety programs"
                  className={styles['span2']}
                />
                <br className={styles['br1']} />
                <Text text="Amica residents stay engaged at extensive daily recreational activities designed to bring people together using the most effective safety protocols in the senior living industry. Every day, you’ll have the opportunity to socialize, learn, and enjoy life in an unparalleled selection of interesting programs, from live music and arts workshops to volunteering opportunities, family events and themed parties." />
              </p>
              <p className={styles['p5']}>
                <Text
                  text="Experiences tailored to you"
                  className={styles['span3']}
                />
                <br className={styles['br2']} />
                <Text text="You can keep your favourite routines and you don’t have to fit into a schedule at Amica: we adapt to yours. You’re in charge of all aspects of your day, from deciding what to order for lunch to choosing which activities or excursions you’d like to join. We’re here to do whatever we can to make you and your family feel at home." />
              </p>
              <p className={styles['p6']}>
                <Text text="The best care" className={styles['span4']} />
                <br className={styles['br3']} />
                <Text text="With nurses in every residence, our clinical expertise sets us apart. We’re known for providing attentive, comprehensive personalized care that adapts with you. As your needs change, so does our care. At Amica, you will always have the support you need to live your life fully without having to worry about moving again." />
              </p>
              <Text tag="p" className={styles['p7']} />
              <Container className={styles['div4']} />
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
    'Address 1': '',
    'Address 2': '',
    'Label 1': '',
    'Label 2': '',
    Copy: '',
    Title: 'At Amica, every day is yours to spend exactly as you wish',
  },
}

IntroOneColumn.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default IntroOneColumn
