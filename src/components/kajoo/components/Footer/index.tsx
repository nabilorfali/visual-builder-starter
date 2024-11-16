/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link, RichText } from '../../component-library'
import styles from './style.module.css'

const Footer = (props) => {
  return (
    <Container
      tag="footer"
      className={` ${styles['footer']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <Container className={styles['div01']}>
          <Container className={styles['div02']}>
            <Container className={styles['div03']}>
              <Text tag="h5" text="Contact Us" className={styles['h-5']} />
              <p className={styles['p']}>
                <Text text="Call us at " />
                <Link
                  href="tel:1-888-422-6879"
                  text="1-888-422-6879"
                  className={styles['a']}
                />
              </p>
              <Text
                tag="p"
                text="Mail us at Biolage Canada, 1500 Boul. Robert-Bourassa, Bureau 600, Montreal, Quebec, H3A 3S8"
                className={styles['p1']}
              />
            </Container>
            <Container className={styles['div04']}>
              <Text
                tag="h5"
                text="For Professionals"
                className={styles['h-51']}
              />
              <p className={styles['p2']}>
                <Link
                  href="https://club.matrixprofessional.ca/en-ca/my-account"
                  target="_blank"
                  text="Explore exclusive deals for Club members"
                  className={styles['a1']}
                />
              </p>
            </Container>
            <Container className={styles['div05']}>
              <Text tag="h5" text="Follow Us" className={styles['h-52']} />
              <Container className={styles['div06']}>
                <Link
                  href="https://www.facebook.com/Biolage-Canada-286334252184370"
                  target="_blank"
                  className={styles['a2']}
                >
                  <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"&gt;&lt;path fill-rule="evenodd" clip-rule="evenodd" d="M15.801 0A2.2 2.2 0 0 1 18 2.199V15.8A2.2 2.2 0 0 1 15.801 18h-3.743v-6.782H14.4l.446-2.905h-2.787V6.428c0-.794.39-1.569 1.637-1.569h1.268V2.386s-1.15-.196-2.25-.196c-2.295 0-3.795 1.391-3.795 3.91v2.213H6.366v2.905h2.552V18h-6.72A2.2 2.2 0 0 1 0 15.801V2.2A2.2 2.2 0 0 1 2.199 0H15.8Z" fill="#fff"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                </Link>
                <Link
                  href="https://www.youtube.com/c/Biolage/featured"
                  target="_blank"
                  className={styles['a3']}
                >
                  <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18"&gt;&lt;path d="M10.4 12.857V5.143L17.155 9 10.4 12.857ZM25.457 2.81A3.239 3.239 0 0 0 23.158.537C21.13 0 13 0 13 0S4.87 0 2.842.537A3.24 3.24 0 0 0 .543 2.81C0 4.816 0 9 0 9s0 4.184.543 6.19a3.237 3.237 0 0 0 2.299 2.273C4.869 18 13 18 13 18s8.13 0 10.158-.537a3.238 3.238 0 0 0 2.299-2.274C26 13.186 26 9 26 9s0-4.184-.543-6.19Z" fill="#fff"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                </Link>
                <Link
                  href="https://www.instagram.com/biolage/"
                  target="_blank"
                  className={styles['a4']}
                >
                  <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"&gt;&lt;g clip-path="url(#a)" fill="#fff"&gt;&lt;path d="M9 1.621c2.403 0 2.688.01 3.636.053.878.04 1.355.186 1.672.31.42.163.72.358 1.035.673.315.315.51.614.673 1.035.123.317.27.793.31 1.671.043.95.052 1.234.052 3.637s-.01 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.318.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.01-3.637-.052c-.878-.04-1.354-.187-1.671-.31a2.789 2.789 0 0 1-1.035-.673 2.784 2.784 0 0 1-.673-1.035c-.124-.318-.27-.794-.31-1.671-.043-.95-.053-1.234-.053-3.637s.01-2.688.053-3.637c.04-.878.186-1.354.31-1.671.163-.42.358-.72.673-1.035.315-.315.614-.51 1.035-.673.317-.124.793-.27 1.67-.31C6.313 1.63 6.598 1.62 9 1.62ZM9 0C6.555 0 6.25.01 5.29.054 4.33.098 3.676.25 3.103.473A4.42 4.42 0 0 0 1.51 1.511c-.5.5-.808 1.002-1.038 1.594C.25 3.677.098 4.332.054 5.29.01 6.25-.001 6.556-.001 9c0 2.445.01 2.751.055 3.711.043.958.196 1.612.418 2.185A4.42 4.42 0 0 0 1.51 16.49c.5.5 1.002.808 1.594 1.038.573.223 1.227.375 2.185.419C6.25 17.99 6.555 18 9 18c2.445 0 2.752-.01 3.712-.054.958-.044 1.612-.196 2.184-.419a4.42 4.42 0 0 0 1.595-1.038c.5-.5.808-1.002 1.037-1.594.223-.572.375-1.227.419-2.185.044-.96.054-1.267.054-3.71 0-2.445-.01-2.751-.054-3.711-.044-.958-.196-1.612-.419-2.185a4.419 4.419 0 0 0-1.037-1.594A4.41 4.41 0 0 0 14.895.473C14.323.25 13.67.098 12.711.054 11.75.01 11.444 0 9 0Z"&gt;&lt;/path&gt;&lt;path d="M14.884 4.196a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM9 4.379a4.621 4.621 0 1 0 0 9.242A4.621 4.621 0 0 0 9 4.38Zm0 7.62A3 3 0 1 1 9 6a3 3 0 0 1 0 6Z"&gt;&lt;/path&gt;&lt;/g&gt;&lt;defs&gt;&lt;clipPath id="a"&gt;&lt;path fill="#fff" d="M0 0h18v18H0z"&gt;&lt;/path&gt;&lt;/clipPath&gt;&lt;/defs&gt;&lt;/svg&gt;' />
                </Link>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['div07']}>
          <Container className={styles['div08']}>
            <Container className={styles['div09']}>
              <Text
                tag="p"
                text="© Biolage Ltd. 2022, All Rights Reserved"
                className={styles['p3']}
              />
              <p className={styles['p4']}>
                <Text text="This site is for Canada only. Cookies and related technology are used for advertising." />
                <br className={styles['br']} />
                <Text text="To learn about your choices see our " />
                <Link
                  href="https://brandassets.lorealpublications.com/biolage-landing-2022/Biolage.ca_Privacy_Policy.pdf"
                  target="_blank"
                  text="privacy policy"
                  className={styles['a5']}
                />
                <Text text=" and " />
                <Link
                  href="https://brandassets.lorealpublications.com/biolage-landing-2022/Biolage.ca_Terms_Of_Use.pdf"
                  target="_blank"
                  text="terms of use"
                  className={styles['a6']}
                />
                <Text text="." />
              </p>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Footer.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

Footer.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default Footer
