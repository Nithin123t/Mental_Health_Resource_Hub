import React from 'react';
import './Home.css';
import { FaBrain, FaLeaf, FaHeadphones, FaUsers, FaBookOpen, FaSmile, FaLightbulb } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-wrapper">
        <h1 className="fade-in">Your Path to Mental Wellness</h1>
        <p className="slide-up">Engage with resources that promote emotional well-being.</p>


      {/* Info Cards */}
      <section className="info-container">
        {infoData.map((info, index) => (
          <InfoCard key={index} icon={info.icon} title={info.title} description={info.description} />
        ))}
      </section>

      {/* Quick Mental Health Tips */}
      <section className="tips-section">
        <h2>Quick Mental Health Tips</h2>
        <div className="tips-container">
          {mentalHealthTips.map((tip, index) => (
            <div key={index} className="tip-card bounce">
              <FaLightbulb className="tip-icon" />
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Inspirational Stories</h2>
        {storyData.map((story, index) => (
          <Story key={index} quote={story.quote} author={story.author} />
        ))}
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <h2>Explore Our Articles</h2>
        {articleData.map((article, index) => (
          <Article key={index} title={article.title} excerpt={article.excerpt} />
        ))}
      </section>
    </div>
  );
}

// Data for Cards
const infoData = [
  { icon: <FaBrain />, title: "Mindfulness Exercises", description: "Experience mental clarity through guided mindfulness practices." },
  { icon: <FaLeaf />, title: "Holistic Healing", description: "Explore holistic approaches to improve your overall mental health." },
  { icon: <FaHeadphones />, title: "Relaxing Audio", description: "Listen to soothing music and nature sounds for stress relief." },
  { icon: <FaUsers />, title: "Support Groups", description: "Join our friendly community to share and grow together." },
  { icon: <FaBookOpen />, title: "Educational Resources", description: "Read expert insights and research-backed articles." }
];

const storyData = [
  { quote: "Mindfulness has transformed my perspective on life!", author: "- Riley T." },
  { quote: "I found a supportive community here that truly listens.", author: "- Jordan W." },
  { quote: "The relaxation techniques helped me sleep better every night.", author: "- Morgan S." }
];

const articleData = [
  { title: "Embracing Mindfulness", excerpt: "Discover how mindfulness can enrich your life every day." },
  { title: "Managing Stress Effectively", excerpt: "Proven techniques to maintain calmness in challenging times." },
  { title: "Finding Emotional Balance", excerpt: "Steps to improve mental resilience and well-being." }
];

const mentalHealthTips = [
  "Take deep breaths when feeling overwhelmed.",
  "Get at least 7-8 hours of sleep every night.",
  "Spend time in nature to refresh your mind.",
  "Write down three things you're grateful for every day.",
  "Stay hydrated and eat a balanced diet."
];

// Components
function InfoCard({ icon, title, description }) {
  return (
    <div className="info-card bounce">
      <div className="icon-container">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Story({ quote, author }) {
  return (
    <div className="story-card fade-in">
      <FaSmile className="quote-icon" />
      <p>{quote}</p>
      <h4>{author}</h4>
    </div>
  );
}

function Article({ title, excerpt }) {
  return (
    <div className="article-card slide-up">
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <button className="read-more">Learn More</button>
    </div>
  );
}

export default Home;
