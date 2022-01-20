import React from 'react';
import './ContactList.css';


function ContactsList ({ contacts, handleDeleteContact, handleEditContact }){
    return(
		<>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone number</th>
						<th>email address</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
				{ contacts.map(contact => (
					<tr key = {contact.id}>
						<td>{contact.name}</td>
						<td>{contact.phone}</td>
						<td>{contact.email}</td>
						<td className = 'actions-container'>
							<span onClick = { () => handleEditContact(contact) } className = 'action edit-button'></span>
							<span onClick = { () => handleDeleteContact(contact) } className = 'action delete-button'></span>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</>
    );
}

export { ContactsList };