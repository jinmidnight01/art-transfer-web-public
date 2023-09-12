import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  // const classes = classNames(
  //   "site-footer center-content-mobile",
  //   topOuterDivider && "has-top-divider",
  //   className
  // );

  return (
    <div
      style={{
        zIndex: 1,
        height: 200,
        position: "fixed",
        width: "100%",
        bottom: 0,
      }}
    >
      <div
        className="reveal-from-left"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          // height: "100%",
          // width: '100%',
          position: "absolute",
          opacity: 0.2,
          // bottom: -20,
        }}
      >
        <img
          src={require("../../assets/images/left_bottom.jpg")}
          style={{
            height: 200,
            width: 1000,
          }}
          alt="left_bottom"
        />
      </div>

      <div
        className="reveal-from-right"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "absolute",
          // backgroundColor: 'green',
          width: "100%",
          opacity: 0.2,

          // height: "100%",
        }}
      >
        <img
          src={require("../../assets/images/right_bottom.jpg")}
          style={{
            height: 200,
            width: 1000,
          }}
          alt="right_bottom"
        />
      </div>

      {/* <img /> */}
    </div>
  );

  // return (
  //   <footer {...props} className={classes}>
  //     <div className="container">
  //       <div
  //         className={classNames(
  //           "site-footer-inner",
  //           topDivider && "has-top-divider"
  //         )}
  //       >
  //         <div className="footer-top space-between text-xxs">
  //           <Logo />
  //           {/* <FooterSocial /> */}
  //         </div>
  //         <div className="footer-bottom space-between text-xxs invert-order-desktop">
  //           <FooterNav />
  //           <div className="footer-copyright">
  //             Made by <a href="https://cruip.com">Cruip</a>. All right reserved
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
