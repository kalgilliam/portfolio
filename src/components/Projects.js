import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <ul>
        <h2>ExoCoach</h2>
          <p>As an Undergraduate Research Assistant at the NJIT 
            Life Sciences Motion Capture Lab, I spearheaded the 
            development of the ExoCoach smartwatch application 
            tailored for stroke patients. Leveraging Android 
            Studio, Java, and Kotlin, I integrated a custom 
            API to interface with exoskeleton devices, allowing 
            for precise tracking of critical health metrics. 
            Utilizing Samsung and Google’s Health APIs, I 
            successfully monitored patient progress by recording 
            physical activity data—such as steps taken, walking 
            distance, and speed—alongside vital health measures, 
            including heart rate. Additionally, the application 
            provided real-time monitoring of exoskeleton parameters, 
            like leg assistance levels and battery life. 
            Collaborating closely with PhD and graduate students, 
            I contributed to human movement and sports performance 
            research by conducting motion capture experiments, 
            which played a vital role in developing strategies 
            for injury prevention.</p>
        <h2>Car Care By Motor</h2>
          <p>In my role as a Front End Developer for the CarCare 
            app at Motor, I was responsible for designing and 
            prototyping the user interface with a focus on creating 
            seamless interactions between drivers and mechanics. 
            Using UX/UI principles, I developed core front-end 
            features such as user profiles, mechanic connections, 
            and appointment scheduling, employing React Native, 
            JavaScript, HTML, and CSS. My work also involved integrating 
            robust cybersecurity measures, including data encryption 
            and secure authentication protocols, to safeguard user 
            information and ensure a high level of data protection 
            across the platform.</p>
        <h2>NourishNet</h2>
          <p>Serving as the Project Manager for the NourishNet web 
            application, I oversaw the creation of a dynamic food 
            analysis tool that combines the power of React JS with 
            OpenAI’s GPT-4 API. This innovative application provides 
            users with in-depth nutritional analysis, dietary recommendations, 
            and personalized recipes based on selected food items. One of 
            the standout features I implemented is advanced text recognition 
            using optical character recognition (OCR), which allows users 
            to input food items by scanning labels or text. The application 
            then searches the USDA’s FoodData Central database to deliver 
            accurate breakdowns of calories, macronutrients, and health
             ratings, offering users a comprehensive and personalized dietary 
             experience.</p>
        <h2>Pequannock Democratic Committee Website</h2>
          <p>As the Webmaster for the Pequannock Democratic Committee, I 
            lead the ongoing redesign and modernization of the committee’s 
            WordPress website. My efforts focus on integrating fresh graphic 
            elements and enhancing the overall user experience through 
            improved site navigation, responsiveness, and accessibility. 
            Using WordPress and PHP, I have implemented critical updates 
            that elevate the site's functionality and aesthetics. Additionally, 
            I manage the website’s maintenance, ensuring that content is 
            regularly updated, plugins are efficiently managed, and security
             protocols are consistently upheld, providing users with a seamless
              and secure online platform.</p>
      </ul>
    </div>
  );
}

export default Projects;
