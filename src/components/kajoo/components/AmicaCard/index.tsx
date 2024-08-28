/* eslint-disable */
// @ts-nocheck
import React from "react";

import PropTypes from "prop-types";

import {
  Container,
  Text,
  RichText,
  Link,
  Image,
} from "../../component-library";
import styles from "./style.module.css";

const AmicaCard = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Panel"
      className={` ${styles["amica-card"]} ${styles[props.rootClassName]} `}
    >
      <Container className={styles["div"]}>
        <Container className={styles["div1"]}>
          <Text tag="h2" text={props.data.Heading} className={styles["h-2"]} />
          <Container className={styles["div2"]}>
            <RichText value='&lt;p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px"  &gt;Will I be in charge of my day? Can I eat what, and when, I want? Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should. Ask us. You’ll get the straightforward answers you deserve.&lt;/p&gt;' />
          </Container>
          <Link
            aria-label="Link"
            href={props.data["See More"].url}
            text={props.data["See More"].text}
            className={styles["a"]}
          />
        </Container>
        <Container className={styles["div3"]}>
          <Image
            src={props.data.Image}
            title="Occ_SenWoman760x546webp"
            className={styles["img"]}
          />
        </Container>
      </Container>
    </Container>
  );
};

AmicaCard.defaultProps = {
  rendering: {},
  rootClassName: "",
  data: {
    Heading: "You have questions, we have answers",
    Description:
      "Will I be in charge of my day? Can I eat what, and when, I want? Will I have to move if I need extra care? Moving to senior living is a big decision. If you’re not asking questions like these, maybe you should. Ask us. You’ll get the straightforward answers you deserve.",
    Image: {
      src: "https://app.kajoo.ai/icons/default-imag.svg",
      alt: "",
    },
    "See More": {
      href: "https://kajoo.ai",
      text: "See More",
    },
  },
};

AmicaCard.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
};

export default AmicaCard;
