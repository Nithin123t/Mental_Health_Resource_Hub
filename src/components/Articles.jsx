import React, { useEffect, useState } from "react";
import "./Articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles.json")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="articles-container">
             <h2>Articles</h2>


      <main className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card slide-up">
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.link} className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <p>&copy; 2024 Mental Health Resources</p>
      </footer>
    </div>
  );
}

export default Articles;
