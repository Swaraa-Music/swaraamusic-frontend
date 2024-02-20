import React from "react";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, tags }) => {
  return (
    <Helmet>
      <title>{title || "Swaraa Music - Home"}</title>
      <meta
        name="description"
        content={
          description ||
          "Swaraa Music are a leading Live Bollywood Asian Indian music group based in London. We are a collective team of professional vocalists and musicians specialising in all decades of Asian Indian popular music."
        }
      />
      <meta name="keywords" content={tags} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={"/logo192.png"} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default MetaDecorator;
