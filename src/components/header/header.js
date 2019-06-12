import React from 'react';

const header = () => {
    return (
        <header className="jumbotron" style={{backgroundColor:"#103c42",color:"#05a19c"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Project description</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 text-white">
                        When button one is clicked css styled component is activated i.e. a styled component
                        wraps the cockpit area and background property of same color is automatically passed down 
                        to children and grandchilren components
                    </div>
                    <div className="col-12 col-sm-6 text-white">
                        When button 2 is clicked then normal css styling classes are used and different background colors are 
                        passed to child and grandchild component.
                    </div>
                </div>
            </div>
        </header>
    );
}

export default header;