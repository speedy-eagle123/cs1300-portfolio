import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import CourseDescription from './components/CourseDescription';
import ProjectInfo from './projects.json'
import ProjectPreview from './components/ProjectPreview';
import AboutMe from './components/AboutMe';

function App() {
    return (
        <div className="App">
            <Hero />
            {/* <CourseDescription /> */}
            <AboutMe />
            {
                ProjectInfo['project-previews'].map((info, idx) => (
                    <ProjectPreview
                        title={info.title}
                        description={info.description}
                        image={info.image}
                        reversed={idx % 2 !== 0}
                        link={info.link}
                    />
                ))
            }
        </div>
    );
}

export default App;
