import React from 'react';
import './Testimonials.css';


const Testimonials = () => {
    const teamMembers = [
        {
          name: 'Nom Prénom',
          role: "Consultant en financement de l'innovation - Biotech, Medtech, Santé - Lyon",
          image:'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Emmanuelle PION',
          role: "Consultante en stratégies d'innovation - Acculturation, Projets - Lyon",
          image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Léa BUNNENS',
          role: "Directrice R&D - Stratégie, Impact Model - PhD Science de gestion & Business model - Lyon",
          image: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Perrine BOURGEOIS',
          role: "Consultante en financement de l'innovation - Biotech, Medtech, Santé - Lyon",
          image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Elodie PERRACHON',
          role: "Consultante en financement de l'innovation - Responsable RSE, CleanTech, Chimie - Lyon",
          image: 'https://images.pexels.com/photos/325531/pexels-photo-325531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      ];

      const teamMembers1 = [
        {
          name: 'Nom Prénom',
          role: "Consultant en financement de l'innovation - Biotech, Medtech, Santé - Lyon",
          image:'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Emmanuelle PION',
          role: "Consultante en stratégies d'innovation - Acculturation, Projets - Lyon",
          image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Léa BUNNENS',
          role: "Directrice R&D - Stratégie, Impact Model - PhD Science de gestion & Business model - Lyon",
          image: 'https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Perrine BOURGEOIS',
          role: "Consultante en financement de l'innovation - Biotech, Medtech, Santé - Lyon",
          image: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
          name: 'Elodie PERRACHON',
          role: "Consultante en financement de l'innovation - Responsable RSE, CleanTech, Chimie - Lyon",
          image: 'https://images.pexels.com/photos/1222345/pexels-photo-1222345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      ];

      return (
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className={`team-member ${index % 2 === 0 ? 'up' : 'down'}`} key={index}>
              <div className="image-container">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-description">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
          {teamMembers1.map((member, index) => (
            <div className={`team-member ${index % 2 === 0 ? 'up' : 'down'}`} key={index}>
              <div className="image-container">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-description">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
          <div className="button-container">
            <button className="expert-button">MEET OUR EXPERTS</button>
          </div>
        </div>
      );
  };

export default Testimonials;