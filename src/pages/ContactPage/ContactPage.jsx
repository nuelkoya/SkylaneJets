import React, { useEffect, useState } from 'react'
import "./ContactPage.scss"
import Footer from '../../components/Footer/Footer'

const ContactPage = () => {
    const [submit, setSubmit] = useState(false)
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [message, setMessage] = useState('')

    

    function handleSubmit(e){
        e.preventDefault()
        setEmail('')
        setFname('')
        setLname('')
        setMessage('')
        setSubmit(true)   
    }


  useEffect(() => {
      if (submit){
          console.log('in')
          alert('Message Sent!')
          setSubmit(false)

          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
      }
    
  },[submit])

  useEffect(() =>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
  },[])



  

  return (
    <div className="contact">
        <div className="imageContainer">
            
            <div className="message">
                <p>
                    Connect With<br></br>
                    our team
                </p>

            </div>
        </div>
        <div className="contactInfo">
            <div className="wrapper">
                <div className="left">
                    <h1>Send Us a Message</h1>
                    <p>
                        How can we assist you? Please fill out the form below, 
                        and our staff will reach out to you shortly. 
                    </p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="email"> Email</label>
                        <input type="text" id="email" required
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                        />
                        <label htmlFor="fname"> First Name</label>
                        <input type="text" id="fname" required
                            onChange={(e)=>setFname(e.target.value)}
                            value={fname}
                        />
                        <label htmlFor="lname"> Last Name</label>
                        <input type="text" id="lname" required
                            onChange={(e)=>setLname(e.target.value)}
                            value={lname}
                        />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" required
                            onChange={(e)=>setMessage(e.target.value)}
                            value={message}
                        ></textarea>
                        <button>Submit</button>
                    </form>
                </div>

                <div className="right">
                    <h1>Explore Our Locations</h1>

                    <div className="details">
                        <h3>Corporate Headquarters</h3>
                        <p>
                            4605 N Airport Dr, Suite 304<br></br>
                            Houston, TX 77260
                        </p>
                        <p></p>
                        <p>+1 (480) 780-0242</p>
                        <p>Monday – Friday, 8:30 a.m. – 5:00 p.m.</p>
                    </div>

                    <div className="details">
                        <h3>Scottsdale</h3>
                        <p>Marc S. Alonso</p>
                        <p>(480) 342-0311</p>
                        <p>marc@gmail.com</p>
                    </div>

                    <div className="details">
                        <h3>Houston</h3>
                        <p>Great B. Jackson</p>
                        <p>(409) 342-0211</p>
                        <p>greatjack@gmail.com</p>
                    </div>

                    

                    <div className="details">
                        <h3>New York</h3>
                        <p>Aba B. fuche</p>
                        <p>(871) 242-0201</p>
                        <p>fuche@gmail.com</p>
                        <p></p>
                    </div>

                    <div className="details">
                        <h3>Atlanta</h3>
                        <p>Darius M. Depaul</p>
                        <p>(609) 861-1038</p>
                        <p>darius@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default ContactPage