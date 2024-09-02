import './TechnicalExposure.css'
import skills from '../assets/skills.jpg'

export default  function TechnicalExposure(){
    return(
        
        <div className='tech'>
        <h2 className='skill'>
           
                <li>Creating web pages, web templates all kind of developments using <i>HTML</i>, <i>CSS</i>, <i>JAVASCRIPT</i>, <i>JQUERY</i> and <i>BOOTSTRAP</i>.</li>
                <li>Having the strong knowledge in <i>NODE.JS</i>, <i>EXPRESS.JS</i>, <i>REACT.JS</i> and <i>MONGODB</i>.</li>
                <li>Good understanding and knowledge in  <i>PYTHON ( DJANGO )</i> and able to write complex queries in <i>ORACLE SQL</i>.</li>
            
            
        </h2>

        <img src={skills} alt="skills" className="skills"/>
        </div>
        
      
    )
}