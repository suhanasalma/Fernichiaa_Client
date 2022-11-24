import React from 'react';

const Information = ({information}) => {
   const{icon,title,desc} = information
   return (
     <div className="flex items-center justify-center gap-5 mb-20">
       <img src={icon} alt="" />
       <div>
         <h1>{title}</h1>
         <p>{desc}</p>
       </div>
     </div>
   );
};

export default Information;