import { useState } from 'react';
import '../Aluminum_leader/aluminum.css';

const Aluminum = () => {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const handleToggle = (index) => {
    setExpanded((prev) =>
      prev.map((exp, i) => (i === index ? !exp : exp))
    );
  };

  const texts = [
    'At the moment, we are the only major manufacturer of aluminum profiles in Middle Asia.',
    'The main field of activity is the production of aluminum profiles and their processing. Profiles are made on six modern, high-tech extrusion lines of European suppliers, includes 4000 tons, 2000 tons and 1000 tons presses. All production is fully automated, which eliminates a large amount of waste and improves the quality and accuracy of production, the factory employs only 1000+ people. Production capacity of the plant allows producing up to 36,000 tons of finished products per year.',
    'The production is located in free economic zone of the Republic of Uzbekistan in Navoi city. Convenient strategic location in the heart of Central Asia, as well as a well-equipped logistics city of Navoi. Our factory is 30 km kilometers from the airport, the railway stations and has easy access to the motorways which makes it easy to arrange the delivery of profiles to the client.',
    'BENKAM - is Tuned for success! And first of all, for success of our customers, our technical and technological capabilities, and qualified personnel from Europe, allow us to produce a high quality profile and ensure the timely execution of all orders to meet the needs of the most demanding customers.'
  ];

  return (
    <div className="aluminum">
      <div className="container">
        <div className="aluminum_main">
          <div className="aluminum_title">
            <h1>
              Aluminum <span>Leader</span>
            </h1>
          </div>

          {texts.map((text, index) => (
            <div
              className={`box1_aluminum ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              {index % 2 === 0 && <div className="aluminum_img1"></div>}
              <p onClick={() => handleToggle(index)}>
                {expanded[index] || text.split(' ').length <= 20
                  ? text
                  : text.split(' ').slice(0, 20).join(' ') + ' ...more'}
              </p>
              {index % 2 !== 0 && <div className="aluminum_img1"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aluminum;
