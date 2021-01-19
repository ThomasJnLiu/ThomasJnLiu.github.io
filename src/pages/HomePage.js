import React from "react";

const HomePage = () => (
  <>
    <div className="homepage">
      <div className="profileimg-container">
        {" "}
        <img src={process.env.PUBLIC_URL + "/img/Thomas.png"} />
      </div>

      <div className="homepage-text">
        <h1>Thomas Liu</h1>
        <p>
          I'm a passionate front-end developer and full time student in the
          Digital Futures program at OCAD University.
        </p>
        <p>
          My journey in front-end development started with my interest in
          design, where I began using Figma and Adobe programs such as Photoshop
          and Illustrator. I later leveraged my graphic design background to
          conceptualize and draft user interfaces to implement using my in-depth
          knowledge of React, a popular front-end framework.
        </p>
        <p>
          I enjoy collaborating with peers to create amazing projects, as well
          as combining my experience with design and front-end technologies to
          make responsive web applications.
        </p>
      </div>
    </div>
  </>
);

export default HomePage;
