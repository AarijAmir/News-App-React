import React from "react";
import PropTypes from "prop-types";

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
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = propTypes;
NewsItem.defaultProps = defaultProps;
// #endregion

export default NewsItem;

// --------- Class Based Component -----------
// import React from "react";
// import PropTypes from "prop-types";

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
// class NewsItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } =
//       this.props;
//     return (
//       <div className="my-3">
//         <div className="card">
//           <span
//             class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
//             style={{ left: "90%", zIndex: "1" }}
//           >
//             {source}
//           </span>
//           <img src={imageUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}... </h5>
//             <p className="card-text">{description}...</p>
//             <p class="card-text">
//               <small class="text-body-secondary">
//                 By {!author ? "unknown" : author} on{" "}
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// NewsItem.propTypes = propTypes;
// NewsItem.defaultProps = defaultProps;
// // #endregion

// export default NewsItem;
