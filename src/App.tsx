import './App.scss';
import Navigation from './sections/Navigation';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
	return <>
		<Navigation />
		<main>
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	</>;
}

export default App;
