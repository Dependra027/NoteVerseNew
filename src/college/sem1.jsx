import React from "react";
import "./semfirst.css";

const dsaTopics = [
  {
    subject: "Mathematics 1",
 
    video: "https://youtu.be/w2WdvIHW4v4",
    syllabus:"https://drive.google.com/file/d/1x0Uoo2afoK5RSBp0J7DoA2mE4R6RkEDt/view?usp=sharing"
  },
  {
    subject: "Physics",
    notes: "https://takeuforward.org/interview-experience/linked-list-notes/",
    video: "https://youtu.be/NobHlGUjV3g",
    syllabus:""
  },
  {
    subject: "C",
    notes: "https://takeuforward.org/interview-experience/stacks-queues-notes/",
    video: "https://youtu.be/_eG7zNOZKNY",
    syllabus:""
  },
  {
    subject: "Python",
    notes: "https://takeuforward.org/interview-experience/binary-trees-notes/",
    video: "https://youtu.be/oWn1-rphgYw",
    syllabus:""
  }
];

export default function StriverDSASheet() {
  return (
    <div className="co">
      <h1 className="ti">Semester 1 </h1>
      <div className="ca">
        <table className="dsa-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Notes</th>
              <th>Videos</th>
              <th>Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {dsaTopics.map((topic, index) => (
              <tr key={index}>
                <td>{topic.subject}</td>
                <td>
                  <a href="https://drive.google.com/file/d/1NVa1X7Si6yyC9rHpkl4qIOm2a74Z6xEy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bt">1</a>
                  <a href="https://drive.google.com/file/d/1QGyzcKlIm5-l_6Iq2usmfrmLyNq4zSnu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bt">2</a>
                
                  <a href="https://drive.google.com/file/d/1NmreW-dDoF4f7Kp-YzkG1WznwLv96VQ5/view?usp=sharing " target="_blank" rel="noopener noreferrer" className="bt">3</a>
                  <a href="https://drive.google.com/file/d/1HxgUHI6de_DgZVQ11XJZUGovuiUVrpoK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bt">4</a>
                  <a href="https://drive.google.com/file/d/1PEDdQlfHz_neJTdl0EBx0Vqkx-LZAPnx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bt">5</a>
                  <a href="https://drive.google.com/file/d/1CwaeE1cM8uWYBFr10ew9VEkYWuTD5w-i/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bt">6</a>
                  
                </td>
                <td>
                  <a href={topic.video} target="_blank" rel="noopener noreferrer" className="bt">Watch Video</a>
                </td>
                <td>
                  <a href={topic.syllabus} target="_blank" rel="noopener noreferrer" className="bt">Syllabus</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
