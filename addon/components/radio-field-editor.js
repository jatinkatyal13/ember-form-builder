import Component from '@ember/component';
import layout from '../templates/components/radio-field-editor';
import { action } from '@ember/object';

export default class RadioFieldEditor extends Component {
  layout = layout

  @action
  deleteOption(obj) {
    this.get('field.options').removeObject(obj)
  }

  @action
  addOption() {
    this.get('field.options').pushObject({
      name: "My Option",
      value: 1
    })
  }
}
