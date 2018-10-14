import { Template } from 'meteor/templating';
 
import { People } from '../api/people.js';

import { Hobbies } from '../api/hobbies.js';

import './hobby.js';
import './person.html';


Template.person.events({

 'submit.new-hobby'(event) {
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
      Hobbies.insert({
      text,
      createdAt: new Date(), // current time
    });
    // Clear form
    target.text.value = '';
  },

  'click .delete'() {
    People.remove(this._id);
  },
});


