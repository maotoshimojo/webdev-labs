import React from 'react';
import NavBar from './components/NavBar';
import Suggestions from './components/Suggestions';
import Stories from './components/Stories';
import Posts from './components/Posts';

class App extends React.Component {  

    render () {
        return (
            <div>
                <NavBar title="Photo App" username="my user" />
                <aside>
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>
            </div>
        );
    }
}

export default App;
