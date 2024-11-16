/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, Link, Image, RichText } from '../../component-library'
import styles from './style.module.css'

const BiolageBestSellers = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['biolage-best-sellers']} ${
        styles[props.rootClassName]
      } `}
    >
      <Container className={styles['div']}>
        <h2 className={styles['h-2']}>
          <Text text="discover our " />
          <Text text="bestsellers" className={styles['span']} />
        </h2>
      </Container>
      <Container className={styles['div01']}>
        <Container className={styles['div02']}>
          <Container className={styles['div03']}>
            <Link href="#cta" className={styles['a']}>
              <Image
                src="https://www.biolage.ca/dist/img/bestseller_hydra_source_shampoo.png"
                alt="Hydra Source Shampoo"
                className={styles['img']}
              />
              <Image
                src="https://www.biolage.ca/dist/img/bestseller_hydra_source_texture.png"
                alt="Hydra Source Texture"
                className={styles['img1']}
              />
              <Text tag="p" text="Get this product" className={styles['p']} />
            </Link>
            <Container className={styles['div04']}>
              <Text tag="h5" text="Hydra Source" className={styles['h-5']} />
              <Text tag="p" text="Shampoo" className={styles['p01']} />
              <small className={styles['small']}>
                <Text text="for dry hair" />
              </small>
              <Container className={styles['div05']}>
                <Text text="4.7 " className={styles['span1']} />
                <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                <Text text=" on Amazon" className={styles['span2']} />
              </Container>
            </Container>
          </Container>
          <Container className={styles['div06']}>
            <Link href="#cta" className={styles['a01']}>
              <Image
                src="https://www.biolage.ca/dist/img/bestseller_volume_bloom_shampoo.png"
                alt="Volume Bloom Shampoo"
                className={styles['img2']}
              />
              <Image
                src="https://www.biolage.ca/dist/img/bestseller_volume_bloom_texture.png"
                alt="Volume Bloom Texture"
                className={styles['img3']}
              />
              <Text tag="p" text="Get this product" className={styles['p02']} />
            </Link>
            <Container className={styles['div07']}>
              <Text tag="h5" text="Volume bloom" className={styles['h-51']} />
              <Text tag="p" text="Shampoo" className={styles['p03']} />
              <small className={styles['small1']}>
                <Text text="for fine and thinning hair" />
              </small>
              <Container className={styles['div08']}>
                <Text text="4.4 " className={styles['span3']} />
                <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                <Text text=" on Amazon" className={styles['span4']} />
              </Container>
            </Container>
          </Container>
          <Container className={styles['div09']}>
            <Link href="#cta" className={styles['a02']}>
              <Image
                src="https://www.biolage.ca/dist/img/bestseller_color_last_shampoo.png"
                alt="Ultra Hydra Source Shampoo"
                className={styles['img4']}
              />
              <Image
                src="https://www.biolage.ca/dist/img/bestseller_color_last_texture.png"
                alt="Ultra Hydra Source Texture"
                className={styles['img5']}
              />
              <Text tag="p" text="Get this product" className={styles['p04']} />
            </Link>
            <Container className={styles['div10']}>
              <Text tag="h5" text="Color Last" className={styles['h-52']} />
              <Text tag="p" text="Shampoo" className={styles['p05']} />
              <small className={styles['small2']}>
                <Text text="for color-treated hair" />
              </small>
              <Container className={styles['div11']}>
                <Text text="4.7 " className={styles['span5']} />
                <RichText value='&lt;svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17"&gt;&lt;path d="m9 0 2.02 6.219h6.54l-5.29 3.843 2.02 6.22L9 12.437 3.71 16.28l2.02-6.219L.44 6.22h6.54L9 0Z" fill="#789D4A"&gt;&lt;/path&gt;&lt;/svg&gt;' />
                <Text text=" on Amazon" className={styles['span6']} />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container id="cta" className={styles['div12']}>
        <Text tag="h3" text="Shop Now" className={styles['h-3']} />
        <Container className={styles['div13']}>
          <Container className={styles['div14']}>
            <Container className={styles['div15']}>
              <Text tag="p" text="I am a stylist" className={styles['p06']} />
              <p className={styles['p07']}>
                <RichText value='&lt;svg viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="m13 1.5-6 6-6-6" stroke="#ffffff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
              </p>
            </Container>
            <ul className={styles['ul']}>
              <li className={styles['li']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Beaute Star','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://www.beautestar.com/en/all-products?brand=Biolage"
                  target="_blank"
                  text="Beaute star"
                  className={styles['a03']}
                />
              </li>
              <li className={styles['li01']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Cosmoprofbeauty','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://www.cosmoprofbeauty.ca/biolage-2"
                  target="_blank"
                  text="Cosmo Prof"
                  className={styles['a04']}
                />
              </li>
              <li className={styles['li02']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Intenational Beauty','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://www.internationalbeauty.ca/search?type=product%2Carticle&amp;options%5Bprefix%5D=last&amp;q=biolage"
                  target="_blank"
                  text="International Beauty Services"
                  className={styles['a05']}
                />
              </li>
              <li className={styles['li03']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'TBBS','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://www.tbbs.ca/liquid-luxuries"
                  target="_blank"
                  text="Liquid Luxuries"
                  className={styles['a06']}
                />
              </li>
              <li className={styles['li04']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Stylist','eventLabel': 'Maritime Beauty Shop','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://www.maritimebeautyshop.com/manufacturer/310/biolage"
                  target="_blank"
                  text="Maritime Beauty Shop"
                  className={styles['a07']}
                />
              </li>
            </ul>
          </Container>
          <Container className={styles['div16']}>
            <Container className={styles['div17']}>
              <Text tag="p" text="I am a consumer" className={styles['p08']} />
              <p className={styles['p09']}>
                <RichText value='&lt;svg viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;&lt;path d="m13 1.5-6 6-6-6" stroke="#ffffff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
              </p>
            </Container>
            <ul className={styles['ul1']}>
              <li className={styles['li05']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Amazon','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://www.amazon.ca/stores/page/5815C95C-3376-4436-BAFE-28E48CABE488/?_encoding=UTF8&amp;store_ref=SB_A10127613MEDWYHWRR4B9&amp;pd_rd_plhdr=t&amp;aaxitk=f4bcdb7c84e96d40501f6f30195bb5c6&amp;hsa_cr_id=6363512840801&amp;lp_asins=B00ILBUEVK%2CB00IK1CJZU%2CB00IRDAZ7K&amp;lp_query=biolage&amp;lp_slot=auto-sparkle-hsa-tetris&amp;ref_=sbx_be_s_sparkle_lsi4d_logo&amp;pd_rd_w=Db4fr&amp;content-id=amzn1.sym.2391ded4-5342-4a72-ab16-54835c13e968%3Aamzn1.sym.2391ded4-5342-4a72-ab16-54835c13e968&amp;pf_rd_p=2391ded4-5342-4a72-ab16-54835c13e968&amp;pf_rd_r=MG5CE8YBTTVMJ1KWGE2X&amp;pd_rd_wg=T1Z2p&amp;pd_rd_r=958f90f2-5b04-47a9-aece-23cb3d85bbc9"
                  target="_blank"
                  text="Amazon"
                  className={styles['a08']}
                />
              </li>
              <li className={styles['li06']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Beaute Star','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://www.beautestar.com/en/all-products?brand=Biolage"
                  target="_blank"
                  text="Beaute star"
                  className={styles['a09']}
                />
              </li>
              <li className={styles['li07']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Coastal Beauty','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://coastalbeauty.ca/manufacturer/310/biolage"
                  target="_blank"
                  text="Coastal Beauty"
                  className={styles['a10']}
                />
              </li>
              <li className={styles['li08']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Chatters','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://chatters.ca/collections/biolage"
                  target="_blank"
                  text="Chatters"
                  className={styles['a11']}
                />
              </li>
              <li className={styles['li09']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'Tommy Guns','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://ca.tommyguns.com/collections/biolage"
                  target="_blank"
                  text="Tommy Guns"
                  className={styles['a12']}
                />
              </li>
              <li className={styles['li10']}>
                <Link
                  onclick="dataLayer.push(&#123;'event': 'uaevent','event_name': 'buy_now','eventAction': 'click to buy','eventCategory': 'Ecommerce Consumer','eventLabel': 'TBBS','product_info': 'All Biolage Products EN'&#125;);"
                  href="https://shoptbbs.ca/collections/biolage"
                  target="_blank"
                  text="TBBS"
                  className={styles['a13']}
                />
              </li>
            </ul>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

BiolageBestSellers.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {
    BestsellerTitle: 'Lorem Ipsum',
  },
}

BiolageBestSellers.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default BiolageBestSellers
