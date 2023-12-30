import React from "react";

function NewsItems(props) {
  return (
    <div>
      <div className="card">
        <img
          src={props.urlToImage ? props.urlToImage : ""}
          className="card-img-top"
          alt=" "
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <footer className="blockquote-footer">
            Publish at {props.publishedAt}
            <cite title="Source Title"> By {props.author}</cite>
          </footer>
          <a href={props.url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
