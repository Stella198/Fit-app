import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            fullName:'',
            date:'',
            hour:'',
            phoneNumber:'',
            responseData:''
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        event.preventDefault();
        let name=event.target.name;
        let value=event.target.value;
        if(name==='fullName'){
            console.log("fullName: ", value)
            this.setState({
                fullName:value
            });
        }
        if(name==='date'){
            console.log("date: ", value)
            this.setState({
                date:value
            });
        }
        if(name==='hour'){
            console.log("hour: ", value)
            this.setState({
                hour:value
            });
        }
        if(name==='phoneNumber'){
            console.log("phoneNumber: ", value)
            this.setState({
                phoneNumber:value
            });
        }

    }
    handleClick(event){
        event.preventDefault();
        let data=new URLSearchParams();
        data.append('fullName',this.state.fullName);
        data.append('date',this.state.date);
        data.append('hour',this.state.hour);
        data.append('phoneNumber',this.state.phoneNumber);
        let that=this;

        fetch (
                "http://127.0.0.1:5000/save-subscriptions",
                {
                    method:'POST',
                    body:data,
                    mode:'no-cors'
                }
            )
            .then(response=>{
                response.text();
            })
            .then(data=>{
                that.setState({
                    responseData:'Thank you for your submission !'
                })
            })
            .catch(error => {
                // enter your logic for when there is an error (ex. error toast)
                 console.log(error)})
        }

    render() { 
        if (this.state.responseData) {
            return (
                <div className='block'>
                 <h1 className="title-text">BOOK A CLASS</h1>
                    <h1 className='title-text'>
                        {this.state.responseData}
                    </h1>
                
               </div>
            )
        }
        return (
            <div className='block'>
                <h1 className="title-text">BOOK A CLASS</h1>
                <div action='contact-form'>
                    <form action="/">
                        <label htmlFor="fullName">Full name:</label>
                        <input onChange={this.handleChange} type="text" name="fullName" id="fullName" />

                        <label htmlFor="date">Date from:</label>
                        <input onChange={this.handleChange} type="date" name="date" id="date" />

                        <label htmlFor="hour">Hour:</label>
                        <input onChange={this.handleChange} type="time" name="hour" id="hour" />

                        <label htmlFor="phoneNumber">Phone number:</label>
                        <input onChange={this.handleChange} type="tel" name="phoneNumber" id="phoneNumber" />
                        <br />
                        <button className="button-form" onClick={this.handleClick}>SendBooking</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default ContactForm;