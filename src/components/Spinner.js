import React from "react";
import PropTypes from "prop-types";
import loading from "../loading.gif";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
// #endregion

export default Spinner;

// ----------- Function Based Component -------------
// import React from "react";
// import PropTypes from "prop-types";
// import loading from "../loading.gif";

// // #region constants

// // #endregion

// // #region styled-components

// // #endregion

// // #region functions

// // #endregion

// // #region component
// const propTypes = {};

// const defaultProps = {};

// /**
//  *
//  */
// class Spinner extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="text-center">
//         <img src={loading} alt="loading" />
//       </div>
//     );
//   }
// }

// Spinner.propTypes = propTypes;
// Spinner.defaultProps = defaultProps;
// // #endregion

// export default Spinner;
