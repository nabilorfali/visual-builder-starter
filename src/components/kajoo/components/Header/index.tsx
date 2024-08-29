/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Image, Link, RichText, Text } from '../../component-library'
import styles from './style.module.css'

const AppHeader = (props) => {
  return (
    <Container
      tag="header"
      id="hero-banner"
      className={` ${styles['header']} ${styles[props.rootClassName]} `}
    >
      <picture id="picture-aux" className={styles['picture']}>
        <source
          media="(min-width: 1200)"
          srcSet="https://brand.amica.ca/m/b4c1dee90cf68485/Differentiator_panel_with_background_desktop-ASL-NEW-Homepage-Hero-Banner-Desktop.jpg"
          className={styles['source']}
        />
        <source
          media="(max-width: 575.98px)"
          srcSet="https://brand.amica.ca/m/58a0b90b0847b5a6/Hero_banner_mobile-ASL-NEW-Homepage-Hero-Banner-Mobile.jpg"
          className={styles['source1']}
        />
        <source
          media="(min-width: 576px) and (max-width: 1199.98px)"
          className={styles['source2']}
        />
        <Image
          alt="ASL- NEW - Homepage Hero Banner - Desktop"
          title="ASL- NEW - Homepage Hero Banner - Desktop"
          aria-hidden="true"
          src="https://brand.amica.ca/m/b4c1dee90cf68485/Differentiator_panel_with_background_desktop-ASL-NEW-Homepage-Hero-Banner-Desktop.jpg"
          className={styles['img']}
        />
      </picture>
      <Container role="banner" aria-label="Content" className={styles['div']} />
      <Container className={styles['div1']}>
        <Link
          aria-label="Find a Residence "
          href="/find-a-residence"
          className={styles['a']}
        >
          <RichText value='&lt;svg width="15px" height="19px" viewBox="0 0 15 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;&lt;title&gt;Location&lt;/title&gt;&lt;g stroke="none" stroke-width="1"&gt;&lt;g transform="translate(-724.000000, -628.000000)"&gt;&lt;g transform="translate(0.000000, -1.000000)"&gt;&lt;g transform="translate(617.000000, 549.000000)"&gt;&lt;g transform="translate(0.000000, 65.000000)"&gt;&lt;g transform="translate(107.000000, 10.000000)"&gt;&lt;path d="M7.18499994,5 C3.21651821,5 0,8.21659549 0,12.1849999 C0,16.1534044 7.18499994,24.0309372 7.18499994,24.0309372 C7.18499994,24.0309372 14.3699999,16.1530953 14.3699999,12.1849999 C14.3699999,8.21690462 11.1534044,5 7.18499994,5 Z M7.18499994,15.8756493 C5.14727924,15.8756493 3.49593487,14.2243436 3.49593487,12.1865842 C3.49593487,10.1488635 5.1472406,8.49751917 7.18499994,8.49751917 C9.22275928,8.49751917 10.875572,10.1503319 10.875572,12.1865842 C10.875572,14.2227979 9.22275928,15.8756493 7.18499994,15.8756493 Z"&gt;&lt;/path&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;' />
          <Text text="Find a Residence " />
        </Link>
        <Container id="herobanner-searchbox" className={styles['div2']}>
          <form
            action="/"
            id="herobannerResidenceSearchBox"
            className={styles['form']}
          >
            <input
              type="hidden"
              name="uid"
              value="ed3a558a-ef87-4701-995c-4ee547b140bf"
              data-gaconnector-tracked="true"
              className={styles['input']}
            />
            <Container className={styles['div3']}>
              <Container className={styles['div4']}>
                <input
                  id="llquery"
                  name="llquery"
                  placeholder="Where would you like to live?"
                  aria-label="search a residence"
                  data-gaconnector-tracked="true"
                  className={styles['input1']}
                />
              </Container>
              <Container className={styles['div5']}>
                <button
                  type="submit"
                  aria-label="search"
                  tabindex="-1"
                  className={styles['button']}
                >
                  <RichText value='&lt;svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="M24 22.694l-6.63-6.632a9.759 9.759 0 002.242-6.256A9.804 9.804 0 009.806 0 9.804 9.804 0 000 9.806a9.804 9.804 0 009.806 9.806c2.382 0 4.529-.841 6.256-2.242l6.63 6.63L24 22.694zM9.857 17.762c-4.422 0-8-3.578-8-8 0-4.423 3.578-8 8-8 4.423 0 8 3.577 8 8 0 4.422-3.577 8-8 8z"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                </button>
              </Container>
              <input
                type="hidden"
                id="url"
                name="url"
                value="/find-a-residence"
                data-gaconnector-tracked="true"
                className={styles['input2']}
              />
            </Container>
          </form>
        </Container>
      </Container>
      <Link href="#" aria-label="Scroll down" className={styles['a1']}>
        <Text text="Scroll down" className={styles['span']} />
        <RichText value='&lt;svg width="41" height="21" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="M40.094 0L20.5 19.222.906 0 0 .889 20.5 21 41 .889z"&gt;&lt;/path&gt;&lt;/svg&gt;' />
      </Link>
    </Container>
  )
}

AppHeader.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

AppHeader.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default AppHeader
