import React from "react";

function CreateStudent() {
  return (
    <div className="container">
      <h1>Create Student</h1>
      <hr />
      <form>
        <div class="mb-3">
          <label for="exampleInputId" class="form-label">
            Student Id
          </label>
          <input type="text" class="form-control" id="exampleInputId" />
        </div>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Student Name
          </label>
          <input type="text" class="form-control" id="exampleInputName" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateStudent;
