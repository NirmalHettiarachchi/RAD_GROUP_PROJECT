import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "rgb(233, 223, 223)", color: "black" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Develop & Design RAD-Team © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
