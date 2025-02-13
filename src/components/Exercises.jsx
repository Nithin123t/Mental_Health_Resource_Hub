import React from "react";
import "./Exercises.css";

const Exercises = () => {
  return (
    <section className="exercises">
      <div className="container">
        <h2>Mindfulness Exercises</h2>

        <div className="exercise-card">
          <h3>Breathing Meditation</h3>
          <p>
            Focus on your breath. Inhale deeply for a count of four, hold for
            four, and exhale for a count of four. Repeat this cycle to calm your
            mind and center your thoughts.
          </p>
          <button>Start Exercise</button>
        </div>

        <div className="exercise-card">
          <h3>Body Scan Meditation</h3>
          <p>
            Progressively relax each part of your body from head to toe,
            noticing any tension and releasing it. This practice helps increase
            body awareness and reduces stress.
          </p>
          <button>Start Exercise</button>
        </div>

        <div className="exercise-card">
          <h3>Mindful Walking</h3>
          <p>
            Take a slow walk, paying attention to every step. Feel the sensation
            of your feet touching the ground and observe your surroundings.
          </p>
          <button>Start Exercise</button>
        </div>

        <div className="exercise-card">
          <h3>Gratitude Journaling</h3>
          <p>
            Write down three things you're grateful for each day. This simple
            exercise helps shift focus towards positivity and mental well-being.
          </p>
          <button>Start Journaling</button>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
