import React, { Component } from "react";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    //state is equal to an object. projects is an array of objects. the state is set here to an array of objects
    this.state = {
      projects: [
        {
          name: "Password Generator",
          appURL:
            "https://stevensjones.github.io/passwordGeneratorThirdEdition/",
          description:
            "Generate a password that meets your user specified criteria so that your passwords are more secure.",
          thumbnail: "01-pwGen.jpg",
          gitHubURL:
            "https://github.com/StevenSJones/passwordGeneratorThirdEdition",
          category: "javascript",
        },
        {
          name: "Code Quiz",
          appURL: "https://stevensjones.github.io/codeQuizFourthEdition/",
          description:
            "Javascript based game that challenges users with coding related questions.",
          thumbnail: "02-codeQuiz.jpg",
          gitHubURL: "https://github.com/StevenSJones/codeQuizFourthEdition",
          category: "javascript",
        },
        {
          name: "Workday Calender",
          appURL: "https://stevensjones.github.io/WorkDayCalenderFifthEdition/",
          description:
            "Work Day scheduler using javascript to create and save todos throughout the workday, or any day.",
          thumbnail: "03-wDScheduler.jpg",
          gitHubURL:
            "https://github.com/StevenSJones/WorkDayCalenderFifthEdition",
          category: "javascript",
        },
        {
          name: "Weather Dashboard",
          appURL:
            "https://stevensjones.github.io/weatherDashboardSixthEdition/",
          description:
            "The application retrieves weather data for the city of one's choosing.",
          thumbnail: "04-wDashboard.jpg",
          gitHubURL:
            "https://github.com/StevenSJones/weatherDashboardSixthEdition",
          category: "javascript",
        },
        {
          name: "City Info",
          appURL: "https://jmuncrief.github.io/p1_location_info/",
          description:
            "This app allows a user to search current weather, current news, and recreation areas nearby the city searched.",
          thumbnail: "05-cityInfo.jpg",
          gitHubURL: "https://github.com/jmuncrief/p1_location_info",
          category: "javascript",
        },
        {
          name: "Note Taker",
          appURL: "https://shielded-dawn-80021.herokuapp.com/",
          description:
            "Allows a user to write, save, and delete notes with the click of a button.",
          thumbnail: "06-noteTaker.jpg",
          gitHubURL:
            "https://github.com/StevenSJones/expressNoteTakerNinthEdition",
          category: "nodejs",
        },
        {
          name: "Eat Da Burger",
          appURL: "https://intense-castle-15409.herokuapp.com/",
          description:
            "This application is a burger logger that allows the user to create a burger of their choosing and save the burger for later or devour it now!",
          thumbnail: "07-eatDaBurger.jpg",
          gitHubURL: "https://github.com/StevenSJones/burger",
          category: "nodejs",
        },
        {
          name: "Game Tracker",
          appURL: "https://glacial-taiga-04215.herokuapp.com/",
          description:
            "This application is designed for users that want to compile a collection of information pertaining to their favorite games in their own database.",
          thumbnail: "08-gameTracker.jpg",
          gitHubURL: "https://github.com/robkellen/GameTracker",
          category: "mongo",
        },
        {
          name: "Workout Tracker",
          appURL: "https://hidden-sea-72938.herokuapp.com/",
          description:
            "This app is designed to track a user's workout using javascript, a Mongo database with a Mongoose schema and route handling with Express.",
          thumbnail: "09-fitnessTracker.jpg",
          gitHubURL:
            "https://github.com/StevenSJones/workoutTrackerEleventhEdition",
          category: "mongo",
        },
        {
          name: "Budget Tracker",
          appURL:
            "https://github.com/StevenSJones/BudgetTrackerOnlineOfflineTwelfthEdition",
          description:
            "This app tracks a user's budget; both online and off, using javascript, a Mongo database with a Mongoose schema and route handling with Express as well as a logger using Morganjs.",
          thumbnail: "10-budgetTracker.jpg",
          gitHubURL:
            "https://github.com/StevenSJones/BudgetTrackerOnlineOfflineTwelfthEdition",
          category: "react",
        },
        {
          name: "My React Portfolio",
          appURL:
            "https://5f88c380e358651e96f02101--competent-stonebraker-251e1d.netlify.app/gallery",
          description:
            "A React.js portfolio with multiple components demonstrating my initial usage of react.",
          thumbnail: "11-reactPort.jpg",
          gitHubURL: "https://github.com/StevenSJones/my-react-portfolio",
          category: "react",
        },
        {
          name: "Cocktail Lounge",
          appURL: "https://cocktail-lounge.herokuapp.com/",
          description:
            "Users can search for cocktail recipes by name, liquor type, or other ingredients. Sign in and create an account and gain the ability to save your favorites, and even create your own recipes.",
          thumbnail: "12-cocktailLounge.jpg",
          gitHubURL: "https://github.com/jmuncrief/p3_cocktail_lounge",
          category: "mern",
        }
      ],
      filteredProjects: []
    };
  }
  //the event referrenced below is the onClick
  filterProject(event) {
    event.preventDefault();
    let categoryFilter = event.target.dataset.category;
    //the this.state below comes from the binding when a button is pressed below.
    //this logic is so that the all button works after another button is pressed. When that wasn't there the list was empty when I pressed all after having pressed any other category button.
    if (categoryFilter === "all") {
      this.setState({ filteredProjects: this.state.projects });
    } else {
      let projectSubset = this.state.projects.filter((project) => {
        return (project.category === categoryFilter);
      });
    
    this.setState({ filteredProjects: projectSubset });
  }
}

  // life cycle method: when Portfolio component is loaded into the DOM, do the following. Think of ComponentDidMount as a question. Did Component Mount? If yes, then projects which has had its state value set is copied to filteredProjects just below.
  componentDidMount() {
    this.setState({ filteredProjects: this.state.projects });
  }

  //this is the render associated with a class component that is NOT present in the functional component.
  //parameters project and index are value:index.
  //I had projectCards = this.state.projects and that set the state to the master array with all 12 everytime. That was the bug.
  render() {
    let projectCards = this.state.filteredProjects.map((project, index) => {
      return (
        <div key={index} className="col graphic">
          <div className="portfolio-item">
            <div className="hover-bg">
              <a
                href={project.appURL}
                title={project.name}
                target="_blank"
                rel="noreferrer"
                data-lightbox-gallery="gallery1"
              >
                <div className="hover-text">
                  <h4>{project.name}</h4>
                </div>
                <img
                  src={"./img/portfolio/" + project.thumbnail}
                  className="img-responsive"
                  alt={"project.name"}
                />
              </a>
            </div>
          <p>{project.description}</p>
          <a
            className="github"
            href={project.gitHubURL}
            target="_blank"
            rel="noreferrer"
            >
            View GitHub Code
          </a>
            </div>
        </div>
      );
    });
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
                      <a
                        data-category="all"
                        className="active"
                        // when clicked, this from the projects is bound to the this in filteredProject so filteredProjects knows what this we are referring to above in the function definition of filteredProject(){}. 
                        onClick={this.filterProject.bind(this)}
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        data-category="javascript"
                        onClick={this.filterProject.bind(this)}
                      >
                        Javascript
                      </a>
                    </li>
                    <li>
                      <a
                        data-category="nodejs"
                        onClick={this.filterProject.bind(this)}
                      >
                        Node.js
                      </a>
                    </li>
                    <li>
                      <a
                        data-category="mongo"
                        onClick={this.filterProject.bind(this)}
                      >
                        Mongo
                      </a>
                    </li>
                    <li>
                      <a
                        data-category="react"
                        onClick={this.filterProject.bind(this)}
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        data-category="mern"
                        onClick={this.filterProject.bind(this)}
                      >
                        MERN
                      </a>
                    </li>
                  </ol>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
            <div className="portfolio-items">
              {/* app number 1 */}
              <div className="row">{projectCards}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
