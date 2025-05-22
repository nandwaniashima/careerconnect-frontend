import React from "react";

const Extras = ({ formData, setFormData }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white border-4 border-white rounded-lg shadow-lg">
    
      <div className="mb-6">
        <img
          src="https://www.freevector.com/uploads/vector/preview/49279/Vecteezy_People_Activity-Collaboration__professional_-Character_Focused_Ilustration_IS0821.jpg"
          alt="Extras"
          className="w-full h-65 rounded-t-lg object-cover"
        />
        <h2 className="text-center text-2xl mt-3">Let's Add Some Extras</h2>
        <p className="text-center mb-4">Languages and Hobbies</p>
        <hr className="mb-4" />
      </div>

      <form className="grid grid-cols-1 gap-4">
        {/* Languages Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Languages You Can Speak:</h3>
          <input
            type="text"
            placeholder="Enter languages (e.g., English, Spanish)"
            className="p-2 border-2 border-black rounded-md w-full"
            value={formData.extra_1}
            onChange={(e) => {
              setFormData({ ...formData, extra_1: e.target.value });
            }}
          />
        </div>

        <hr className="my-6" />

        {/* Hobbies Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Things You Like to Do:</h3>
          <input
            type="text"
            placeholder="Enter hobbies (e.g., Reading, Traveling)"
            className="p-2 border-2 border-black rounded-md w-full"
            value={formData.extra_2}
            onChange={(e) => {
              setFormData({ ...formData, extra_2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Extras;
