import React from 'react';
import Box from '../box/box';

const boxrow = (props) => {
    return (
        <>
            
            <div className="row justify-content-center">
                <div className="col-auto">
                    Child component
                </div>


            </div>
            <div className="row" style={props.styles.boxrow}>
                <div className="col-12 col-sm-6">
                    <div className="row justify-content-center">
                        <Box styles={props.styles.box}/>
                    </div>

                </div>
                <div className="col-12 col-sm-6">
                    <div className="row justify-content-center">
                        <Box styles={props.styles.box}/>
                    </div>
                </div>
            </div>

            

        </>
        

    );
}

export default boxrow;