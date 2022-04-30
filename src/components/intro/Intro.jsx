import './Intro.scss';
import { AiOutlineDown } from 'react-icons/ai';
const Intro = () => {
    return (
        <div className='intro' id='intro'>
            {/* <div className="left">

            </div> */}
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Prabjot Singh Bhogal</h1>
                    <h3>Software Engineer</h3>
                </div>
                <a href="#portfolio">
                    <AiOutlineDown />
                </a>
            </div>
        </div>
    )
}

export default Intro