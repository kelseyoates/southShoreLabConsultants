import React from "react";
import Link from "gatsby-link";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Your message has been sent. We look forward to working with you."))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (

<section id="contact">
<div className="section">
  <div className="flex flex-col "> 
    <h2 className="text-center">Let's get to work</h2>
    <hr />
    <p className="leading-loose text-center">Fill out the contact form below and we will get back to you as soon as possible.</p>
  </div>
  
  <div className="flex flex-col md:flex-row "> 
    <form
      name="contact"
      className="mx-auto md:w-1/2 sm:w-2/3 xsm:w-1/1"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={this.handleSubmit}
    >
    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label >
          Don’t fill this out:{" "}
          <input 
          
          name="bot-field" 

          onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label className="block font-bold form text-xs uppercase">
          Your name:<br />
          <input 
          className="appearance-none block bg-grey-lighter p-3 rounded-md text-grey-darker w-full"
        
          placeholder="Dr. Jane Jenkins"
          type="text" name="name" onChange={this.handleChange} />
        </label>
      </p>
      
      <p>
        <label className="block font-bold form text-xs uppercase">
          Your email:<br />
          <input type="email" 
          className="appearance-none block bg-grey-lighter p-3 rounded-md text-grey-darker w-full"
        
          placeholder="jjenkins@biotech.com"
          name="email" onChange={this.handleChange} />
        </label>
      </p>
      
      <p>
        <label className="block font-bold form text-xs uppercase">
          How did you hear about us?:<br />
          <textarea 
          className="appearance-none block bg-grey-lighter p-3 rounded-md text-grey-darker w-full"
        
          placeholder="Linked In"
          name="how" onChange={this.handleChange} />
        </label>
      </p>
    
      
      <p>
        <label className="block font-bold form text-xs uppercase">
          Message:<br />
          <textarea 
          className="appearance-none block bg-grey-lighter p-3 rounded-md text-grey-darker w-full"
        
          placeholder="Looking for help setting up our new biotech lab."
          name="message" onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <button 
        className="bg-primary hover:secondary font-bold my-3 px-6 py-3 rounded text-sm text-white"
        type="submit">Send</button>
      </p>
    </form>

  </div>

</div>
</section>

    );
  }
}



