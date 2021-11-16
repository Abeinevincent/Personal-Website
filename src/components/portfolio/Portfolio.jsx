import "./portfolio.css";

function Portfolio() {

  return (
    <>
      <div className="portfolio" id="portfolio">
        <h2>Portfolio</h2>
        <ul className="portfolioList">
          <li className="active">Featured</li>
          <li>Web App</li>
          <li>Mobile App</li>
          <li>Featured</li>
          <li>Featured</li>
        </ul>
        <div className="container">
          <div className="item">
            <img className="itemImg" src="assets/writing.png" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img className="itemImg" src="assets/writing.png" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img className="itemImg" src="assets/writing.png" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img className="itemImg" src="assets/writing.png" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img className="itemImg" src="assets/writing.png" alt="" />
            <h3>Banking App</h3>
          </div>
          <div className="item">
            <img className="itemImg" src="assets/writing.png" alt="" />
            <h3>Banking App</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
