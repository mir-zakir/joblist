import React from 'react';
import './App.css';
import JobBrief from './JobBrief';
import jobs from './jobs.json';

function App() {
  //console.log(job.map(job=>job.name));
  return (
    jobs.map(job=>{
      return (
        <JobBrief 
          title={job.name} 
          location={job.location.city +', '+ job.location.country}
          image={job.logo}
          salary={job.salary}
          detail={job.description}/>
    );
  })
  );
}

export default App;
