import ProjectFrame from "../components/ProjectFrame";
import memoryHigh from "../images/memoryHighscores.png";
import tictactoe from "../images/tictactoe.png";
import drCarrot from "../images/drCarrot.png";
import expore from "../images/expore.png";
import wdClasses from "../images/wdClasses.png";
import germanQuizCards from "../images/germanQuizCards.png";
import bangwa from "../images/bangwa.png";
import backToTheBurger from "../images/backToTheBurger.png";
import movieApp from "../images/movieApp.png";

export default function Projects() {
  return (
    <section id="work">
      <h2 className="p-2">Check out my web pages and projects</h2>
      <h3>Projects on render may take up to 30 seconds to load</h3>
      <div className="pages mx-auto">
        <ProjectFrame
          image={memoryHigh}
          link={"https://memogame.onrender.com"}
          title={"Memory Game with High Scores"}
          description={
            "React + Express + MongoDB: Memory game that stores the highest \
					scores in a Mongo database."
          }
        />
        <ProjectFrame
          image={tictactoe}
          link={"https://andreglock.github.io/tictactoe/"}
          title={"Tic Tac Toe"}
          description={
            "Play Tic Tac Toe against an AI, made with React and Redux."
          }
        />
        <ProjectFrame
          image={drCarrot}
          link={"https://drcarrot.github.io/"}
          title={"Tiny Ecology"}
          description={
            "This is the professional page of Dr. Stephanie Jurburg, powered by Angular."
          }
        />
        <ProjectFrame
          image={expore}
          link={"https://expore.onrender.com/"}
          title={"Expore"}
          description={
            "React + Express + MongoDB: Universe builder tool. Done in a two \
					person team, this was the final project of a Fullstack intensive training"
          }
        />
        <ProjectFrame
          image={wdClasses}
          link={"https://andreglock.github.io/wd21-classes-react/#/"}
          title={"Notes from Web Development Classes"}
          description={
            "Here you can find notes from our Fullstack intensive training as well \
					as links with useful web developer tips and tools."
          }
        />
        <ProjectFrame
          image={germanQuizCards}
          link={"https://andreglock.github.io/german-quiz-cards/"}
          title={"German Quiz Cards"}
          description={"Learn German by matching the verbs with the pictures."}
        />
        <ProjectFrame
          image={bangwa}
          link={"https://andreglock.github.io/gregorian-to-bangwa-converter/"}
          title={"Bangwa Day Calculator"}
          description={
            "Calculator of the Bangwa week day from the gregorian calendar."
          }
        />
        <ProjectFrame
          image={backToTheBurger}
          link={"https://dcihackathon.herokuapp.com/#/menu"}
          title={"Back to the Burger"}
          description={
            "Mock up of a restaurant page with online ordering. This page was made \
					in a weekend for a hackaton. Thogether with a junior developer and two marketers"
          }
        />
        <ProjectFrame
          image={movieApp}
          link={"https://andreglock.github.io/movie-app/#/trending"}
          title={"Movie App"}
          description={
            "Initially made in React this Movie Application was then converted \
					to Angular. Powered by TMDB"
          }
        />
        <ProjectFrame
          image={movieApp}
          link={"https://axios-ssrf.onrender.com/"}
          title={"Movie App with SSRF"}
          description={
            "Same as the Movie app, but with an SSRF vulnerability built in on purpose"
          }
        />
      </div>
    </section>
  );
}
