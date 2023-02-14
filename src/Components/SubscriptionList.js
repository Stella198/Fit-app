import React from 'react';
import'./SubscriptionList.css';

class SubscriptionList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            subscriptionItems:[],

        }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:5000/subscriptions', {mode:'no-cors'})
        .then(response=> {
            response.json();
         })
         .then(data=>{
            this.setState({
             subscriptionItems: data.subscriptionItems //raspunsul primit trebuie sa aiba din server campul userList (data sunt datele prelucrate in forma json de la pasul anterior)
            });
          });
       
    }
    renderTableData(){
        return this.state.subscriptionItems.map((subscription, i)=>{
            let itemsList= subscription.split(',');
            console.log(itemsList);

            return(
                <tr key={i}>
                    <td>{itemsList[0]}</td>
                    <td>{itemsList[1]}</td>
                    <td>{itemsList[2]}</td>
                    <td>{itemsList[3]}</td>
                </tr>
            )
        })
    }
    render() { 
        return (
            <div className='booking-table-container'>
                <h1 className="title-form"> Booking Item List</h1> 
                <table className='bookings-table' border='1'>
                    <tbody>
                     <tr>
                        <td>Full name</td>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Phone</td>
                        </tr>
                    {/* functia care ne afiseaza dinamic tabelul: */}
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
         );
        }

}
export default SubscriptionList;