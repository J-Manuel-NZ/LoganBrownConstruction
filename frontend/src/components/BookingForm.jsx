import React from 'react'
import { useRef, useState, useEffect } from 'react';
import '../pages/index.css'
import emailjs from '@emailjs/browser';


const BookingForm = () => {
    // this section will be related to the email.js service
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(false)
  const [radioButtons, setRadioButtons] = useState([])
  const [selectedJob, setSelectedJob] = useState('Design & Build')
  const radioButtonsRef = useRef(null);

//   useEffect(() => {
//     // Use the ref to get the DOM node representing the radio buttons container
//     const radioButtonsContainer = radioButtonsRef.current;

//     // Use querySelectorAll on the container to select all radio buttons with the name "select"
//     const radioButtons = radioButtonsContainer.querySelectorAll('input[name="select"]');

//     // Do something with the selected radio buttons if needed
//     setRadioButtons(radioButtons)
//     // For example, you could add event listeners or perform other operations
//     // For demonstration purposes, I'll log the number of radio buttons selected
//   }, []);
    const checkSelection = () => {
            radioButtons[0].checked ? setSelectedJob("Design & Build") : null
            radioButtons[1].checked ? setSelectedJob("Renovation") : null
            radioButtons[2].checked ? setSelectedJob("Landscaping") : null
            radioButtons[3].checked ? setSelectedJob("Other") : null
        }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3bn2xnk', 'template_2rjsqt6', form.current, 'NtwkeeNRtQPVrXqg0')
      .then(() => {
        setSentMessage(true);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div>
    {!sentMessage
          ? <form
            className='contact-form'
            action="submit"
            ref={form}
            onSubmit={sendEmail}>

                <label htmlFor='name'>name</label>    
                <input type="text" id='name' maxLength={50}
                name='user_name' required />

                <label htmlFor='email'>email</label>
                <input type="email" id='email'
                pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                name='user_email' required />

                <label htmlFor='phone'>phone</label>
                <input type="phone" id='phone' placeholder='optional'
                name='user_phone' />
{/* Adapted from https://codepen.io/Metty/pen/MWjOavR */}
                <div className="contact-form_radio-selection" ref={radioButtonsRef}>
                    <input type="radio" name="select" id="option-1" onClick={() => checkSelection()} />
                    <input type="radio" name="select" id="option-2" onClick={() => checkSelection()} />
                    <input type="radio" name="select" id="option-3" onClick={() => checkSelection()} />
                    <input type="radio" name="select" id="option-4" onClick={() => checkSelection()} />
                    <input type='text' name='selected' hidden={true} value={selectedJob} />
                    <label htmlFor="option-1" className="option option-1">
                        <div className="dot"></div>
                        <span>Design & Build</span>
                        </label>
                    <label htmlFor="option-2" className="option option-2">
                        <div className="dot"></div>
                        <span>Renovation</span>
                    </label>
                        <label htmlFor="option-3" className="option option-3">
                        <div className="dot"></div>
                        <span>Landscaping</span>
                    </label>
                        <label htmlFor="option-4" className="option option-4">
                        <div className="dot"></div>
                        <span>Other</span>
                    </label>
                </div>

                <label htmlFor='message'>message</label>
                <textarea id='message' cols="30" rows="5"
                name='user_message' required />

                <button type='submit' value='send' className='send_button' >SEND</button>
            </form>
          : 
            <div className='contact-form_sent'>
                <h3>Message sent!</h3>
                <p>We will get back to you as soon as we can.</p>
            </div>
          }
        </div>
        )
}

export default BookingForm