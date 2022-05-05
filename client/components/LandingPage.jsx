import React from 'react'
import {Link } from "react-router-dom";

function LandingPage () {

    return (
        <div className="home-main-div">
    <h1>Nau mai, haere mai ki a Pātaka!</h1>
    <div className='home-container'></div>
    <div className='home-values'>
        <p>Main home value greeting
</p>
    </div>
    <div className='home-facts'>
        <div className='fact1'>There is enough food produced in the world to feed every living human.</div>
        <div className='fact2'>New Zealand households throw away 157,389 tonnes of food a year. </div>
        <div className='fact3'>We throw away 29 million loaves of bread a year! Nearly one-third of the food we waste is vegetables.</div>
    </div>
    
    <Link to="/addlistings"><button>
              Got food?
            </button>
            </Link>

            <Link to="/listings"><button>
              Need food?
            </button>
            </Link>



            <div className='home-values'>
        <p>Food always tastes better when you share it with someone - Josh
</p>
<p>Connecting communities (whanaungitanga) through tackling food inequality
Reducing waste/environmental impact of wasted food (Kaitiakitanga) - Luke
</p>
    </div>

        </div>
      )
}




export default LandingPage

