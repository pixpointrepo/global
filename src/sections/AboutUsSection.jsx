
/* eslint-disable */
import { motion } from 'framer-motion';

import TeamMemberComponent from '../components/TeamMemberComponent';
import { teamMembers } from '../data/TeamMembersInfo';

const statistics = [
  { title: '500+', subtitle: 'Visa Success', description: 'More than 500 students have fulfilled their dream of obtaining international education and have leaped towards a better future.' },
  { title: '50+', subtitle: 'Scholarships', description: 'At Global Consultancy, more than 50 students have been accepted with full scholarships at renowned universities.' },
  { title: '1000+', subtitle: 'Universities', description: 'More than a thousand universities and colleges to choose from to continue your education.' },
];



const AboutUsSection = () => {
  return (
    <section className=" md:px-24 px-6 py-8">
      {/* Intro Section */}
      <div className=' mb-10' >
        
        <h1 className='text-center text-2xl font-bold mb-2'>About Us</h1>
          <p className='text-justify md:text-sm xl:text-base 2xl:text-2xl mb-5'>At Global Guideline Consultancy & Migration Services, we believe that education has the power to transform lives and open doors to endless opportunities. As a trusted educational consultancy, we are passionate about helping students achieve their dreams of studying abroad. With years of experience, our team of dedicated professionals provides comprehensive guidance and personalized support to students at every step of their journey — from choosing the right university to securing a visa. </p>
          {/* <img
          
            src='/assets/statue of liberty.png'
            alt='image'
            className="w-full bg-fixed h-[500px] object-cover mt-8  "
          /> */}
          <div style={{ backgroundImage: "url('/assets/statue of liberty-high.png')", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', height:'500px'}}>
          </div>
      </div>

      {/* Statistics Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 md:px-20">
        {statistics.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#2E3B71] text-white p-6 lg:py-16 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 1 }}
            viewport={{ once: true, amount:0.5}}
          >
            <h2 className="text-3xl font-bold">{stat.title}</h2>
            <h3 className="text-lg lg:text-2xl font-semibold mt-2">{stat.subtitle}</h3>
            <p className="mt-4 lg:text-xl ">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-center text-2xl font-bold mb-8">Our Team</h2>
        <div className=''>
          {teamMembers.map((member, index) => (
            <TeamMemberComponent key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;


