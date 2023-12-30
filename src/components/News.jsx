import { useEffect, useState } from "react";
import React from "react";
import NewsItems from "./NewsItems";
// import data from "../utils";

const createCard = (content) => {
  return (
    <NewsItems
      urlToImage={content.urlToImage}
      title={content.title}
      description={content.description}
      url={content.url}
      key={content.url}
      author={content.author}
      publishedAt={content.publishedAt}
    />
  );
};

function News() {
  const [newsItems, setNewsItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=02eeee76beb94b6384dd03c6ec53f9ac`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNewsItems(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div position-absolute>
      <h1 className="d-flex justify-content-center ">
        NewsLetter - Top Headlines
      </h1>
      <div className="container text-center my-5 ">
        <div className="row row-cols-3 ">{newsItems.map(createCard)}</div>
      </div>
    </div>
  );
}

export default News;
