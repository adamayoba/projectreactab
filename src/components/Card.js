import React from 'react';



const Card = (props) => {
       const {country} = props;
       
       

       const NumberFormat = (x) => {
           return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
       }
    
    return (
        
          <li className = "card"> 
              <img src={country.flags.svg} alt="Couleur du Pays" />
              <div className="data-container">
                  <ul>
                      <li>{country.name.common}</li>
                      <li>{country.capital}</li>
                      <li>{country.region}</li>
                      <li>Pop.{NumberFormat(country.population)}</li>
                  </ul>
              </div>
             
        </li> 
        
    );
};

export default Card;