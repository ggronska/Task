import { Template } from 'meteor/templating';
 
import { Hobbies } from '../api/hobbies.js';
 
import './hobby.html';
 
Template.hobby.events({
  'click .delete'() {
    Hobbies.remove(this._id);
  },
});