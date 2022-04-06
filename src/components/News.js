// import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from "react";
import { forwardRef, useImperativeHandle } from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props,ref) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  const fetchMoreData = async () => {
    setPage({ page: page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=48366befdff24ac0859ee0005980b582&page=${page}&pageSize=20`;
    let data = await fetch(url);
    setLoading(true);

    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(totalResults);
  };
 
  
    
  
  const updateNews = async () => {
    // {  props.setbar=()=>{props.setbar(10)};
    props.setProgressbar(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=48366befdff24ac0859ee0005980b582&page=${page}&pageSize=20`;
    let data = await fetch(url);
    setLoading(true);

    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    props.setProgressbar(100);
    setLoading(false);
    console.log(totalResults);
    //    props.setbar(100);
  };

  document.title = `Global News-${capitalizeFirstLetter(props.category)}`;

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <h2
        className="text-center"
        style={{ color: "white", marginTop: "85px", marginBottom: "20px" }}
      >
        Global News-Top {capitalizeFirstLetter(props.category)} headlines{" "}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/D35S3HLC3ZEYPH4ECT3FGLJMQY.jpg&w=1440"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
          }
export default forwardRef(News) ;
News.defaultProps = {
  country: "in",
  category: "general",
  page: 1,
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};


