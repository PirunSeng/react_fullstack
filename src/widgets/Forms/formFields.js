import React from 'react';

const FormFields = (props) => {

  const renderFields = () => {
    const formArray = [];
    for(let elementName in props.formData){
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      })
    }

    return formArray.map((item, i) => {
      return (
        <div key={i} className="form_element">
          { renderTemplates(item) }
        </div>
      )
    })
  }

  const changeHanler = (event, id) => {
    const newState = props.formData;
    newState[id].value = event.target.value;
    props.change(newState)
  }

  const renderTemplates = (data) => {
    let formTemplate = null;
    let values = data.settings;

    switch (values.element) {
      case('input'):
        formTemplate = (
          <div>
            { showLable(values.label, values.labelText) }
            <input
              {...values.config}
              value={values.value}
              onChange={
                (event) => changeHanler(event, data.id)
              }
            />
          </div>
        )
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  }

  const showLable = (show,label) => {
    return show ?
      <label>{label}</label>
    : null
  }

  return(
    <div>
      {renderFields()}
    </div>
  )
}

export default FormFields;
