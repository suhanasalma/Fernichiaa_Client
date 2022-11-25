import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../Context/SharedContext';

const BookingModal = () => {
   const { user } = useContext(authContext);
   const [currentUser, serCurrentUser] = useState("");

   useEffect(() => {
     fetch(`http://localhost:5000/users?email=${user?.email}`)
       .then((res) => res.json())
       .then((data) => {
         serCurrentUser(data);
       });
   }, [user?.email]);



   return (
     <div>
       {/* Put this part before </body> tag */}
       <input type="checkbox" id="BookNow" className="modal-toggle" />
       <div className="modal">
         <div className="modal-box relative">
           <label
             htmlFor="BookNow"
             className="btn btn-sm btn-circle absolute right-2 top-2"
           >
             ✕
           </label>
           <h3 className="text-lg font-bold">{currentUser[0]?.name}</h3>
           <p className="py-4">
             You've been selected for a chance to get one year of subscription
             to use Wikipedia for free!
           </p>
           <div className="modal-action">
             <label
               htmlFor="BookNow"
               className="btn bg-secondary text-white border-0"
             >
               Confirm
             </label>
           </div>
         </div>
       </div>
     </div>
   );
};

export default BookingModal;