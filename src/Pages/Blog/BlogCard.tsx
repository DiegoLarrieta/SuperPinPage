import React from "react";

const BlogCard: React.FC<{
  title: string;
  image: string;
  content: string;
  author: string;
  date: string;
}> = ({ title, image, content, author, date }) => {
  return (
    <>
      <style>
        {`
          .blog-card {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            align-items: center;
            width: 100%;
            box-sizing: border-box;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .blog-text {
            flex: 1;
            max-width: 60%;
            color: #333; /* Change the font color here */

            
          }

          .blog-text h2 {
            font-size: 2rem;
            margin-bottom: 10px;
            color: #333; /* Change the font color here */

          }

          .blog-text p {
            font-size: 1.1rem;
            margin-bottom: 20px;
            color: #666; /* Change the font color here */

          }

          .author-info {
            font-size: 0.9rem;
            color: gray;
          }

          .blog-image {
            max-width: 35%;
          }

          .blog-image img {
            width: 100%;
            border-radius: 8px;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .blog-card {
              flex-direction: column;
              text-align: center;
            }

            .blog-text {
              max-width: 100%;
            }

            .blog-image {
              max-width: 100%;
              margin-top: 20px;
            }
          }
        `}
      </style>

      <div className="blog-card">
        <div className="blog-text">
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="author-info">
            <span>By {author}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="blog-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
