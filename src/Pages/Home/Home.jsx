import React from 'react'
import Layout from '../../Components/Layouts/Layout';
import Section1 from './section1';
import Section2 from '../../Pages/Home/Section2.jsx'; // Assuming Section2 is a valid component
import Section3 from '../../Pages/Home/Section3.jsx'; // Assuming Section3 is a valid component
import Section4 from '../../Pages/Home/Section4.jsx'; // Assuming Section4 is a valid component 
import Section5 from  '../../Pages/Home/Section5.jsx';
import Section6 from '../../Pages/Home/Section6.jsx'; // Assuming Section6 is a valid component
import Section7 from  "../../Pages/Home/Section7.jsx";


const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
            <Section1 />
            {/* About Section 2 */}
            <Section2 />
            {/* Menu Section 3 */}
            <Section3 />
            {/* home promotion   Section 4 */}
            <Section4 />
            {/* Home Shop Section 5 */}
            <Section5 />
            {/* Home Section 6 blog */}
            <Section6 />
            {/**home contact section 7 */}
            <Section7/>

      </Layout>
    </>
  )
}

export default Home;