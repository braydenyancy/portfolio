import React from "react";
import { useState, useEffect } from "react";
import './index.scss';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Rankings = () => {

    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:5239/api/items')
    //         .then(response => setItems(response.data))
    //         .catch(err => console.error(err))
    // }, []);

    useEffect(() => {
        axios.get('http://localhost:5239/api/items')
            .then(response => {
                setItems(response.data);
                console.log(items)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="rankingsPage">
            <div className="rankingsTitleDiv">
                <h4 className="rankingPageTitle">
                    Rank your favorites!
                </h4>
            </div>
            <div className="itemsDiv">
                <div className="buttonDiv">
                    <button className="addItemButton" placeholder="Add Item">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="itemsListDiv">
                    <ul className="newItemsList">
                        {items.map(item => (
                            <li>
                                {/* <p className="itemTitle">{item.title}</p> */}
                                <img className="itemPic" src={item.pictureUrl} alt={"No IMG"}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="rankingTiersDiv">
                <ul className="rankingsList">
                    <li style={{
                        backgroundColor: '#ff6961'
                    }} className="tier">
                        <h2>
                            S
                        </h2>
                    </li>
                    <li style={{
                        backgroundColor: '#ffb480'
                    }} className="tier">
                        <h2>
                            A
                        </h2>
                    </li>
                    <li style={{
                        backgroundColor: '#f8f38d'
                    }} className="tier">
                        <h2>
                            B
                        </h2>
                    </li>
                    <li style={{
                        backgroundColor: '#42d6a4'
                    }} className="tier">
                        <h2>
                            C
                        </h2>
                    </li>
                    <li style={{
                        backgroundColor: '#08cad1'
                    }} className="tier">
                        <h2>
                            D
                        </h2>
                    </li>
                    <li style={{
                        backgroundColor: '#59adf6'
                    }} className="tier">
                        <h2>
                            E
                        </h2>
                    </li>
                    <li style={{
                        backgroundColor: '#9d94ff'
                    }} className="tier">
                        <h2>
                            F
                        </h2>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rankings;