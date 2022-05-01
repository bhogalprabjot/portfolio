import './Contact.scss';
import { useEffect, useState } from 'react';


const Contact = () => {

    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className='contact' id='contact'>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message' />
                    <button type="submit">Send</button>
                    {message && <span>Thanks! I'll reply ASAP :)</span>}
                </form>
            </div>

        </div>
    )
}

export default Contact