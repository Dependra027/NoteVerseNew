// eslint-disable-next-line no-unused-vars
import React from 'react';
import './CollegeNotes.css';
import { Link } from 'react-router-dom';

const CollegeNotes = () => {
  const notes = [
    {
      grade: "ENGINEERING",
      title: "Btech, Mtech, MBA, MS, ..",
      description: "Go, and Find your Branch Notes!",
      image: "https://img.freepik.com/premium-photo/blue-robot-head-with-face-middle_894855-1321.jpg",
      link: "/Engineering",
      
    },
    {
      grade: "MEDICAL",
      title: "MBBS, MD, BPharma",
      description: "Grab your Medical Notes here!",
      image: "https://th.bing.com/th/id/OIP.iXXHV8Ayq-zEWkS5PRUCeAAAAA?rs=1&pid=ImgDetMain",
      link: "/Medical",
    },
    {
      grade: "COMMERCE",
      title: "BCOM, BBA, MCOM,....",
      description: "Grab your notes related to Commerce.",
      image: "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png",
      link: "/Commerce",
    },
    {
      grade: "ARTS",
      title: "BA, MA,... ",
      description: "All notes related to Arts.",
      image: "https://th.bing.com/th/id/OIP.xZihVj5RxsB1005Wxp0mAAHaHa?rs=1&pid=ImgDetMain",
      link: "/Arts",
    },
  ];

  return (
    <div className="college-notes" id="college-notes">
      <h2 className="heading">College Notes<span style={{ color: 'green', fontSize: '20px' }}><br></br>(Engineering notes available only for the time )</span></h2>
      <div className="notes-container">
        {notes.map((note, index) => (
          <Link to={note.link} key={index} className="note-card-link">
            <div className="note-card">
              <img src={note.image} alt={note.title} className="note-image" />
              <div className="note-content">
                <h3>{note.grade}</h3>
                <h4>{note.title}</h4>
                <p>{note.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollegeNotes;

