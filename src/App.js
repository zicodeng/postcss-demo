import React from 'react';
import Circle from 'components/circle/Circle';
import Grid from 'components/grid/Grid';

// All stylesheets import needs to use relative path.
// Named reference is used to refer to a specific stylesheet import.
// Anonymous reference can be used when there is only one stylesheet import.
import './App.css';

class App extends React.Component {
    render() {
        return (
            // className for global style.
            // styleName for local style.
            <div className="container">
                <div styleName="title">Hello</div>
                <Circle />
                <Grid />
            </div>
        );
    }
}

export default App;
