import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#e9dfdf", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Develop & Design RAD-Team © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default Footer;
