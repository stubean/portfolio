import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import '../Styles/Contact.css'

class Contact extends Component {
  render() {

    const pathName = this.props.location.pathname;

    let FormSubmittedContainerClass = '',
        ContactFormClass = '';


    if (pathName.includes('contact/submitted'))//if we've submitted a contact info
      ContactFormClass = ' hidden ';      
    else
      FormSubmittedContainerClass = ' hidden ';
      

    return (
      <div id="ContactPage">
          <div id="FormSubmittedContainer" className={FormSubmittedContainerClass}>
            THANKS FOR SUBMITTING

            <button type="button"><Link to="/contact">Submit Again?</Link></button>
          </div>

          
          <form id="ContactForm" className={ContactFormClass} action="https://getsimpleform.com/messages?form_api_token=4ee7504079217a75321b1efa4196121c" method="post">
          <div>
            If you'd like to email me send to <a href="mailto:stuartdfoley@gmail.com">StuartDFoley@gmail.com</a> or submit the form below!
          </div>
            {/* <input type='hidden' name='redirect_to' value='https://stubean.github.io/portfolio/contact/submitted' /> */}
            <input type='hidden' name='redirect_to' value='http://localhost:3000/contact/submitted' />
            <div>
              email
              <input type='email' name='from' />
            </div>
            <div>
              message:
            <textarea name='message'></textarea>
            </div>
            <button type='submit' value='Test form'>Send</button>
          </form>

      </div>
    );
  }
}

export default Contact;
