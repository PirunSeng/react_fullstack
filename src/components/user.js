import React, { Component } from 'react';
import Header from './Header/header';
import FormFields from '../widgets/Forms/formFields';

class User extends Component {
  state = {
    formData: {
      first_name: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'First Name',
        config: {
          name: 'first_name',
          type: 'text',
          placeholder: 'Enter your first name'
        },
        validation: {
          required: true,
          minLength: 5
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      last_name: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Last Name',
        config: {
          name: 'last_name',
          type: 'text',
          placeholder: 'Enter your last name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      message: {
        element: 'textarea',
        value: '',
        label: true,
        labelText: 'Message',
        config: {
          name: 'message',
          rows: 4,
          cols: 36
        },
        validation: {
          required: false
        },
        valid: true,
      },
      age: {
        element: 'select',
        value: '',
        label: true,
        labelText: 'Age',
        config: {
          name: 'age',
          options:[
            { val: '1', text: '1-10' },
            { val: '2', text: '11-20' }
          ]
        },
        validation: {
          required: false
        },
        valid: true
      }
    }
  }

  updateForm = (newState) => {
    this.setState({
      formData:newState
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = {};
    let formValid = true;
    // console.log(this.state.formData)
    for(let key in this.state.formData){
      dataToSubmit[key] = this.state.formData[key].value
    }

    for(let key in this.state.formData){
      formValid = this.state.formData[key].valid && formValid;
    }

    if (formValid){
      console.log(dataToSubmit)
    }

    // axios.post(url, dataToSubmit)
  }

  render(){
    return(
      <div>
        <Header />

        <div className="container">
          <form onSubmit={this.submitForm}>
            <FormFields
              formData={this.state.formData}
              onblur={(newState) => this.updateForm(newState)}
              change={(newState) => this.updateForm(newState)}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default User;
