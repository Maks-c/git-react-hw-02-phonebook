import React from 'react';
import ContactListItem from "../ContactListItem";

const Contacts = ({contacts, onDelete}) => (
        <ul>
            {contacts.map(({name, number, id}) => (
                <li key={id}>
                    <ContactListItem name={name} number={number}/>
                    <button onClick={() => onDelete(id)}>Удалить</button>
                </li>))}
        </ul>

    )
;

export default Contacts;