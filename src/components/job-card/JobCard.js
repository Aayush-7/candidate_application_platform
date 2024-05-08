import React, { useEffect,useRef } from 'react'
import "./JobCard.css"
import { Button } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';
const JobCard = (props) => {
    const refJobDetail = useRef(null);
    const {
        jobDetailsFromCompany,
        jobRole,
        location,
        maxExp,
        maxJdSalary,
        minExp,
        minJdSalary,
        salaryCurrencyCode,
        companyName,
        logoUrl} =props.jobDetail;
    
    useEffect(()=>{
        const stopClickEventInsideJobDetail=(event)=>{

            event.stopPropagation();
        }

        document.querySelector(".job-detail").addEventListener("click",stopClickEventInsideJobDetail);

        return ()=>{
            window.removeEventListener("click",stopClickEventInsideJobDetail);
        }

    },[])
    useEffect(() => {
        const handleClickOutside = (event) => {
           
            if (!event.target.matches(".job-detail") && !event.target.matches("a") ) {
                if(refJobDetail.current.classList.contains("job-container-visibility")){
                    refJobDetail.current.classList.remove("job-container-visibility");
                }
            }
        };
    
        window.addEventListener('click', handleClickOutside);
    
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function showJobDetail(){
        refJobDetail.current.classList.add("job-container-visibility");
        console.log(refJobDetail.current.classList);
    }

  return (<>
    <div className='card-container'>
        <div className='card-header'>
            <img src={logoUrl} alt="logo"/>
            <div className='items'>
                {companyName && <h3>{companyName}</h3>}
                {jobRole && <h3>{jobRole}</h3>}
                {location && <h4>{location}</h4>}
            </div>
        </div>
        { minJdSalary && maxJdSalary &&
            <p id='estimated_salary'>Estimated Salary: {minJdSalary} - {maxJdSalary} LPA</p>}

        {jobDetailsFromCompany && 
        <div className='card-body'>
            <h3>Job description</h3>
            <p>{jobDetailsFromCompany.substring(0,200)}</p>
            <div>
                <a onClick={showJobDetail}>Show more</a>
            </div>
        </div>}

        <div className='card-footer'>
           {minExp && <> 
            <h3>Minimum Experience</h3>
            <h4>{minExp} years</h4>
            </>
            }
            <Button variant="contained" color='success' startIcon={<BoltIcon  color='warning'/>}>
                Easy apply
            </Button>
        </div>
    </div>

     <div className='job-container' ref={refJobDetail}>
        <div className='job-detail' >
            <div>
                <h2>About the Role</h2>
                <h4>Overview</h4>

                <span>Company name: <strong>{companyName} </strong></span>
                <h4>Role: <strong>{jobRole}</strong></h4>
                <ul>
                    <li>Salary: {minJdSalary} {salaryCurrencyCode} per annum</li>
                    <li>Experience: {minExp}+ years</li>
                    <li>Location: {location}</li>
                </ul>
            </div>
            <div>
                <h3>Job description</h3>
                <p>{jobDetailsFromCompany}</p>
            </div>
            <Button variant="contained" color='primary'>Apply for this job</Button>
        </div>
    </div>
  </>
  )
}

export default JobCard