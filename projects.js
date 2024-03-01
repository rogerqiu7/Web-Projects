// Getting the portfolio section from the HTML document
const projectsSection = document.getElementById('portfolio');

// Defining the projects data
// Each object represents a project with various details
// Including image source, title, type, description, technologies used, and the source link
// Example project is described below
const projects = [
  {
    img: {
      src: './img/breastcancerprediction.png',
      alt: 'cancer prediction',
    },
    title: 'Breast Cancer prediction',
    type: ['Machine Learning Project', 'Data Science', 'March, 2024'],
    description: 'This project uses machine learning techniques to diagnose breast cancer,using EDA, data pre-processing, Logistic Regression, Decision Tree, Random Forest, K-Nearest Neighbors, and XGBoost. Hyperparameter tuning is used to optimize these models, and feature selection techniques such as univariate feature selection, recursive feature elimation with cross validation (RFECV) and principal component analysis (PCA) are used to identify the most relevant features.',
    technologies: ['Python', 'EDA', 'data pre-processing', 'Logistic Regression', 'Decision Tree','Random Forest','K-Nearest Neighbors','XGBoost','Hyperparameter tuning','feature selection'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/Breast%20Cancer%20Prediction/BreastCancerPrediction.ipynb',
  },
  {
    img: {
      src: './img/maze.png',
      alt: 'maze game',
    },
    title: 'Maze Game',
    type: ['Java Project', 'Engineering', 'Feb, 2024'],
    description: 'This is a maze game project for the Outlier computer science course. This project consists of 7 classes in each file, where a player moves from the top left-hand corner of a 2D board to the bottom right-hand corner without running out of health. ',
    technologies: ['Java'],
    source: 'https://github.com/rogerqiu7/MazeGame',
  },
  {
    img: {
      src: './img/diabetes.png',
      alt: 'diabetes prediction',
    },
    title: 'Diabetes Prediction',
    type: ['Machine Learning Project', 'Data Science', 'Aug, 2023'],
    description: 'Group Project for University of San Diegos ADS-504 Machine Learning class. Used various methods and machine learning models to predict diagnosis of diabetes based on individual features. Used hyperparameter tuning to find best parameters for each model that results in the highest AUC ROC score.',
    technologies: ['Python', 'Logistic Regression', 'Random Forest', 'K-Means Clustering'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/ADS_504_Final_Project.ipynb',
  },
  {
    img: {
      src: './img/patient.png',
      alt: 'patient',
    },
    title: 'Patient Management System',
    type: ['Java', 'Engineering', 'Aug, 2023'],
    description: 'Patient management database created using Java and Java Swing for the GUI. User can enter data of a patient into the GUI, and save that paitents into the local database. 2nd window allows user to search patients in the database by name, and retrieve to populate the frame.',
    technologies: ['Java', 'Java Swing', 'Java AWT'],
    source: 'https://github.com/rogerqiu7/PatientManagementSystem',
  },
  {
    img: {
      src: './img/weather.png',
      alt: 'weather api',
    },
    title: 'Weather API',
    type: ['Javascript API', 'Engineering', '2022'],
    description: 'This is a simple live weather API built using HTML, CSS and JS. It takes a city name from user input and display weather conditions of that city using JSON from weatherapi.com. Inspiration and guide for this project is from The Odin Project course. You can access this project on my website or at the link in the "About" section of this page.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    source: 'https://rogerqiu7.github.io/Live-Weather/',
  },
  {
    img: {
      src: './img/keras.png',
      alt: 'keras',
    },
    title: 'Global Life Expectency',
    type: ['Machine Learning Project', 'Data Science', '2022'],
    description: 'Created a Keras neural network model through a combination of nodes of data inputs, weights, and bias. These all work together to recognize and classify objects within the data using multiple layers of nodes to optimize the prediction. Then, through the processes of gradient descent and backpropagation, the deep learning algorithm adjusts and fits itself for accuracy allowing it to make predictions about a life expectancy based on numerous standardized fields such as vaccinations or schooling. Models like this could eventually inform and bring insights to countries and governments ways to improve the life expectancy of their populations.',
    technologies: ['Python', 'Neural Networks'],
    source: 'https://github.com/rogerqiu7/Python-Projects/blob/main/Life%20Expectancy/Life%20Expectancy.ipynb',
  },
  {
    img: {
      src: './img/calculator.png',
      alt: 'calculator',
    },
    title: 'Calculator App',
    type: ['Javascript App', 'Engineering', '2022'],
    description: 'This is a simple calculator app built using HTML, CSS and JS. It takes number entries from buttons selected, performs the selected operators on them and prints it out on the screen. Inspiration and guide for this project is from The Odin Project course. You can access this project on my website or at the link in the "About" section of this page.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    source: 'https://rogerqiu7.github.io/Simple-Calculator/',
  }
];

// Function to generate a list of items from an array
const generateList = (arr) => arr.reduce((elements, element) => `${elements}<li class="project_detail">${element}</li>`, '');

// Function to generate HTML code for a card representing a project
const generateCard = (project, id) => `
    <section class="card flex bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${project.img.alt}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="flex project_details">
          ${generateList(project.type)}
        </ul>
        <p class="project__description">${project.description}</p>
        <ul class="flex project_coding_langs">
          ${generateList(project.technologies)}
        </ul>
        <div class="btn-container">
          <a href="${project.source}" target="_blank">
          <button id=${id} class="project-detail btn-primary btn-outlined">See Project</button>
          </a>
        </div>
      </article>
    </section>`;

  
// Event listener to populate the projects section with cards when the window loads
// Iterating over the projects array and inserting each card into the projectsSection
window.addEventListener('load', () => {
  projects.forEach((project, index) => {
    const card = generateCard(project, index);
    projectsSection.insertAdjacentHTML('beforeend', card);
  });
});