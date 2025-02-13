import Head from "next/head";
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap'
import { useCallback } from "react";



const Contact = () => {

  const sendEmail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const honeypotValue = formData.get("honeypot") as string;
    
		if (honeypotValue) {
			e.currentTarget.reset();
			return;
		}
		
    emailjs.sendForm(
      "AAB_Service",
      "AAB_Email_Template",
      e.currentTarget,
      "_ZjNjzqvESvjOCGJB"
    )
    .then(
      (result) => console.log(result.text),
      (error) => console.log(error.text)
    );

    e.currentTarget.reset();
    alert("Thank you for submitting! All inquiries will be responded to within 24 hours.");
  }, []);

	return(
		<>
			<Head>
				<title>Contact</title>
			</Head>

			<form onSubmit={sendEmail}>

			<Container fluid className='main-container'>

				<Container fluid className="contact-border-container">
					<h3 style={{fontSize:"40px"}}>Contact</h3>
					<h6>2240 Woolbright Road
					<br/>Suite 416
					<br/>Boynton Beach, FL 33426
					<br/><a href="tel:561-337-4403">561.337.4403</a></h6>

					<p style={{marginBottom:"40px"}}>
					Send us a message or call us about your project. All inquiries will be responded to within 24 hours.</p>

					<div className="input-container">
						<input type="text" name="name" required/>
						<label>Name  *</label>
					</div>

					<div className="input-container">
						<input type="email" name="email" required/>
						<label>Email  *</label>		
					</div>

					<div className="input-container">
						<input type="text" name="phone" />
						<label>Phone</label>		
					</div>

					<div className="input-container">
						<input type="text" name="company" />
						<label>Company</label>		
					</div>

					<div className="textarea-container">
						<textarea className="textarea" name="message" required/>
						<label>Message  *</label>
					</div>

					<div style={{ display: "none" }}>
  					<input type="text" name="honeypot" autoComplete="off" />
					</div>
					
					<input type="submit" className="contact-submit" value="Send" />
				</Container>
			</Container>
    	</form>
    </>
    )
}

export default Contact;