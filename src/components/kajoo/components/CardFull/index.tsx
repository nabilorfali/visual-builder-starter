/* eslint-disable */
// @ts-nocheck
import React from "react";

import PropTypes from "prop-types";

import { Container, Text, RichText, Button } from "../../component-library";
import styles from "./style.module.css";

const CardFull = (props) => {
  return (
    <Container
      tag="section"
      role="complementary"
      aria-label="Panel"
      className={` ${styles["card-full"]} ${styles[props.rootClassName]} `}
    >
      <Container className={styles["div"]}>
        <Container className={styles["div1"]}>
          <Text tag="h2" text={props.data.Heading} className={styles["h-2"]} />
          <Container className={styles["div2"]}>
            <RichText value='&lt;p style="display: block; box-sizing: border-box; margin-top: 0px; margin-bottom: 0.8em; line-height: 1.8; margin-right: 0px; margin-left: 0px"  &gt;Get expert tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.&lt;/p&gt;' />
          </Container>
          <Button
            text={props.data["Watch Now"].text}
            className={styles["submit-button"]}
          />
        </Container>
        <Container className={styles["div3"]} />
      </Container>
    </Container>
  );
};

CardFull.defaultProps = {
  rendering: {},
  rootClassName: "",
  data: {
    Heading: "Webinars for seniors",
    Description:
      "Get expert tips and ideas for better sleep, enhanced memory, managing stress, downsizing and more in our new online workshops.",
    "Watch Now": {
      href: "",
      text: "WATCH NOW",
    },
    BgImage: {
      src: "https://app.kajoo.ai/icons/default-imag.svg",
      alt: "",
    },
  },
};

CardFull.propTypes = {
  rendering: PropTypes.object,
  rootClassName: PropTypes.string,
  data: PropTypes.object,
};

export default CardFull;
