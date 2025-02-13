import React from "react";
import "./Resources.css";
import { FaLeaf, FaSmile, FaHeart, FaCloudSun } from "react-icons/fa";

const resources = [
  {
    category: "Anxiety Resources",
    icon: <FaSmile className="category-icon" />,
    items: [
      {
        title: "Cognitive Behavioral Therapy (CBT)",
        description:
          "CBT is effective in managing anxiety by changing negative thought patterns. Many online platforms offer virtual CBT sessions.",
        link: "cognitive.html",
      },
      {
        title: "Breathing Exercises",
        description:
          "Breathing techniques like box breathing can calm acute anxiety. Apps like Calm and Headspace offer guided exercises.",
        link: "breathing.html",
      },
    ],
  },
  {
    category: "Depression Resources",
    icon: <FaHeart className="category-icon" />,
    items: [
      {
        title: "National Institute of Mental Health (NIMH)",
        description:
          "The NIMH offers information on depression symptoms, treatments, and support.",
        link: "https://www.nimh.nih.gov/health/topics/depression",
      },
      {
        title: "Peer Support Groups",
        description:
          "Online platforms provide peer-to-peer support to help manage depression.",
        link: "peer_support.html",
      },
    ],
  },
  {
    category: "Stress Relief Techniques",
    icon: <FaCloudSun className="category-icon" />,
    items: [
      {
        title: "Progressive Muscle Relaxation (PMR)",
        description:
          "This technique helps relieve physical stress by tensing and relaxing muscle groups.",
        link: "https://www.psychologytoday.com/us/therapists",
      },
      {
        title: "Yoga",
        description:
          "Yoga is a great way to reduce stress. Platforms like Yoga with Adriene offer free videos to get started.",
        link: "https://www.youtube.com/user/yogawithadriene",
      },
    ],
  },
  {
    category: "Mindfulness Resources",
    icon: <FaLeaf className="category-icon" />,
    items: [
      {
        title: "Mindfulness-Based Stress Reduction (MBSR)",
        description:
          "This program helps reduce stress using mindfulness and meditation practices. It’s available online at various centers.",
        link: "https://www.meditationapps.com/",
      },
      {
        title: "Headspace App",
        description:
          "Headspace offers guided mindfulness and meditation exercises tailored to various needs.",
        link: "https://www.headspace.com/",
      },
    ],
  },
];

const Resource = () => {
  return (
    <div className="resources-container">
             <h2>Resources</h2>
 

      <main>
        {resources.map((category, index) => (
          <section key={index} className="resource-category fade-in">
            <div className="category-title">
              {category.icon}
              <h2>{category.category}</h2>
            </div>
            <div className="resources">
              {category.items.map((resource, i) => (
                <div key={i} className="resource-card bounce">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="read-more">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer>
        <p>&copy; 2024 Mental Health Resources</p>
      </footer>
    </div>
  );
};

export default Resource;
