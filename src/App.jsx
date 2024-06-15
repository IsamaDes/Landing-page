
import './App.css'

function App() {

  return (
    <div>
      <div className="contactPagebody">
        <span className='contact'>Contact Us</span>
        <div className="firstnameAndLastname">
          <div className='firstnameclass'>
          <span className='first'>First Name</span>
          <input type="firstname" placeholder="Enter your first name" />
          </div>
          <div className='lastnameclass'>
          <span className='last'>Last Name</span>
          <input type="lastname" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="email">
          <span className='emaila'>Email Address</span>
          <input
            type="email"
            className="emailfield"
            placeholder="Enter your email"
          />
        </div>
        <div className="querry">
           <span className='querrytype'>Querry Type</span>


          <div className='querryandsupport'>
          
          <div className='geradio'>

          <input type="radio" id="general-enquiry" name="query-type" className="query-radio" />
          <span>General Enquiry</span>
          </div>

          <div className='suppotio'>
           <input type="radio" id="support-request" name="query-type" className="query-radio" />
        
          <span>Support Request</span>
          </div>
          </div>
        </div> 


        <div className="message">
          <span className='messa'>Message</span>
          <input
            type="messagefield"
            className="messagefield"
            
          />
        </div>

        
        <div className='checkconsent'>
        <input type="checkbox" id="myCheckbox" />
        <span className='consent'>I consent to being contacted by the team</span>
        </div>

        <button className='submit' > Submit</button>
      </div>
    </div>
  );
}

export default App
