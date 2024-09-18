import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lbsarodD', 'template_1mgfnnn', form.current, {
        publicKey: 'Xznvr3Jprl_xhSVCE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid justify-center">
        <div>
      <label>Name</label>
      <input type="text" name="user_name" />
        </div>

        <div>
      <label>Email</label>
      <input type="email" name="user_email" />
        </div>
       

        <div>
      <label>Message</label>
      <textarea name="message" /> 
      <input type="submit" value="Send" />
        </div>

     
 </div>
    
    </form>  
  );
};

export default ContactForm;