import React, { Component } from 'react';
import FormFields from '../widgets/FormFields/form_fields';
import styles from './dashboard.css';
import { firebase, firebaseTeams, firebaseArticles } from '../../firebase';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Uploader from '../widgets/FileUploader/file_uploader';

class Dashboard extends Component {
  state = {
    editorState: EditorState.createEmpty(),

    postError: '',
    loading: false,
    formData: {
      author: {
        element: 'input',
        value: '',
        config: {
          name: 'author',
          type: 'text',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      title: {
        element: 'input',
        value: '',
        config: {
          name: 'title',
          type: 'text',
          placeholder: 'Enter the title'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      body: {
        element: 'texteditor',
        value: '',
        valid: true
      },
      image: {
        element: 'image',
        value: '',
        valid: true
      },
      teams: {
        element: 'select',
        value: '',
        config: {
          name: 'team',
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }

  componentDidMount() {
    this.loadTeams()
  }

  loadTeams = () => {
    firebaseTeams.once('value')
    .then((snapshot)=>{
      let teams = [];
      snapshot.forEach((childSnapshot)=>{
        teams.push({
          id: childSnapshot.val().id,
          name: childSnapshot.val().city
        })
      })

      const newFormData = {...this.state.formData};
      const newElement = {...newFormData['teams']};
      newElement.config.options = teams;
      newFormData['teams'] = newElement;
      // console.log(newElement);

      this.setState({
        formData: newFormData
      })
    })
  }

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formData){
      dataToSubmit[key] = this.state.formData[key].value;
    }
    for(let key in this.state.formData){
      formIsValid = this.state.formData[key].valid && formIsValid;
    }



    if(formIsValid){
      console.log('Success!')
      // console.log(dataToSubmit)
      this.setState({
        loading: true,
        postError: ''
      })

      firebaseArticles.orderByChild('id')
      .limitToLast(1).once('value')
      .then( snapshot => {
        let articleId = null;
        snapshot.forEach(childSnapshot => {
          articleId = childSnapshot.val().id;

        });
        // console.log(articleId)
        dataToSubmit['date'] = firebase.database.ServerValue.TIMESTAMP
        dataToSubmit['id'] = articleId + 1;
        dataToSubmit['teams'] = parseInt(dataToSubmit['teams'])

        // console.log(dataToSubmit)
        firebaseArticles.push(dataToSubmit)
        .then( article => {
          this.props.history.push(`/articles/${article.key.id}`)
        }).catch(error => {
          this.setState({ postError: error.message })
        })
      })

    }else{
      console.log('Failed!')
      this.setState({
        postError: 'Failed to post!'
      })
    }
  }

  updateForm = (element, content = '') => {
    const newFormData = {
      ...this.state.formData
    }
    const newElement = {
      ...newFormData[element.id]
    }

    if(content === ''){
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }

    // newElement.value = element.event.target.value;

    if(element.blur){
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }
    newElement.touched = element.blur;
    newFormData[element.id] = newElement;

    this.setState({
      formData: newFormData
    })


  }

  validate = (element) => {
    let error = [true, ''];

    if(element.validation.required){
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required' : ''}`
      error = !valid ? [valid, message] : error
    }
    return error;
  }

  submitButton = () => (
    this.state.loading ?
      'loading...'
    :
    <div>
      <button type="submit">Add Post</button>
    </div>
  )

  showError = () => (
    this.state.postError !== '' ?
    <div className={styles.error}>{this.state.postError}</div>
    : ''
  )

  onEditorStateChange = (editorState) => {
    let contentState = editorState.getCurrentContent();
    let rawState = convertToRaw(contentState)
    let html = stateToHTML(contentState)
    // console.log(html)

    this.updateForm({id: 'body'}, html)

    this.setState({
      editorState
    })
  }

  storeFilename = (filename) => {
    this.updateForm({id: 'image'}, filename)
  }

  render(){
    return(
      <div className={styles.postContainer}>
        <form onSubmit={this.submitForm}>
          <h2>Add Post</h2>

          <Uploader
            filename={(filename)=>this.storeFilename(filename)}
          />

          <FormFields
            id={'author'}
            formData={this.state.formData.author}
            change={(element) => this.updateForm(element)}
          />

          <FormFields
            id={'title'}
            formData={this.state.formData.title}
            change={(element) => this.updateForm(element)}
          />

          <Editor
            // editorId='body'
            editorState={this.state.editorState}
            wrapperClassName='myEditor-wrapper'
            editorClassName='myEditor-editor'
            onEditorStateChange={this.onEditorStateChange}
          />

          <FormFields
            id={'teams'}
            formData={this.state.formData.teams}
            change={(element) => this.updateForm(element)}
          />

          { this.submitButton() }
          { this.showError() }
        </form>
      </div>
    )
  }
}

export default Dashboard;
