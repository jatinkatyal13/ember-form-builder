import Component from '@ember/component';
import layout from '../templates/components/form-builder';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class FormBuilder extends Component {
  layout = layout
  form = A()
  availableFields = [
    {name: "Text Input", value: "text"},
    {name: "Radio Input", value: "radio"},
    {name: "Checkbox Input", value: "checkbox"}
  ]

  didReceiveAttrs() {
    this.set('selectedField', this.availableFields[0].value)
  }

  @action
  deleteField(field) {
    this.form.removeObject(field)
  }

  @action
  addField() {

    // push the field to form
    switch(this.selectedField) {
      case 'text': 
        this.form.pushObject({
          title: 'My Text Field',
          type: this.selectedField,
          name: 'text_field'
        })
        break
      case 'radio':
        this.form.pushObject({
          title: 'My Radio Button',
          type: this.selectedField,
          name: 'radio_button',
          options: A([
            {
              name: 'option 1',
              value: 1
            }
          ])
        })
        break
    }

    this.set('selectedField', this.availableFields[0].value)
  }
}
