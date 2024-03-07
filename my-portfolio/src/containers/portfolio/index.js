import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeader";
import CMSHomePage from "../../images/CMSHomePage.png";
import EcommerceHomePage from "../../images/EcommerceHomePage.png";
import Discord from "../../images/Discord.png";
import SpotifyApp from "../../images/SpotifyApp.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "CMS Dashboard",
    image: CMSHomePage,
    link: "https://github.com/smngvlkz/cms-dashboard",
  },
  {
    id: 2,
    name: "Ecommerce Website",
    image: EcommerceHomePage,
    link: "https://github.com/smngvlkz/ecommerce-store",
  },
  {
    id: 2,
    name: "Discord Clone",
    image: Discord,
    link: "https://github.com/smngvlkz/discord-clone-app",
  },
  {
    id: 2,
    name: "Spotify Clone",
    image: SpotifyApp,
    link: "https://github.com/smngvlkz/spotify-clone-app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "Projects",
  },
];
const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }

  function handleVisit(link) {
    window.open(link, "_blank");
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsFillGrid3X3GapFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={item.id}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link}>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleVisit(item.link)}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
