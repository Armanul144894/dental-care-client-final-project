import React from 'react';
import Info from './Info';
import ContactForm from './Form';
import { ScrollRestoration } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <Info />
            <ContactForm />
            <ScrollRestoration />
        </div>
    );
};

export default Contact;