import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class AddClient extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        balance:''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) =>{
        //since it's aform..Prevent it from default submitting
        event.preventDefault();
        const newClient = this.state;
        const { firestore } = this.props;

        // If no balance, default to 0
        if(newClient.balance === ''){
            newClient.balance = 0;
        }
        firestore.add({ collection: 'clients'}, newClient)
        .then(() => this.props.history.push('/'))
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Link to='/' className='btn btn-link'>
                            <i className='fas fa-arrow-circle-left'> Back To Dashboard</i>
                        </Link>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-header'>Add Client</div>
                    <div className='card-body'>
                        <form onSubmit = { this.onSubmit }>
                            <div className='form-group'>
                                <label htmlFor='firstName'>First Name</label>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    name='firstName'
                                    minLength='2'
                                    required
                                    onChange= { this.onChange }
                                    value={this.state.firstName}
                                ></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='lastName'>Last Name</label>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    name='lastName'
                                    minLength='2'
                                    required
                                    onChange= { this.onChange }
                                    value={this.state.lastName}
                                ></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input 
                                    type='email' 
                                    className='form-control'
                                    name='email'
                                    onChange= { this.onChange }
                                    value={this.state.email}
                                ></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phone'>Phone</label>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    name='phone'
                                    minLength='10'
                                    required
                                    onChange= { this.onChange }
                                    value={this.state.phone}
                                ></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='balance'>Balance</label>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    name='balance'
                                    onChange= { this.onChange }
                                    value={this.state.balance}
                                ></input>
                            </div>

                            <input type='submit' value='Submit' className='btn btn-primary btn-block' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

AddClient.propTypes = {
    firestore: PropTypes.object.isRequired
} 

export default firestoreConnect()(AddClient);