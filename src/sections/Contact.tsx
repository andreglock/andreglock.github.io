import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../components/ContactForm';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Contact () {
    const [showModal, setShowModal] = useState(false);
    const [showForm, setShowForm] = useState(true);

    return <section id="contact">
        <h2 className="p-2">Contact me</h2>
        <div className="social p-2 d-flex justify-content-around formPlaceholder">
            {showModal && <Modal setShow={setShowModal} setShowForm={setShowForm}/>}
            {showForm && <ContactForm setShowModal={setShowModal} setShow={setShowForm}/>}
        </div>
        <div className="social p-2 d-flex justify-content-around">
            <div>
                <a href="https://github.com/andreglock" target="blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/andr%C3%A9-s-g-lorenzoni-834a672a/" target="blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </div>
    </section>
}