import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string.isRequired,
};

const defaultProps = {
  country: "in",
  pageSize: 5,
};

/**
 *
 */
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (str) => {
    const b = str.substr(0, 4).normalize();
    return b[0].toUpperCase() + b.substr(1) + str.substr(4);
  };
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);

    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);

    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        News Monkey Top {capitalize(props.category)} Headlines
      </h1>
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        {articles.map((element) => {
          if (
            element.title &&
            element.description &&
            element.urlToImage &&
            element.url
          )
            return (
              <div className="container" key={element.url}>
                <div className="row">
                  <div className="col-md-4">
                    <NewsItem
                      title={element.title.slice(0, 45)}
                      description={element.description.slice(0, 88)}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                </div>
              </div>
            );
        })}
      </InfiniteScroll>
    </>
  );
};

News.prototypes = propTypes;
// #endregion

export default News;

// ----------- Class Based Component -------------
// import React from "react";
// import PropTypes from "prop-types";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

// // #region constants

// // #endregion

// // #region styled-components

// // #endregion

// // #region functions

// // #endregion

// // #region component
// const propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string.isRequired,
// };

// const defaultProps = {
//   country: "in",
//   pageSize: 5,
// };

// /**
//  *
//  */
// class News extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//     document.title = `${this.capitalize(props.category)} - NewsMonkey`;
//   }
//   capitalize(str) {
//     const b = str.substr(0, 4).normalize();
//     return b[0].toUpperCase() + b.substr(1) + str.substr(4);
//   }
//   async updateNews() {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.pageNo}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     const data = await fetch(url);
//     props.setProgress(30);
//     const parsedData = await data.json();
//     props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: true,
//     });
//     props.setProgress(100);
//   }
//   async componentDidMount() {
//     this.updateNews();
//   }
//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.pageNo}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     const data = await fetch(url);
//     const parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1 className="text-center">
//           News Monkey Top {this.capitalize(props.category)} Headlines
//         </h1>
//         {/* {this.state.loading && <Spinner />} */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >
//           {this.state.articles.map((element) => {
//             if (
//               element.title &&
//               element.description &&
//               element.urlToImage &&
//               element.url
//             )
//               return (
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-md-4" key={element.url}>
//                       <NewsItem
//                         title={element.title.slice(0, 45)}
//                         description={element.description.slice(0, 88)}
//                         imageUrl={element.urlToImage}
//                         newsUrl={element.url}
//                         author={element.author}
//                         date={element.publishedAt}
//                         source={element.source.name}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               );
//           })}
//         </InfiniteScroll>
//       </>
//     );
//   }
// }

// News.prototypes = propTypes;
// // #endregion

// export default News;

// Without infinite scroll - Pagination.
// import React from "react";
// import PropTypes from "prop-types";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";

// // #region constants

// // #endregion

// // #region styled-components

// // #endregion

// // #region functions

// // #endregion

// // #region component
// const propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string.isRequired,
// };

// const defaultProps = {
//   country: "in",
//   pageSize: 5,
// };

// /**
//  *
//  */
// class News extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//     document.title = `${this.capitalize(props.category)} - NewsMonkey`;
//   }
//   capitalize(str) {
//     const b = str.substr(0, 4).normalize();
//     return b[0].toUpperCase() + b.substr(1) + str.substr(4);
//   }
//   async updateNews() {
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0a55e008960d4d7fa4006f35b7790f72&page=${this.state.pageNo}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     const data = await fetch(url);
//     const parsedData = await data.json();
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }
//   async componentDidMount() {
//     this.updateNews();
//   }
//   handlePreviousClick = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
//     //   props.category
//     // }&apiKey=0a55e008960d4d7fa4006f35b7790f72&page=${
//     //   this.state.page - 1
//     // }&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false,
//     // });
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };
//   handleNextClick = async () => {
//     // this is how ceil to determine, if there is next page needed for pagination or not.
//     // if (
//     //   !(
//     //     this.state.page + 1 >
//     //     Math.ceil(this.state.totalResults / props.pageSize)
//     //   )
//     // ) {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
//     //     props.category
//     //   }&apiKey=0a55e008960d4d7fa4006f35b7790f72&page=${
//     //     this.state.page + 1
//     //   }&pageSize=${props.pageSize}`;
//     //   this.setState({ loading: true });
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();
//     //   this.setState({
//     //     page: this.state.page + 1,
//     //     articles: parsedData.articles,
//     //     loading: false,
//     //   });
//     // }
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };

//   render() {
//     return (
//       <div className="container my-3">
//         <h1 className="text-center">
//           News Monkey Top {this.capitalize(props.category)} Headlines
//         </h1>
//         {this.state.loading && <Spinner />}
//         {!this.state.loading &&
//           this.state.articles.map((element) => {
//             if (
//               element.title &&
//               element.description &&
//               element.urlToImage &&
//               element.url
//             )
//               return (
//                 <div className="row" key={element.url}>
//                   <div className="col-md-3">
//                     <NewsItem
//                       title={element.title.slice(0, 45)}
//                       description={element.description.slice(0, 88)}
//                       imageUrl={element.urlToImage}
//                       newsUrl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 </div>
//               );
//           })}
//         <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page === 1 ? true : false}
//             type="button"
//             class="btn btn-dark"
//             onClick={this.handlePreviousClick}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={
//               this.state.page + 1 >
//               Math.ceil(this.state.totalResults / props.pageSize)
//             }
//             type="button"
//             class="btn btn-dark"
//             onClick={this.handleNextClick}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// News.defaultProps = defaultProps;
// News.prototypes = propTypes;
// // #endregion

// export default News;
