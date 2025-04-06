import "./CollegePage.css";


const College=()=>{

    const sem=[
        {
            name:"Semester 1",
            Description:"Get notes for Sem 1",
           
            Link:"/semfirst",
            Image:"https://th.bing.com/th/id/OIP.niBQi-VaG5C8Vne6Uxv1lgHaFQ?w=1024&h=726&rs=1&pid=ImgDetMain",

        },
        {
            name:"Semester 2",
            Description:"Get notes for Sem 2",
           
            Link:"https://drive.google.com/drive/u/0/folders/12VybNrLwwq-1g27vxRXTc-riGjDOX_Ii",
            Image:"https://th.bing.com/th/id/OIP.EKLeQu099_6jnPnCJ-HsZAAAAA?w=360&h=360&rs=1&pid=ImgDetMain",

        },
        {
            name:"Semester 3",
            Description:"Get notes for Sem 3",
            
            Link:"https://drive.google.com/drive/u/0/folders/12VybNrLwwq-1g27vxRXTc-riGjDOX_Ii",
            Image:"https://1.bp.blogspot.com/-c4LFDtNNuVI/WmNHxdio2AI/AAAAAAAAB-c/19_ZmvikFKwRqON0bNapOsMNTnDGhfS-ACLcBGAs/s1600/3-semester.png",

        },
        {
            name:"Semester 4",
            Description:"Get notes for Sem 4",
            
            Link:"https://drive.google.com/drive/u/0/folders/12VybNrLwwq-1g27vxRXTc-riGjDOX_Ii",
            Image:"https://4.bp.blogspot.com/-EJ1Z2YO5eIw/VACRRV4I4UI/AAAAAAAAEBM/DCT9mDNw7Sk/s1600/4.semester.png",

        },
        {
          name:"Semester 5",
          Description:"Get notes for Sem 5",
          
          Link:"https://drive.google.com/drive/u/0/folders/12VybNrLwwq-1g27vxRXTc-riGjDOX_Ii",
          Image:"https://3.bp.blogspot.com/-nFYkAewiFPE/VSqtBec11FI/AAAAAAAAAD8/4antVqUwvjs/s1600/smt%2B5%2Bup.jpg",

      },
      {
        name:"Semester 6",
        Description:"Get notes for Sem 6",
       
        Link:"https://drive.google.com/drive/u/0/folders/12VybNrLwwq-1g27vxRXTc-riGjDOX_Ii",
        Image:"https://img.freepik.com/premium-vector/education-logo-letter-6-template-open-book-logo-6-letter-initial-educational-sign-concept_754537-544.jpg",

    },
    {
      name:"Semester 7",
      Description:"Get notes for Sem 7",
   
      Link:"https://drive.google.com/drive/u/0/folders/12VybNrLwwq-1g27vxRXTc-riGjDOX_Ii",
      Image:"https://4.bp.blogspot.com/-domxFet3MyA/W5aU_7FesnI/AAAAAAABKoc/vLePbQWFb6IILyr-5SCIav9-RvY1lB_-ACLcBGAs/s1600/Sem-7.png",

  }
  ,
    {
      name:"Semester 8",
      Description:"Get notes for Sem 8",
      
      Link:"https://drive.google.com/drive/u/0/folders/12VybNrLwwq-1g27vxRXTc-riGjDOX_Ii",
      Image:"https://cdn.dribbble.com/users/5766259/screenshots/14181552/shot-cropped-1599814953349.png ",

  }
    ]
return(
    <div className="college-Page">
    <h2 className="heading-page">College Notes</h2>
    <div className="page-container">
      {sem.map((note, index) => (
        <div key={index} className="page-card">
          <img src={note.Image} alt={note.name} className="page-image" />
          <div className="page-content">
            <h3>{note.name}</h3>
            <h4>{note.Description}</h4>
           
           
<button className="btn"> <a href={note.Link}>Click here</a>
</button>
          </div>
        </div>
      ))}
    </div>
  </div>
    
)
}

export default College;
