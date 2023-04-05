import React,{useState} from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import contactImg from "../img/5138237.jpg";
const Contact = () => {

    const formInitialDetails = {
        firstName:'',
        lastName: '',
        email:'',
        phone:'',
        message:'',

    }
    const [formDetails,setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText] = useState('Send');
    const [status,setStatus] = useState({});

    const onFormUpdate = (category,value) =>{
        setFormDetails({
            ...formDetails,
            [category] : value
        })
    }

    const handleSubmit =  async(e) =>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('http://localhost:5000/contact',{
            method: 'POST',
            headers:{
                "Content-Type": 'Application/json;charset=utf-8',
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        if(result.code === 200){
            setStatus({success: true,message:'Message sent sucessfully'});
        }else{
             setStatus({success: false,message:'Something went wrong please try again'});
        }
    };
  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <h2>Contact</h2>
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us'/>
                </Col>
                <Col md={6}>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name'
                                onChange={(e)=> onFormUpdate('firstName',e.target.value) }/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.lastName} placeholder='Last Name'
                                onChange={(e)=> onFormUpdate('lastName',e.target.value) }/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='emial' value={formDetails.email} placeholder='Email Address'
                                onChange={(e)=> onFormUpdate('email',e.target.value) }/>
                            </Col>
                                <Col sm={6} className='px-1'>
                                <input type='tel' value={formDetails.phone} placeholder='Phone No.'
                                onChange={(e)=> onFormUpdate('phone',e.target.value) }/>
                            </Col>    
                            <Col>
                            <textarea row='6' value={formDetails.message} placeholder='Message'
                             onChange={(e)=> onFormUpdate('message',e.target.value) }/>
                             {/* <button  type='submit'><span>
                              {buttonText}</span></button>*/}
                            <button>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                <p className={status.success === false ? "danger" : "sucess"}>{status.message}</p>
                                </Col>

                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact