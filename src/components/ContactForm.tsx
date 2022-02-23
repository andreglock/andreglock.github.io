import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
    setShow: any;
    setShowModal: any;
}

export default function ContactForm(props: ContactFormProps) {
    const [state, handleSubmit] = useForm("xknyryaj");

    if (state.succeeded) {
        props.setShowModal(true);
        props.setShow(false);
    }

    return <form onSubmit={handleSubmit}>
        <label className="d-block" htmlFor="name">Name:</label>
        <input 
            type="text" id="name" placeholder="your name..." minLength={3} required
            name="name"
        />
        <label className="d-block" htmlFor="email">
            Email Address:
        </label>
        <input
            placeholder="email@example.com" required
            id="email" type="email" name="email"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <label className="d-block" htmlFor="message">Leave a message:</label>
        <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={7}
            maxLength={4000}
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button className="btn d-block mx-auto my-2" type="submit" disabled={state.submitting}>
            Send!
        </button>
    </form>;
}