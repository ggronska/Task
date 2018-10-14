import { Template } from 'meteor/templating';
 
import { People } from '../api/people.js'; 
import './person.js'; 
import './body.html';
 
Template.body.helpers({
  people() {
	//Show newest people at the top 
    return People.find({}, { sort: { createdAt: -1 } });
  },
});
Template.body.events({
  'submit .new-person'(event){   //submit(event) {
    event.preventDefault();
    const target = event.target;
    const text = target.text.value;
    People.insert({
      text,
      createdAt: new Date(), // current time
    });
    target.text.value = '';
  },
});