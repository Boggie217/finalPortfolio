
import React, { useState, useEffect } from 'react';

const BugFixes = () => {
  const [formData, setFormData] = useState({
    project: '',
    title: '',
    description: '',
  });
  const [submittedBugs, setSubmittedBugs] = useState([]);

  // Load submitted bugs from localStorage on component mount
  useEffect(() => {
    const storedBugs = JSON.parse(localStorage.getItem('submittedBugs')) || [];
    setSubmittedBugs(storedBugs);
  }, []);

  // Save submitted bugs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('submittedBugs', JSON.stringify(submittedBugs));
  }, [submittedBugs]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedBugs([...submittedBugs, formData]);
    setFormData({ project: '', title: '', description: '' });
    alert('Thank you for your report!');
  };

  // Update a bug
  const updateBug = (index, updatedBug) => {
    const newBugs = [...submittedBugs];
    newBugs[index] = updatedBug;
    setSubmittedBugs(newBugs);
  };

  // Delete a bug
  const deleteBug = (index) => {
    const newBugs = [...submittedBugs];
    newBugs.splice(index, 1);
    setSubmittedBugs(newBugs);
  };

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-4">Bug Fixes</h1>
      <div className="alert alert-success d-none" role="alert">
        Thank you for letting us know about a bug!
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Recent Fixes</h2>
          <ul className="list-group">
            {/* ... your bug fix details ... */}
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Ongoing Development (New Bugs)</h2>
          <p>
            Please report any new bugs you encounter here. We appreciate your
            feedback!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="project" className="form-label">
                Project
              </label>
              <input
                type="text"
                className="form-control"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                placeholder="Enter the project name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Bug Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter a descriptive title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Describe the bug in detail"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit New Bug
            </button>
          </form>
        </div>
      </div>
      <h2>Submitted Bugs</h2>
      {submittedBugs.length > 0 ? (
        <div className="d-flex flex-wrap">
          {submittedBugs.map((bug, index) => (
            <div key={index} className="card mx-2 mb-2">
              <div className="card-body">
                <h5 className="card-title">{bug.title}</h5>
                <p className="card-text">
                  <strong>Project:</strong> {bug.project}
                </p>
                <p className="card-text">{bug.description}</p>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => updateBug(index, { ...bug, status: 'In Progress' })}
                >
                  Update Status
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBug(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No bugs submitted yet.</p>
      )}
      <h2>Resolved Issues (Maintenance)</h2>
      {/* ... List of resolved issues with status indicators (e.g., badges) ... */}
      <p>
        {/* ... same explanation about resolved issues and status indicators ... */}
      </p>
    </div>
  );
};

export default BugFixes;
