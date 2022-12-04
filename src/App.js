import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import CourseDescription from './components/CourseDescription';
import ProjectInfo from './projects.json'
import ProjectPreview from './components/ProjectPreview';

function App() {
    return (
        <div className="App">
            <Hero />
            {/* <CourseDescription /> */}
            {
                ProjectInfo['project-previews'].map((info, idx) => (
                    <ProjectPreview
                        title={info.title}
                        description={info.description}
                        image={info.image}
                        reversed={idx % 2 !== 0}
                    />
                ))
            }
        </div>
    );
}

export default App;
