import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>

<section className="hero name_pad">   
  <div className="name_container">
    <h1 className="name_spec">
      Ronewa
    </h1>
    <div className="user_info">
      <div className="left">
         <a className="email" href="mailto:gmlron001@myuct.ac.za" target="__bank"> gmlron001@myuct.ac.za </a>
         <div className="tittle">
          <span>
             /SoftwareEngineer  
          </span>
          
         </div>
        <div className="tittle">
          <span>
             /Developer 
          </span>
          
         </div>
      </div>
      <div className="right">
          <p className="mycurrent">
            I  am a software engineer.
               <br/>
            Studied Computer Science at
            <br/>
            The University of Cape Town.
            <br/>
            Currently based in Cape Town.
            <br/>
            Get in touch with me:
          </p>
          <div>
            <a href="https://www.linkedin.com/in/ronewa-gumula-158011153/" target="__bank" className="linklinked">LinkedIn</a>
            <a href="https://github.com/GumulaRonewa" target="__bank" className="links">Github</a>
            <a href="https://api.whatsapp.com/send?phone=27660979163"  target="__bank" className="links">Whatsapp</a>
          </div>
      </div>
    </div>
   <img className='breaker'  width="100%" src="./images/golden.svg" alt="breaker" />
  </div>
 </section>
  
  <section className="myprojects">
     <div className="projects">
      <div>
        <p className="heading">Project</p>
        <span className="heading bold">WT/R Store</span>
             <p className="description">
              Exclusive, Trendy Clothes.<br/>
        An Ecommerce Store Made<br>
        Using NextJS, ReactJs Extension.<br/>
        Using Sass For Styling.
             </p>
             <div>
             <a href="https://waterislife.herokuapp.com/" target="__bank"  className="explore">

                Explore
                <svg width="45" height="11" viewBox="0 0 45 11" fill="none"   xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.6364 9.98889L44 5.98889M44 5.98889L39.6364 1.98889M44 5.98889H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
             </a>
          </div>

      </div>
      <div className="wtrshop">
        
      </div>
      

     </div>
    <div className="breaker">
            <img className='breaker'  width="100%" src="./images/golden.svg" alt="breaker"  />

    </div>

  </section>
  <section className="myprojects">
     <div className="projects">
      <div>
        <p className="heading">Project</p>
        <a className="heading bold">Algorithm<span className="imblu" >Compare
        </span>
        </a>
             <p className="description">
              Algorith Comparision Website That<br/>
        Compares Different Sorting And<br/>
        Path Finding Algorithms.<br/>
        Created Using ReactJS
             </p>
             <div>
             <a href="https://algocompare.herokuapp.com/sort" target="__bank" className="explore">
                Explore
                <svg width="45" height="11" viewBox="0 0 45 11" fill="none"   xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.6364 9.98889L44 5.98889M44 5.98889L39.6364 1.98889M44 5.98889H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
             </a>
          </div>

      </div>
      <div className="sort">
        
      </div>
      

     </div>
     <div className="placecenter">
       <a href="https://github.com/GumulaRonewa" target="__bank" className="explore">More Projects</a>
     </div>
    <div className="breaker">
            <img className='breaker'  width="100%" src="./images/golden.svg" alt="breaker"  />

    </div>

  </section>
  <section className="myskills">
    <div className="skill">
      <div>
        <h6 className="heading">Skills</h6>
        <div className="flex">
          <p>Java</p>
          <img className="java" src="images/bar.svg"/>
          <p>JavaScript</p>
          <img className="script" src="images/bar.svg"/>
          <p>ReactJS</p>
          <img className="ReactJS" src="images/bar.svg"/>
          <p>Python</p>
          <img className="python" src="images/bar.svg"/>
           <p>React Native</p>
          <img className="react" src="images/bar.svg"/>
          <p>MongoDB</p>
          <img className="mongo" src="images/bar.svg"/>
        </div>
        
      </div>
    </div>
    <div className="designer">
        <h5> Designed By:</h5>
        <p>Gumula Ronewa</p>

    </div>
  </section>
  
</body>
  );
}

export default App;
