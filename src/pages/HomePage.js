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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          rhoncus tortor quis lorem commodo ullamcorper. Vivamus ipsum ex,
          dictum id pulvinar nec, dignissim vitae dui. Proin porttitor dictum
          nisi vel posuere. Nullam eget neque orci. Sed tristique nisl ac felis
          vulputate scelerisque. Duis vulputate et est ac ultrices. Etiam mollis
          lacinia dignissim. Maecenas ac massa eu elit facilisis bibendum in
          quis quam. Praesent a mi sed sapien scelerisque porta. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed ullamcorper auctor tellus eget dapibus. Nunc posuere,
          elit ac cursus tristique, orci neque viverra mauris, sed cursus nunc
          mauris in mi. Praesent non tincidunt lacus. Sed lobortis, eros eu
          convallis tristique, ligula est mollis libero, vel euismod arcu velit
          at sapien. Pellentesque nunc dui, sodales at vulputate et, aliquet et
          nulla.
        </p>
      </div>
    </div>
  </>
);

export default HomePage;
