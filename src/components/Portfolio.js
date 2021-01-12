import React from "react";

// Array of 12 project objects
const projects = [
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
},
{
name: " ", 
appURL: " ",
description: " ",
thumbnail: " ",
GitHubURL: " ",
category: " "
}
]; 

export default function Portfolio(props) {
  return (
    <>
      {/* Portfolio Section  */}
      <div id="portfolio">
        <div className="container">
          <div className="section-title text-center center">
            <h2>Portfolio</h2>
            <hr />
          </div>
          <div className="categories">
            <ul className="cat">
              <li>
                <ol className="type">
                  <li>
                    <a href="#" data-filter="*" className="active">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".graphic">
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".illustration">
                      Node.js
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".mongo">
                      Mongo
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".sql">
                      SQL
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".react">
                      React
                    </a>
                  </li>
                </ol>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <div className="portfolio-items">
            
            {/* app number 1 */}
            <div className="row">
              <div className="col graphic">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="https://stevensjones.github.io/passwordGeneratorThirdEdition/"
                      title="password generator"
                      target="_blank"
                      rel="noreferrer"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Password Generator</h4>
                      </div>
                      <img
                        src="./img/portfolio/01-pwGen.jpg"
                        className="img-responsive"
                        alt="password generator"
                      />
                    </a>
                  </div>
                </div>
                <p>
                  Generate a password that meets your user specified criteria so
                  that your passwords are more secure.
                </p>
                <a
                  className="github"
                  href="https://github.com/StevenSJones/passwordGeneratorThirdEdition"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Code
                </a>
              </div>
              {/* app number 2  */}
              <div className="col graphic">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="https://stevensjones.github.io/codeQuizFourthEdition/"
                      title="code quiz"
                      target="_blank"
                      rel="noreferrer"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Code Quiz</h4>
                      </div>
                      <img
                        src="./img/portfolio/02-codeQuiz.jpg"
                        className="img-responsive"
                        alt="code quiz"
                      />
                    </a>
                  </div>
                </div>
                <p>
                  Javascript based game that challenges users with coding
                  related questions.
                </p>
                <a
                  className="github"
                  href="https://github.com/StevenSJones/codeQuizFourthEdition"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Code
                </a>
              </div>
              {/* app number 3  */}
              <div className="col graphic">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <a
                      href="https://stevensjones.github.io/WorkDayCalenderFifthEdition/"
                      title="workday calender"
                      target="_blank"
                      rel="noreferrer"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Workday Calender</h4>
                      </div>
                      <img
                        src="./img/portfolio/03-wDScheduler.jpg"
                        className="img-responsive"
                        alt="workday calender"
                      />
                    </a>
                  </div>
                </div>
                <p>
                  Work Day scheduler using javascript to create and save todos
                  throughout the workday, or any day.
                </p>
                <a
                  className="github"
                  href="https://github.com/StevenSJones/WorkDayCalenderFifthEdition"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Code
                </a>
              </div>
              {/* app number 4  */}
              <div className="row">
                <div className="col graphic">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://stevensjones.github.io/weatherDashboardSixthEdition/"
                        title="Weather Dashboard"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Weather Dashboard</h4>
                        </div>
                        <img
                          src="./img/portfolio/04-wDashboard.jpg"
                          className="img-responsive"
                          alt="weather dashboard"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    {" "}
                    The application retrieves weather data for the city of one's
                    choosing.
                  </p>
                  <a
                    className="github"
                    href="https://github.com/StevenSJones/weatherDashboardSixthEdition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
                {/*  app number 5  */}
                <div className="col illustration">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://jmuncrief.github.io/p1_location_info/"
                        title="city info"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>City Info</h4>
                        </div>
                        <img
                          src="./img/portfolio/05-cityInfo.jpg"
                          className="img-responsive"
                          alt="city info"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    This app allows a user to search current weather, current
                    news, and recreation areas nearby the city searched.
                  </p>
                  <a
                    className="github"
                    href="https://github.com/jmuncrief/p1_location_info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
                {/*  app number 6  */}
                <div className="col illustration">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://shielded-dawn-80021.herokuapp.com/"
                        title="note taker"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Note Taker</h4>
                        </div>
                        <img
                          src="./img/portfolio/06-noteTaker.jpg"
                          className="img-responsive"
                          alt="note taker"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    Allows a user to write, save, and delete notes with the
                    click of a button.
                  </p>
                  <a
                    className="github"
                    href="https://github.com/StevenSJones/expressNoteTakerNinthEdition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
              </div>
              {/* app number 7  */}
              <div className="row">
                <div className="col illustration">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://intense-castle-15409.herokuapp.com/"
                        title="eat da burger"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Eat Da Burger</h4>
                        </div>
                        <img
                          src="img/portfolio/07-eatDaBurger.jpg"
                          className="img-responsive"
                          alt="eat da burger"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    This application is a burger logger that allows the user to
                    create a burger of their choosing and save the burger for
                    later or devour it now!
                  </p>
                  <a
                    className="github"
                    href="https://github.com/StevenSJones/burger"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
                {/* app number 8  */}
                <div className="col illustration">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://glacial-taiga-04215.herokuapp.com/"
                        title="game tracker"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Game Tracker</h4>
                        </div>
                        <img
                          src="img/portfolio/08-gameTracker.jpg"
                          className="img-responsive"
                          alt="game tracker"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    This application is designed for users that want to compile
                    a collection of information pertaining to their favorite
                    games in their own database.
                  </p>
                  <a
                    className="github"
                    href=" https://github.com/robkellen/GameTracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
                {/* app number 9  */}
                <div className="col mongo">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://hidden-sea-72938.herokuapp.com/"
                        title="Workout Tracker"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Workout Tracker</h4>
                        </div>
                        <img
                          src="img/portfolio/09-fitnessTracker.jpg"
                          className="img-responsive"
                          alt="workout tracker"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    This app is designed to track a user's workout using
                    javascript, a Mongo database with a Mongoose schema and
                    route handling with Express.
                  </p>
                  <a
                    className="github"
                    href="https://github.com/StevenSJones/workoutTrackerEleventhEdition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
              </div>
              {/* app number 10  */}
              <div className="row">
                <div className="col mongo">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://github.com/StevenSJones/BudgetTrackerOnlineOfflineTwelfthEdition"
                        data-lightbox-gallery="gallery1"
                        title="Budget Tracker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="hover-text">
                          <h4>Budget Tracker</h4>
                        </div>
                        <img
                          src="img/portfolio/10-budgetTracker.jpg"
                          className="img-responsive"
                          alt="budget tracker"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    This app tracks a user's budget; both online and off, using
                    javascript, a Mongo database with a Mongoose schema and
                    route handling with Express as well as a logger using
                    Morganjs.
                  </p>
                  <a
                    className="github"
                    href="https://github.com/StevenSJones/BudgetTrackerOnlineOfflineTwelfthEdition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
                {/*  app number 11  */}
                <div className="col react">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href="https://5f88c380e358651e96f02101--competent-stonebraker-251e1d.netlify.app/gallery"
                        title="my react portfolio"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>My React Portfolio</h4>
                        </div>
                        <img
                          src="img/portfolio/11-reactPort.jpg"
                          className="img-responsive"
                          alt="my react portfolio"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    A React.js portfolio with multiple components demonstrating
                    my initial usage of react.
                  </p>
                  <a
                    className="github"
                    href="https://github.com/StevenSJones/my-react-portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
                {/*  app number 12  */}
                <div className="col react mongo illustration">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a
                        href=" https://cocktail-lounge.herokuapp.com/"
                        title="coctail lounge"
                        target="_blank"
                        rel="noreferrer"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Cocktail Lounge</h4>
                        </div>
                        <img
                          src="img/portfolio/12-cocktailLounge.jpg"
                          className="img-responsive"
                          alt="cocktail lounge"
                        />
                      </a>
                    </div>
                  </div>
                  <p>
                    Users can search for cocktail recipes by name, liquor type,
                    or other ingredients. Sign in and create an account and gain
                    the ability to save your favorites, and even create your own
                    recipes.
                  </p>
                  <a
                    className="github"
                    href="https://github.com/jmuncrief/p3_cocktail_lounge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
