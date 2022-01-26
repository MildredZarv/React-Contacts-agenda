import React from 'react';
import { Contexto } from '../Contexto';
import './contactForm.css';
import swal from 'sweetalert';

function ContactForm(){
    const {handleAddContact, contactToEdit, clearContacToEdit, updateContact} = React.useContext(Contexto);
    const handleCancel = () => {
        const form = document.getElementById('contact-form');
        clearContacToEdit();
        form.reset();
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = document.getElementById('name-input').value;
        const phone = document.getElementById('phone-input').value;
        const email = document.getElementById('email-input').value;
        const form = document.getElementById('contact-form');

        if(contactToEdit){
            if(name && phone && email){
                if(phone.length != 10){
                    swal("Oops!", "Enter a valid number", "error");
                }else{
                    contactToEdit.name = name;
                    contactToEdit.phone = phone;
                    contactToEdit.email = email;
                    updateContact(contactToEdit);
                    swal("Succesful", 'Contact updated successfully', 'success');
                    form.reset();
                }
            }else{
                swal("Oops!", "You have to complete all fields!", "error");
            }
        }else{
            if(name && phone && email){
                if(phone.length != 10){
                    swal("Oops!", "Enter a valid number", "error");
                }else{
                    handleAddContact(name, phone, email);
                    swal("Succesful", 'Contact added successfully', 'success');
                    form.reset();
                }
            }else{
                swal("Oops!", "You have to complete all fields!", "error");
            }
        }
    }
    return(
        <>
            <form id = 'contact-form' onSubmit = { handleSubmit }>
                <div className = 'container'>
                    <p>Contact info</p>
                    <input type='text' id ='name-input' defaultValue = {contactToEdit ? contactToEdit.name : ''} placeholder = 'Name'/>
                    <input type='text' id = 'phone-input' defaultValue = {contactToEdit ? contactToEdit.phone : ''} placeholder = 'phone number'/>
                    <input type='email' id = 'email-input' defaultValue = {contactToEdit ? contactToEdit.email : ''} placeholder = 'email address'/>
                    <div className = 'buttons-container'>
                        <button type = 'submit' className = 'button add-button'>{contactToEdit ? 'Update' : 'Add'}</button>
                        <button type = 'button' className = 'button cancel-button' onClick = { handleCancel }>Cancel</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export { ContactForm };
