import React from 'react';

const ContactListItem = ({name,number}) => {
    return (
       <>
           <span>{name}</span>
           <span>{number}</span>
       </>
    );
};

export default ContactListItem;