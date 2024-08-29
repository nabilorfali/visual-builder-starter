/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link, RichText, Image } from '../../component-library'
import styles from './style.module.css'

const Footer = (props) => {
  return (
    <Container
      className={` ${styles['footer']} ${styles[props.rootClassName]} `}
    >
      <Container tag="footer" className={styles['footer1']}>
        <Container className={styles['div']}>
          <Container className={styles['div1']}>
            <Container className={styles['div2']}>
              <Text tag="h2" text="Contact Us" className={styles['h-2']} />
              <p className={styles['p']}>
                <span className={styles['span']}>
                  <Text text="20 Queen St W #3200,\r" />
                  <br className={styles['br']} />
                  <Text text="Toronto, ON\r" />
                  <br className={styles['br1']} />
                  <Text text="M5H 3R3" />
                </span>
                <br className={styles['br2']} />
                <Text text="(416) 487-2020" className={styles['span1']} />
              </p>
            </Container>
            <Container className={styles['div3']}>
              <Link
                aria-label="Book a Tour"
                href="/book-a-visit"
                className={styles['a']}
              >
                <RichText value='&lt;svg class="svg-inline--fa fa-calendar-check fa-w-14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-icon="calendar-check" data-prefix="far" viewBox="0 0 448 512"&gt;&lt;title&gt;Calendar Check&lt;/title&gt;&lt;path fill="currentColor" d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                <Text text="Book a Tour" />
              </Link>
              <Link
                aria-label="Get in touch"
                href="/get-in-touch"
                className={styles['a01']}
              >
                <RichText value='&lt;svg width="16px" height="19px" viewBox="0 0 16 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;&lt;title&gt;Person&lt;/title&gt;&lt;g stroke="none" stroke-width="1"&gt;&lt;g transform="translate(-469.000000, -58.000000)"&gt;&lt;g transform="translate(428.000000, 43.000000)"&gt;&lt;g transform="translate(41.000000, 10.000000)"&gt;&lt;g transform="translate(0.000000, 5.000000)"&gt;&lt;g&gt;&lt;path d="M12.7929166,4.89716756 C12.7929166,7.60126653 10.6013729,9.79433512 7.89716756,9.79433512 C5.19168551,9.79433512 3,7.60140838 3,4.89716756 C3,2.19292674 5.19154366,0 7.89716756,0 C10.6012665,0 12.7929166,2.19292674 12.7929166,4.89716756"&gt;&lt;/path&gt;&lt;path d="M0,18.0723594 L15.4787104,18.0723594 C15.3550843,13.0368369 11.9384678,9 7.73888981,9 C3.53900157,9 0.121007418,13.0368369 0,18.0723594 Z"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;' />
                <Text text="GET IN TOUCH" />
              </Link>
            </Container>
            <hr className={styles['hr']} />
            <ul className={styles['ul']}>
              <li className={styles['li']}>
                <Link
                  href="https://www.amica.ca/amica-difference/about-amica"
                  text="About Amica"
                  className={styles['a02']}
                />
              </li>
              <li className={styles['li01']}>
                <Link
                  href="https://www.amica.ca/legal"
                  text="Legal"
                  className={styles['a03']}
                />
              </li>
              <li className={styles['li02']}>
                <Link
                  href="https://www.amica.ca/healthcare-professionals"
                  text="Healthcare Professionals"
                  className={styles['a04']}
                />
              </li>
              <li className={styles['li03']}>
                <Link
                  href="https://careers.amica.ca"
                  text="Careers"
                  className={styles['a05']}
                />
              </li>
              <li className={styles['li04']}>
                <Link
                  href="https://www.amica.ca/helping-hands-charity"
                  text="Helping Hands Charity"
                  className={styles['a06']}
                />
              </li>
              <li className={styles['li05']}>
                <Link
                  href="https://www.amica.ca/frequently-asked-questions"
                  text="FAQs"
                  className={styles['a07']}
                />
              </li>
            </ul>
            <hr className={styles['hr1']} />
            <Container className={styles['div4']}>
              <Text tag="h2" text="Follow Us" className={styles['h-21']} />
              <Container className={styles['div5']}>
                <Container className={styles['div6']}>
                  <Link
                    id="facebook"
                    href="https://www.facebook.com/AmicaSeniorLifestyles/"
                    target="_blank"
                    className={styles['a08']}
                  >
                    <Image
                      alt="New 2021 Facebook Icon"
                      src="https://brand.amica.ca/m/1abcf543f0f8b16e/original/-New-2021-Facebook-Icon.svg"
                      title=" New 2021 Facebook Icon"
                      width="1024"
                      height="1018"
                      className={styles['img']}
                    />
                  </Link>
                  <Link
                    id="linkedin"
                    href="https://www.linkedin.com/company/721227/"
                    target="_blank"
                    className={styles['a09']}
                  >
                    <Image
                      alt="Linkedin footer icon"
                      src="https://brand.amica.ca/m/d89cd324b1f7a13f/original/Linkedin-footer-icon.svg"
                      title="Linkedin footer icon"
                      width="21"
                      height="21"
                      className={styles['img1']}
                    />
                  </Link>
                  <Link
                    id="instagram"
                    href="https://www.instagram.com/amicaseniorlifestyles/"
                    target="_blank"
                    className={styles['a10']}
                  >
                    <Image
                      alt="Amica Instragram Logo"
                      src="https://brand.amica.ca/m/506884992c861939/original/Amica-Instragram-Logo.svg"
                      title="Amica Instragram Logo"
                      width="612"
                      height="611"
                      className={styles['img2']}
                    />
                  </Link>
                  <Link
                    id="youtube"
                    href="https://www.youtube.com/channel/UCXyqMibqd9ppUjdR_OzH2AQ/featured"
                    target="_blank"
                    className={styles['a11']}
                  >
                    <Image
                      alt="YouTube icon"
                      src="https://brand.amica.ca/m/1b2bfd8e7ed81d14/original/-youtube-icon10.svg"
                      title=" youtube-icon10"
                      width="60"
                      height="41"
                      className={styles['img3']}
                    />
                  </Link>
                  <Link
                    id="pinterest"
                    href="https://www.pinterest.ca/AmicaSeniorLifestyles/_created/"
                    target="_blank"
                    className={styles['a12']}
                  >
                    <Image
                      alt="Pinterest logo"
                      src="https://brand.amica.ca/m/2d450bcdbb76a0cc/original/Pinterest-logo.svg"
                      title="Pinterest logo"
                      width="243"
                      height="243"
                      className={styles['img4']}
                    />
                  </Link>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container className={styles['div7']}>
          <Container className={styles['div8']}>
            <ul className={styles['ul1']}>
              <li className={styles['li06']}>
                <Link
                  href="/accessibility-policy"
                  text="Accessibility Policy"
                  className={styles['a13']}
                />
              </li>
              <li className={styles['li07']}>
                <Link href="/press" text="Press" className={styles['a14']} />
              </li>
              <li className={styles['li08']}>
                <Link
                  href="/terms-of-use"
                  text="Terms of Use"
                  className={styles['a15']}
                />
              </li>
              <li className={styles['li09']}>
                <Link
                  href="/privacy-policy"
                  text="Privacy Policy"
                  className={styles['a16']}
                />
              </li>
              <li className={styles['li10']}>
                <Link
                  href="https://amicafeedback.freshdesk.com/support/tickets/new"
                  target="_blank"
                  text="Feedback"
                  className={styles['a17']}
                />
              </li>
            </ul>
            <Text
              tag="p"
              text="© Amica Senior Lifestyles &lt;!-- --&gt;2024"
              className={styles['p1']}
            />
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
