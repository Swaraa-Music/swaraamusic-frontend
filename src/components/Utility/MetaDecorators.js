import React from "react";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, tags }) => {
  MetaDecorator.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags} />
    </Helmet>
  );
};

export default MetaDecorator;
