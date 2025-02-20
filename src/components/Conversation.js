const conversation = () => {
    return (
      <div className="conver">
        <strong>CONTACT US</strong>
        <h1>Let's Start a Conversation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br />et dolore magna aliqua. Ut enim ad minim.</p>
        <div className="hour">
          <div className="time">
            <p>Working hours</p>
            <hr />
            <h1>Monday To Friday<br />9.00 AM to 8.00 PM</h1>
            <p>Our Support Team is available 24/7</p>
          </div>
          <div className="time">
            <p>Contact Us</p>
            <hr />
            <h1>020 7993 2905</h1>
            <p>hello@finsweet.com</p>
          </div>
        </div>
        <input className="full-name" type="text" placeholder="Full Name" />
        <input className="your-email" type="email" placeholder="Your Email" />
        <select className="menu">
          <option value="">Query Related</option>
          <option value="Option1">Yes</option>
          <option value="Option2">No</option>
        </select>
        <input className="message" type="text" placeholder="Message" />
        <div className="messi"><a href="/">Send Message</a></div>
      </div>
    );
  };
  
  export default conversation;