import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss';

import {
    react,
    next,
    fullstack,
    frontend,
} from "../../data";

const Portfolio = () => {

    const list = [
        {
            id: "react.js",
            title: "React.js",
        }, {
            id: "next.js",
            title: "Next.js",
        }
        , {
            id: "fullstact",
            title: "Full Stack - MERN",
        }, {
            id: "frontend",
            title: "HTML + CSS",
        }
    ]

    const [selected, setSelected] = useState("react.js");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selected) {
            case "react.js":
                setData(react);
                break;
            case "next.js":
                setData(next);
                break;
            case "fullstact":
                setData(fullstack);
                break;
            case "frontend":
                setData(frontend);
                break;

            default:
                setData(react);
                break;

        }
    }, [selected]);


    return (
        <div className='portfolio' id='portfolio'>
            <h1>Projects</h1>
            <ul>
                {
                    list.map((item) => (
                        <PortfolioList
                            id={item.id}
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                        />
                    ))
                }
            </ul>
            <div className="container">
                {
                    data.map((item) => (
                        <div className="item">
                            <img src={item.img} alt="">
                            </img>
                            <h3>{item.title}</h3>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Portfolio