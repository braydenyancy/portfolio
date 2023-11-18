import React from "react";
import { useState, useEffect } from "react";
import './index.scss';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const Rankings = () => {

    const [items, setItems] = useState([]);
    // const [showForm, setShowForm] = useState(false);
    const [postItem, setPostItem] = useState({
        title: '',
        pictureUrl: '',
    });


    const [selectedItem, setSelectedItem] = useState(null)


    const fetchData = async () => {
        await axios.get('http://localhost:5239/api/items')
            .then(response => {
                setItems(response.data);
                // console.log(items)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleInput = (event) => {
        setPostItem({ ...postItem, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const validExtensions = ['.jpg', '.jpeg', '.png'];

        if (
            !postItem.pictureUrl.trim() ||
            !validExtensions.some((ext) => postItem.pictureUrl.trim().toLowerCase().endsWith(ext))
        ) {
            console.log("No Url was provided")
            toast.error("Please provide a proper Image Url with the following, .jpg, .jpeg, .png");
            return;
        }

        try {
            await axios.post('http://localhost:5239/api/items', postItem);
            toast.success("Item Added Successfully!");
            fetchData();
        } catch (error) {
            console.log(error)
            toast.error("Error adding item, please dry again.")
        }
    }

    // const toggleFormVisibility = () => {
    //     setShowForm(!showForm)
    // }

    return (
        <div className="rankingsPage">
            <div className="rankingsTitleDiv">
                <h4 className="rankingPageTitle">
                    Rank your favorites!
                </h4>
            </div>
            <div className="itemsDiv">
                {/* <div className="buttonDiv">
                    <button onClick={toggleFormVisibility} className="addItemButton" placeholder="Add Item">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div> */}

                <div className="formDiv" style={{ backgroundColor: 'whitesmoke', margin: '2em' }}>
                    <ToastContainer />
                    {/* {showForm && ( */}
                    <form onSubmit={handleSubmit} className="itemForm">
                        <label style={{ textAlign: 'center', fontSize: '2rem' }}>Add a Movie!</label>
                        {/* <input 
                        type="text" 
                        onChange={handleInput} 
                        placeholder="Movie Name" 
                        value={postItem.title} 
                        name="title"
                        /> */}
                        <input
                            type="text"
                            onChange={handleInput}
                            placeholder="Image Url"
                            value={postItem.pictureUrl}
                            name="pictureUrl"
                            style={{ fontSize: '2rem' }}
                        />
                        <button style={{ fontSize: '2rem' }}>Add</button>
                    </form>
                    {/* )} */}
                </div>

                <div className="itemsListDiv">
                    <DragDropContext>
                        <Droppable droppableId="items">

                            {(provided) => (

                                <ul className="newItemsList" {...provided.droppableProps} ref={provided.innerRef}>
                                    {items.map((item, index) => (
                                        <Draggable key={index} draggableId={index.toString()} index={index}>
                                            {(provided) => (
                                                <li
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    {/* <p className="itemTitle">{item.title}</p> */}
                                                    <img className="itemPic" src={item.pictureUrl} alt={"No IMG"} />
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>

                            )}

                        </Droppable>

                    </DragDropContext>
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