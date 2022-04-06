import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          width: "18rem",
          borderRadius: "30px",
          border: "4px solid white",
          margin: "auto",
          backgroundImage: "linear-gradient(to bottom right, #5609d3, white)",
        }}
      >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn  btn-sm "
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text">
              by {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
