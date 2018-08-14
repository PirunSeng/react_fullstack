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
        }
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
        }
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
    // console.log(this.state.formData)
    for(let key in this.state.formData){
      dataToSubmit[key] = this.state.formData[key].value
    }
    // console.log(dataToSubmit)
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
