import React from 'react';

const EditModal = ({ modalInfo }) => {
   const { title, newPrice, details, _id } = modalInfo;
   console.log(modalInfo)

   const handleEdit = (e) =>{
      e.preventDefault()
      console.log('clicked')
      const form = e.target;
      const title = form.title.value;
      const newPrice = form.newPrice.value;
      const details = form.details.value;

      const updateInfo = {
        title,
        newPrice,
        details,
      };
      console.log(updateInfo);
        fetch(`http://localhost:5000/products/edit/${_id}`, {
          method: "post",
          headers:{
            'content-type':'application/json'

          },
          body:JSON.stringify(updateInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          
         console.log(data)
              //  alert("successfully updated");

        })

   }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form onSubmit={handleEdit} className="space-y-5" action="">
            <div>
              <label className="w-full" htmlFor="">
                Product Name
              </label>
              <input
                name="title"
                className="w-full border p-2"
                type="text"
                defaultValue={title}
              />
            </div>
            <div>
              <label className="w-full" htmlFor="">
                Product Price
              </label>
              <input
                name="newPrice"
                className="w-full border p-2"
                type="text"
                defaultValue={`${newPrice} $`}
              />
            </div>
            <div>
              <label className="w-full" htmlFor="">
                Product Details
              </label>
              <input
                name="details"
                className="w-full border p-2"
                type="text"
                defaultValue={details}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn w-full border-0 text-white bg-secondary"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;