import React, { Component } from 'react';
import { firebaseArticles, firebaseLooper } from '../../../firebase';

import SliderTemplates from './slider_templates';


class NewsSlider extends Component {

  state = {
    news: []
  }

  componentWillMount() {
    firebaseArticles.limitToFirst(3).once('value')
    .then((snapshot)=>{
      // console.log(snapshot.val())
      const news = firebaseLooper(snapshot)

      this.setState({
        news
      })

    }).catch((e)=>{
      console.log(e)
    })

    // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
    // .then( response => {
    //   this.setState({
    //     news: response.data
    //   })
    // } )
  }

  render(){
    return(
      <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
    )
  }
}

export default NewsSlider;

// Don't use id start with 0 of firebase, should use something else to display team properly
