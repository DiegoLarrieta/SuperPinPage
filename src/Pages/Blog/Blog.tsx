import React from "react";
import BlogCard from "./BlogCard";
import Header from "../../Components/Header/Header";
import { Spin6,SpinADN } from "../../assets/images";

const Blog: React.FC = () => {
  return (
    <>
      <style>
        {`
          .blog-container {
            padding: 5vh 2vw;
            max-width: 1200px;
            margin: 0 auto;
          }

          .blog-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: space-between;
          }

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
          }

          .blog-text {
            flex: 1;
            max-width: 60%;
          }

          .blog-text h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .blog-text p {
            font-size: 1.1rem;
            margin-bottom: 20px;
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
            .blog-cards {
              flex-direction: column;
            }

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
      <Header />
      <div className="blog-container">
        <h1>Blog</h1>
        <div className="blog-cards">
          <BlogCard
            title="Strength does not come from winning"
            image={Spin6}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus, fugiat minus!"
            author="Olivia Gribben"
            date="Oct 4, 2023"
          />
          <BlogCard
            title="Titulo de Blog 2"
            image={SpinADN}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloribus, fugiat minus!"
            author="Olivia Gribben"
            date="Oct 4, 2023"
          />
          {/* Add more BlogCard components here */}
        </div>
      </div>
    </>
  );
};

export default Blog;
