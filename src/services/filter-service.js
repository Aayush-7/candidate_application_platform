const minExp = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' }
  ]
  ;
const minBasePay = [
    { value: 5, label: '5L' },
    { value: 10, label: '10L' },
    { value: 20, label: '20L' },
    { value: 30, label: '30L' },
    { value: 40, label: '40L' },
    { value: 50, label: '50L' },
    { value: 60, label: '60L' },
    { value: 70, label: '70L' },
  ];
const location =[
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'noida', label: 'Noida' },
    { value: 'gurugram', label: 'Gurugram' },
    { value: 'noida', label: 'Noida' },
    { value: 'bhopal', label: 'Bhopal' },
    { value: 'indore', label: 'Indore' },
    { value: 'nagpur', label: 'Nagpur' },
    { value: 'mysore', label: 'Mysore' },
    { value: 'kozhikode', label: 'Kozhikode' },
    { value: 'kochi', label: 'Kochi' }
  ];
const jobRole = [
    { value: 'software engineer', label: 'Software Engineer' },
    { value: 'data analyst', label: 'Data Analyst' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'team lead', label: 'team lead' },
    { value: 'ios', label: 'IOS' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'android', label: 'Android' },
    { value: 'product manager', label: 'Product Manager' },
    { value: 'ai_engineer', label: 'AI Engineer' },
    { value: 'dev-ops', label: 'Dev-Ops' },
    { value: 'business analyst', label: 'Business Analyst' },
    { value: 'qa engineer', label: 'QA Engineer' },
    { value: 'it consultant', label: 'IT Consultant' },
    { value: 'technical writer', label: 'Technical Writer' }
  ];  
const remote =[
    { value: "remote", label: "remote" },
    { value: "In Office", label: "In Office" },
    { value: "hybrid", label: "hybrid" }
  ];


function getValueInRs(currencyCode){
    if(!currencyCode){
        return 0;
    }
    switch(currencyCode){
        case "USD":
            return 80;
        case "INR":
            return 1;
        default:
            return 1;

    }
}
function getOptionBasedOnFilter(type){
    
      switch(type){
        case "Min experience":
          return minExp;
        case "Min base pay":
          return minBasePay;
        case "Job role":
          return jobRole;
        case "Remote":
            return remote
        case "location":
          return location;
          
      }
  }
export {getOptionBasedOnFilter, getValueInRs};