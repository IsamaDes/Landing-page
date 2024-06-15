import "./App.css";

function App() {
  return (
    <form>
      <div className="contactPagebody">
        <span className="contact">Contact Us</span>
        <div className="firstnameAndLastname">
          <div className="firstnameclass">
            <span className="first">First Name</span>
            <input type="firstname" placeholder="Enter your first name" />
          </div>
          <div className="lastnameclass">
            <span className="last">Last Name</span>
            <input type="lastname" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="email">
          <label htmlfor="email">Email</label>

          <input
            type="email"
            id="emailid"
            pattern=".+@example\\\\.com"
            size="{30}"
            required
          />
        </div>
        <div className="querry">
          <span className="querrytype">Querry Type</span>

          <div className="querryandsupport">
            <div className="geradio">
              <input
                type="radio"
                id="general-enquiry"
                name="query-type"
                className="query-radio"
              />
              <span>General Enquiry</span>
            </div>

            <div className="suppotio">
              <input
                type="radio"
                id="support-request"
                name="query-type"
                className="query-radio"
              />

              <span>Support Request</span>
            </div>
          </div>
        </div>

        <div className="messageBox">
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            cols={80}
            rows={8}
            required
            placeholder="My Name is Desmond Isama, am a fullstack software engineer."
          />
        </div>
        <input className="submitbutton" type="submit" value="Send Request" />
      </div>
    </form>
  );
}

export default App;
