import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Denise Tuominen</h2>
          <ul>
            <li>
            I am a highly motivated Web Content Specialist with a long-standing background in the industry.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/denise-tuominen-9170989a/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="assets/documents/Denise Tuominen Resume.pdf"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS, JaveScript, jquery, Local Storage, Webh APIs, Third-Party APIs, Server-Side APIs, Node.js, Object-Oriented Programming, Express.js, SQL, Object-Relational Mapping (ORM), Model View Controller (MVC), Regex, Progressive Web Allications (PWA) and React
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;