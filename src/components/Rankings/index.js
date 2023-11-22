import React from "react";
import { useState, useEffect } from "react";
import './index.scss';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DndContext, closestCenter, useDroppable } from "@dnd-kit/core";
import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities'


const Rankings = () => {

    const [items, setItems] = useState([]);

    const [postItem, setPostItem] = useState({
        title: '',
        pictureUrl: '',
    });

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
            console.log(postItem)
        } catch (error) {
            console.log(error)
            toast.error("Error adding item, please dry again.")
        }
    }

    const handleSelect = () => {
        console.log('Selected')
    }

    // function Droppable(props) {
    //     const {isOver, setNodeRef} = useDroppable({
    //         id: 'droppable',
    //     });
    //     const style = {
    //         color: isOver ? 'green' : undefined,
    //     };
    // }

    const SortableItem = ({ item }) => {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition
        } = useSortable({ id: item.id });
        const style = {
            transition,
            transform: CSS.Transform.toString(transform)
        }
        return (
            <li className="singleItem" ref={setNodeRef} style={style} {...attributes} {...listeners} onClick={handleSelect}>
                <img className="itemPic" src={item.pictureUrl} alt={"No IMG"}/>
                {/* <button>
                    <FontAwesomeIcon className="xButton" icon={faXmark}/>
                </button> */}
            </li>
        )
    }

    const onDragEnd = event => {
        const { active, over } = event;
        if (active.id === over.id) {
            return;
        }
        setItems(items => {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);
            return arrayMove(items, oldIndex, newIndex);
        })
        console.log('onDragEnd', event)
    }

    return (
        <div className="rankingsPage">
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                <div className="rankingsTitleDiv">
                    <h4 className="rankingPageTitle">
                        Rank your favorites!
                    </h4>
                </div>
                <div className="itemsDiv">
                    <div className="formDiv" style={{ backgroundColor: 'whitesmoke', margin: '2em' }}>
                        <ToastContainer />
                        <form onSubmit={handleSubmit} className="itemForm">
                            <label style={{ textAlign: 'center', fontSize: '2rem' }}>Add a Movie!</label>
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
                    </div>
                    <div className="itemsListDiv">
                        <ul className="newItemsList">
                            <SortableContext items={items} strategy={horizontalListSortingStrategy}>
                                {items.map((item) => (
                                    <SortableItem key={item.id} item={item} />
                                ))}
                            </SortableContext>
                        </ul>
                    </div>
                </div>
                <div className="rankingTiersDiv">
                    <ul className="rankingsList">
                        <ul style={{
                            backgroundColor: '#ff6961'
                        }} className="tier">
                                <h2>
                                    S
                                </h2>
                            <SortableContext items={items} strategy={horizontalListSortingStrategy}>
                                {/* {items.map((item) => (
                                    <SortableItem key={item.id} item={item}/>
                                ))} */}
                            </SortableContext>
                        </ul>
                        <ul style={{
                            backgroundColor: '#ffb480'
                        }} className="tier">
                            <h2>
                                A
                            </h2>
                        </ul>
                        <ul style={{
                            backgroundColor: '#f8f38d'
                        }} className="tier">
                            <h2>
                                B
                            </h2>
                        </ul>
                        <ul style={{
                            backgroundColor: '#42d6a4'
                        }} className="tier">
                            <h2>
                                C
                            </h2>
                        </ul>
                        <ul style={{
                            backgroundColor: '#08cad1'
                        }} className="tier">
                            <h2>
                                D
                            </h2>
                        </ul>
                        <ul style={{
                            backgroundColor: '#59adf6'
                        }} className="tier">
                            <h2>
                                E
                            </h2>
                        </ul>
                        <ul style={{
                            backgroundColor: '#9d94ff'
                        }} className="tier">
                            <h2>
                                F
                            </h2>
                        </ul>
                    </ul>
                </div>
            </DndContext>
        </div>
    )
}

export default Rankings;