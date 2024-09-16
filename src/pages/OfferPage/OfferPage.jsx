import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import "./OfferPage.scss"

const OfferPage = () => {

    const [submit, setSubmit] = useState(false)
    const [email, setEmail] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [message, setMessage] = useState('')
    const [selected, setSelected] = useState('default')
    

    function handleSubmit(e){
        e.preventDefault()
        setEmail('')
        setFname('')
        setLname('')
        setMessage('')
        setSelected('default')
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
    <div className="offer">
        <div className="imageContainer">
            
            <div className="message">
                <p>
                    We are ready for your <br></br>
                    Offer!
                </p>

            </div>
        </div>
        <div className="contactInfo">
            <div className="wrapper">
                <div className="container">
                    <h1>Make an Inquiry</h1>
                    <p>
                        Please fill out the form below to speak with a member of our team. 
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
                        <label htmlFor="inquiry">What's your inquiry about</label>
                        <select name="inquiry" id="inquiry" required
                            onChange={(e)=>setSelected(e.target.value)}
                            value={selected}
                        >
                            <option value="default">Please Select</option>
                            <option value="buy">I want to buy an aircraft</option>
                            <option value="sell">I want to sell an aircraft</option>
                            <option value="other">Other inquiries</option>
                        </select>
                        <label htmlFor="message">Can you provide more details?</label>
                        <textarea id="message" required
                            onChange={(e)=>setMessage(e.target.value)}
                            value={message}
                        ></textarea>
                        <button>Submit</button>
                    </form>
                </div>

                
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default OfferPage