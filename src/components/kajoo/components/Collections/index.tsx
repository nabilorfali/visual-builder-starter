/* eslint-disable */
// @ts-nocheck
import React from 'react'

import PropTypes from 'prop-types'

import { Container, Text, RichText, Image, Link } from '../../component-library'
import styles from './style.module.css'

const Collections = (props) => {
  return (
    <Container
      tag="section"
      className={` ${styles['collections']} ${styles[props.rootClassName]} `}
    >
      <Container className={styles['div']}>
        <h2 className={styles['h-2']}>
          <Text text="get inspired by our " />
          <Text text="collections" className={styles['span']} />
        </h2>
      </Container>
      <Container className={styles['div01']}>
        <RichText value='&lt;svg class="arrow arrow_left" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 50"&gt;&lt;path opacity=".5" fill="#2E3841" d="M36 50H0V0h36z"&gt;&lt;/path&gt;&lt;path d="M22.91 34.818 13.09 25l9.818-9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
        <RichText value='&lt;svg class="arrow arrow_right" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 50"&gt;&lt;path opacity=".5" fill="#2E3841" d="M0 0h36v50H0z"&gt;&lt;/path&gt;&lt;path d="M13.09 15.182 22.91 25l-9.818 9.818" stroke="#fff" stroke-width="2"&gt;&lt;/path&gt;&lt;/svg&gt;' />
        <Container className={styles['div02']}>
          <Container className={styles['div03']}>
            <Container className={styles['div04']}>
              <Container className={styles['div05']}>
                <Image
                  src="https://www.biolage.ca/dist/img/biolage-wellness.jpg"
                  alt="Biolage Wellness"
                  className={styles['img']}
                />
              </Container>
              <Container className={styles['div06']}>
                <Text text="NEW!" className={styles['span1']} />
                <h3 className={styles['h-3']}>
                  <Text text="Holistic" />
                  <br className={styles['br']} />
                  <Text text="self-care journey" className={styles['span2']} />
                </h3>
                <Text
                  tag="p"
                  text="Discover gentle rituals, crafted with care for you and the planet, that nourish your body, mind, and spirit."
                  className={styles['p']}
                />
                <Link
                  href="https://www.biolage.ca/wellness.html"
                  target="_blank"
                  text="Learn More"
                  className={` ${'button-primary-button'} ${styles['a']} `}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/cucumber-texture.png"
              alt="Biolage Wellness Texture"
              className={styles['img01']}
            />
          </Container>
          <Container className={styles['div07']}>
            <Container className={styles['div08']}>
              <Container className={styles['div09']}>
                <Image
                  src="https://www.biolage.ca/dist/img/biolage-clarifying-header.jpg"
                  alt="Biolage Scalp Sync"
                  className={styles['img02']}
                />
              </Container>
              <Container className={styles['div10']}>
                <Text text="NEW!" className={styles['span3']} />
                <h3 className={styles['h-301']}>
                  <Text text="Scalp Sync" />
                  <br className={styles['br1']} />
                  <Text text="clarifying shampoo" className={styles['span4']} />
                </h3>
                <Text
                  tag="p"
                  text="A gentle shampoo, infused with fermented tea and glycolic acid, that deeply cleanses without stripping or drying the hair."
                  className={styles['p01']}
                />
                <Link
                  href="https://www.biolage.ca/scalp-sync.html"
                  target="_blank"
                  text="Learn More"
                  className={styles['a1']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/biolage-scalp-sync-texture.png"
              alt="Biolage Scalp Sync texture"
              className={styles['img03']}
            />
          </Container>
          <Container className={styles['div11']}>
            <Container className={styles['div12']}>
              <Container className={styles['div13']}>
                <Image
                  src="https://www.biolage.ca/dist/img/biolage-scalp-sync.jpg"
                  alt="Biolage Scalp Sync"
                  className={styles['img04']}
                />
              </Container>
              <Container className={styles['div14']}>
                <Text text="NEW!" className={styles['span5']} />
                <Text tag="h3" text="Scalp Sync" className={styles['h-302']} />
                <Text
                  tag="p"
                  text="Discover your perfect hair care routine tailored to address your specific scalp concern"
                  className={styles['p02']}
                />
                <Link
                  href="https://www.biolage.ca/scalp-sync-family.html"
                  target="_blank"
                  text="Learn More"
                  className={styles['a2']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/biolage-scalp-sync-texture.png"
              alt="Biolage Scalp Sync texture"
              className={styles['img05']}
            />
          </Container>
          <Container className={styles['div15']}>
            <Container className={styles['div16']}>
              <Container className={styles['div17']}>
                <Image
                  src="https://www.biolage.ca/dist/img/biolage-bond-therapy.jpg"
                  alt="Biolage Bond Therapy"
                  className={styles['img06']}
                />
              </Container>
              <Container className={styles['div18']}>
                <Text text="NEW!" className={styles['span6']} />
                <Text
                  tag="h3"
                  text="Bond Therapy"
                  className={styles['h-303']}
                />
                <p className={styles['p03']}>
                  <Text text="Bond building meets" />
                  <br className={styles['br2']} />
                  <Text text="nourishing care\n                " />
                </p>
                <Text
                  tag="p"
                  text="Bond Therapy is the utlimate bond care, leaving hair feeling soft and deeply conditioned. The formulas are created to build bonds within your hair with continued use, all while protecting hair from heat and styling."
                  className={styles['p04']}
                />
                <Link
                  href="https://www.biolage.ca/bond-therapy.html"
                  target="_blank"
                  text="Learn More"
                  className={styles['a3']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/biolage-bond-therapy-hero-cream.png"
              alt="Bond Therapy texture"
              className={styles['img07']}
            />
          </Container>
          <Container className={styles['div19']}>
            <Container className={styles['div20']}>
              <Container className={styles['div21']}>
                <Image
                  src="https://www.biolage.ca/dist/img/hydra-source.jpg"
                  alt="Hydra Source Products"
                  className={styles['img08']}
                />
              </Container>
              <Container className={styles['div22']}>
                <h3 className={styles['h-304']}>
                  <Text text="Hydra Source" />
                  <br className={styles['br3']} />
                  <Text text="Blowdry shaping Lotion" />
                </h3>
                <Text
                  tag="p"
                  text="The perfect combination of heat protection, weightless hydration and shape memory to reduce drying time and protect from up to 450°F heat."
                  className={styles['p05']}
                />
                <Container className={styles['div23']}>
                  <Container className={styles['div24']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/icon_vegan_formula.png"
                      alt="vegan formula"
                      className={styles['img09']}
                    />
                  </Container>
                  <Container className={styles['div25']}>
                    <Image
                      src="https://www.biolage.ca/dist/img/icon_cruelty_free.png"
                      alt="cruelty free"
                      className={styles['img10']}
                    />
                  </Container>
                </Container>
                <Link
                  href="https://www.biolage.ca/hydra-source.html"
                  target="_blank"
                  text="Learn More"
                  className={styles['a4']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/collection_hydra_source_texture.png"
              alt="hydra source texture"
              className={styles['img11']}
            />
          </Container>
          <Container className={styles['div26']}>
            <Container className={styles['div27']}>
              <Container className={styles['div28']}>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_hydra_source_visuel.jpg"
                  alt="Hydra Source Products"
                  className={styles['img12']}
                />
              </Container>
              <Container className={styles['div29']}>
                <Text
                  tag="h3"
                  text="Hydra Source"
                  className={styles['h-305']}
                />
                <Text
                  tag="p"
                  text="Quench dry, thirsty hair with formulas inspired by nature that mimic the moisture-retaining properties of the aloe plant. Dry hair moisture levels are balanced leaving hair soft and more manageable."
                  className={styles['p06']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/collection_hydra_source_texture.png"
              alt="hydra source texture"
              className={styles['img13']}
            />
          </Container>
          <Container className={styles['div30']}>
            <Container className={styles['div31']}>
              <Container className={styles['div32']}>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_strength_recovery_visuel.jpg"
                  alt="Hydra Source Products"
                  className={styles['img14']}
                />
              </Container>
              <Container className={styles['div33']}>
                <Text
                  tag="h3"
                  text="Strength Recovery"
                  className={styles['h-306']}
                />
                <Text
                  tag="p"
                  text="Repair that cares. Instant strength and care for damaged hair. Infused with vegan squalene, sourced from olive trees to protect &amp; strengthen hair."
                  className={styles['p07']}
                />
                <Link
                  href="https://www.biolage.ca/strength-recovery.html"
                  target="_blank"
                  text="Learn More"
                  className={styles['a5']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/collection_hydra_source_texture.png"
              alt="hydra source texture"
              className={styles['img15']}
            />
          </Container>
          <Container className={styles['div34']}>
            <Container className={styles['div35']}>
              <Container className={styles['div36']}>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_color_last_visuel.jpg"
                  alt="Color Last Products"
                  className={styles['img16']}
                />
              </Container>
              <Container className={styles['div37']}>
                <Text tag="h3" text="Color Last" className={styles['h-307']} />
                <Text
                  tag="p"
                  text="Let your true color shine. Formulas inspired by the anti-fade properties of the vibrant orchid help protect color-treated hair, balance moisture and even out the hair’s surface for saturated, shiny, vibrant color that stays truer."
                  className={styles['p08']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/collection_color_last_texture.png"
              alt="Color Last texture"
              className={styles['img17']}
            />
          </Container>
          <Container className={styles['div38']}>
            <Container className={styles['div39']}>
              <Container className={styles['div40']}>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_smooth_proof_visuel.png"
                  alt="Smooth Proof Products"
                  className={styles['img18']}
                />
              </Container>
              <Container className={styles['div41']}>
                <Text
                  tag="h3"
                  text="Smooth Proof"
                  className={styles['h-308']}
                />
                <Text
                  tag="p"
                  text="Prove yourself smooth. Let go of frizz and unwanted volume with formulas inspired by the water-resistant properties of the camellia flower. Formulas help lock out moisture for control &amp; smoothness even in 97% humidity."
                  className={styles['p09']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/collection_smooth_proof_texture.png"
              alt="Smooth Proof texture"
              className={styles['img19']}
            />
          </Container>
          <Container className={styles['div42']}>
            <Container className={styles['div43']}>
              <Container className={styles['div44']}>
                <Image
                  src="https://www.biolage.ca/dist/img/collection_volume_bloom_visuel.png"
                  alt="Volume Bloom Products"
                  className={styles['img20']}
                />
              </Container>
              <Container className={styles['div45']}>
                <Text
                  tag="h3"
                  text="Volume Bloom"
                  className={styles['h-309']}
                />
                <Text
                  tag="p"
                  text="Get volume that won’t let you down. Formulas inspired by the expansive properties of the cotton flow. Hair is plumped and expanded with long lasting, bouncy volume."
                  className={styles['p10']}
                />
              </Container>
            </Container>
            <Image
              src="https://www.biolage.ca/dist/img/collection_volume_bloom_texture.png"
              alt="Volume Bloom texture"
              className={styles['img21']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Collections.defaultProps = {
  rendering: {},
  rootClassName: '',
  data: {},
}

Collections.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
}

export default Collections
