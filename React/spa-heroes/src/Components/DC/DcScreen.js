import React from 'react';
import HeroList from '../Heroes/HeroList';

const DcScreen = () => {
    return (
        <div>
            <h1>DC screen</h1>
            <hr />

            <HeroList publisher="DC Comics"/>
        </div>
    );
}
 
export default DcScreen;
