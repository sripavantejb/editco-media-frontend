import React, { useState, useEffect } from 'react';
import { apiFetch } from '../config/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import BlurText from './BlurText';

function AdminPanel() {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  // Check if admin is logged in
  useEffect(() => {
    const adminSession = localStorage.getItem('adminLoggedIn');
    if (!adminSession) {
      navigate('/login');
      return;
    }
  }, [navigate]);

  // Fetch submissions
  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await apiFetch('/api/admin/submissions');
      const data = await response.json();
      
      if (data.success) {
        setSubmissions(data.data);
      } else {
        setError('Failed to fetch submissions');
      }
    } catch (err) {
      setError('Error fetching submissions');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await apiFetch(`/api/admin/submissions/${id}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status: newStatus })
      });

      const data = await response.json();
      if (data.success) {
        // Update the submission in the list
        setSubmissions(prev => 
          prev.map(sub => sub._id === id ? { ...sub, status: newStatus } : sub)
        );
        setSelectedSubmission(prev => 
          prev && prev._id === id ? { ...prev, status: newStatus } : prev
        );
        toast.success('Status updated successfully');
      } else {
        toast.error('Failed to update status');
      }
    } catch (err) {
      console.error('Error updating status:', err);
      toast.error('Error updating status');
    }
  };

  const deleteSubmission = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const response = await apiFetch(`/api/admin/submissions/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      if (data.success) {
        setSubmissions(prev => prev.filter(sub => sub._id !== id));
        setSelectedSubmission(null);
        toast.success('Submission deleted successfully');
      } else {
        toast.error('Failed to delete submission');
      }
    } catch (err) {
      console.error('Error deleting submission:', err);
      toast.error('Error deleting submission');
    }
  };

  const logout = () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminSession');
    navigate('/');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'reviewed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'contacted': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusHoverColors = (status) => {
    switch (status) {
      case 'pending': return 'from-yellow-500 to-yellow-400';
      case 'reviewed': return 'from-blue-500 to-blue-400';
      case 'contacted': return 'from-purple-500 to-purple-400';
      case 'completed': return 'from-green-500 to-green-400';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getStatusActiveColors = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 border-yellow-500';
      case 'reviewed': return 'bg-blue-500 border-blue-500';
      case 'contacted': return 'bg-purple-500 border-purple-500';
      case 'completed': return 'bg-green-500 border-green-500';
      default: return 'bg-gray-500 border-gray-500';
    }
  };

  const filteredSubmissions = statusFilter === 'all' 
    ? submissions 
    : submissions.filter(sub => sub.status === statusFilter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffd600] mx-auto mb-4"></div>
          <p className="text-white/70 text-[16px] md:text-[18px]">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-28 md:pt-32 px-4 md:px-8 pb-16">
        {/* Animated Header */}
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div>
            <BlurText
              text="ADMIN PANEL"
              className="text-[48px] md:text-[72px] lg:text-[80px] leading-[0.9] tracking-tight font-extrabold text-[#d5d20d] mb-4"
              animateBy="words"
              direction="top"
              delay={150}
              stepDuration={0.4}
            />
            <p className="text-white/70 text-[16px] md:text-[18px]">
              Contact Form Submissions Management
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <span className="text-white/70 text-[14px] md:text-[16px]">
              Total: {submissions.length} submissions
            </span>
            <button
              onClick={logout}
              className="relative px-6 py-2.5 text-[14px] md:text-[16px] text-white border border-white/30 rounded-xl overflow-hidden group hover:text-black transition-colors duration-200"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-red-500 to-red-400 transition-all duration-500 ease-in-out group-hover:h-full"></span>
              <span className="relative z-10">Logout</span>
            </button>
          </div>
        </div>

      <div className="container mx-auto px-0">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setStatusFilter('all')}
              className={`relative px-6 py-2.5 text-[14px] md:text-[16px] border rounded-xl overflow-hidden group transition-colors duration-200 ${
                statusFilter === 'all' 
                  ? 'text-black border-[#ffd600] bg-[#ffd600]' 
                  : 'text-white border-white/30 hover:text-black'
              }`}
            >
              <span className={`absolute inset-x-0 bottom-0 h-0 transition-all duration-500 ease-in-out ${
                statusFilter === 'all' ? 'h-full bg-[#ffd600]' : 'bg-gradient-to-t from-[#ffd600] to-[#fff9be] group-hover:h-full'
              }`}></span>
              <span className="relative z-10">All ({submissions.length})</span>
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`relative px-6 py-2.5 text-[14px] md:text-[16px] border rounded-xl overflow-hidden group transition-colors duration-200 ${
                statusFilter === 'pending' 
                  ? 'text-black border-yellow-500 bg-yellow-500' 
                  : 'text-white border-white/30 hover:text-black'
              }`}
            >
              <span className={`absolute inset-x-0 bottom-0 h-0 transition-all duration-500 ease-in-out ${
                statusFilter === 'pending' ? 'h-full bg-yellow-500' : `bg-gradient-to-t ${getStatusHoverColors('pending')} group-hover:h-full`
              }`}></span>
              <span className="relative z-10">Pending ({submissions.filter(s => s.status === 'pending').length})</span>
            </button>
            <button
              onClick={() => setStatusFilter('reviewed')}
              className={`relative px-6 py-2.5 text-[14px] md:text-[16px] border rounded-xl overflow-hidden group transition-colors duration-200 ${
                statusFilter === 'reviewed' 
                  ? 'text-black border-blue-500 bg-blue-500' 
                  : 'text-white border-white/30 hover:text-black'
              }`}
            >
              <span className={`absolute inset-x-0 bottom-0 h-0 transition-all duration-500 ease-in-out ${
                statusFilter === 'reviewed' ? 'h-full bg-blue-500' : `bg-gradient-to-t ${getStatusHoverColors('reviewed')} group-hover:h-full`
              }`}></span>
              <span className="relative z-10">Reviewed ({submissions.filter(s => s.status === 'reviewed').length})</span>
            </button>
            <button
              onClick={() => setStatusFilter('contacted')}
              className={`relative px-6 py-2.5 text-[14px] md:text-[16px] border rounded-xl overflow-hidden group transition-colors duration-200 ${
                statusFilter === 'contacted' 
                  ? 'text-black border-purple-500 bg-purple-500' 
                  : 'text-white border-white/30 hover:text-black'
              }`}
            >
              <span className={`absolute inset-x-0 bottom-0 h-0 transition-all duration-500 ease-in-out ${
                statusFilter === 'contacted' ? 'h-full bg-purple-500' : `bg-gradient-to-t ${getStatusHoverColors('contacted')} group-hover:h-full`
              }`}></span>
              <span className="relative z-10">Contacted ({submissions.filter(s => s.status === 'contacted').length})</span>
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`relative px-6 py-2.5 text-[14px] md:text-[16px] border rounded-xl overflow-hidden group transition-colors duration-200 ${
                statusFilter === 'completed' 
                  ? 'text-black border-green-500 bg-green-500' 
                  : 'text-white border-white/30 hover:text-black'
              }`}
            >
              <span className={`absolute inset-x-0 bottom-0 h-0 transition-all duration-500 ease-in-out ${
                statusFilter === 'completed' ? 'h-full bg-green-500' : `bg-gradient-to-t ${getStatusHoverColors('completed')} group-hover:h-full`
              }`}></span>
              <span className="relative z-10">Completed ({submissions.filter(s => s.status === 'completed').length})</span>
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Submissions List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Submissions List */}
          <div className="space-y-6">
            {filteredSubmissions.length === 0 ? (
              <div className="bg-[#1d1d1f] border border-white/10 rounded-xl p-8 text-center">
                <p className="text-white/70 text-[16px]">No submissions found</p>
              </div>
            ) : (
              filteredSubmissions.map((submission) => (
                <div
                  key={submission._id}
                  onClick={() => setSelectedSubmission(submission)}
                  className={`bg-[#1d1d1f] border border-white/10 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:border-[#ffd600]/30 hover:bg-[#1d1d1f]/80 ${
                    selectedSubmission?._id === submission._id ? 'ring-2 ring-[#ffd600]/50 border-[#ffd600]/30' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-medium text-[18px] md:text-[20px]">
                        {submission.firstName} {submission.lastName}
                      </h3>
                      <p className="text-white/70 text-[14px] md:text-[16px] mt-1">{submission.emailAddress}</p>
                    </div>
                    <span className={`px-3 py-1.5 rounded-lg text-[12px] md:text-[14px] font-medium border ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </div>
                  <div className="text-white/70 text-[14px] md:text-[16px] space-y-2">
                    <p><span className="text-white/90 font-medium">Project:</span> {submission.projectType}</p>
                    <p><span className="text-white/90 font-medium">Budget:</span> {submission.budgetRange}</p>
                    <p><span className="text-white/90 font-medium">Timeline:</span> {submission.timeline}</p>
                    <p><span className="text-white/90 font-medium">Submitted:</span> {formatDate(submission.createdAt)}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column - Submission Details */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            {selectedSubmission ? (
              <div className="bg-[#1d1d1f] border border-white/10 rounded-xl p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-[20px] md:text-[24px] font-medium text-white">
                    <span className="text-[#AAA80F]">Submission</span> <span className="text-[#63676A]">Details</span>
                  </h2>
                  <button
                    onClick={() => deleteSubmission(selectedSubmission._id)}
                    className="relative px-4 py-2 text-[12px] md:text-[14px] text-white border border-white/30 rounded-lg overflow-hidden group hover:text-black transition-colors duration-200"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-red-500 to-red-400 transition-all duration-500 ease-in-out group-hover:h-full"></span>
                    <span className="relative z-10">Delete</span>
                  </button>
                </div>

                {/* Personal Information */}
                <div className="mb-6">
                  <h3 className="text-white font-medium text-[16px] md:text-[18px] mb-4">Personal Information</h3>
                  <div className="space-y-3 text-white/70 text-[14px] md:text-[16px]">
                    <p><span className="text-white/90 font-medium">Name:</span> {selectedSubmission.firstName} {selectedSubmission.lastName}</p>
                    <p><span className="text-white/90 font-medium">Email:</span> {selectedSubmission.emailAddress}</p>
                    <p><span className="text-white/90 font-medium">Phone:</span> {selectedSubmission.phoneNumber}</p>
                    {selectedSubmission.companyName && (
                      <p><span className="text-white/90 font-medium">Company:</span> {selectedSubmission.companyName}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="mb-6">
                  <h3 className="text-white font-medium text-[16px] md:text-[18px] mb-4">Project Details</h3>
                  <div className="space-y-3 text-white/70 text-[14px] md:text-[16px]">
                    <p><span className="text-white/90 font-medium">Type:</span> {selectedSubmission.projectType}</p>
                    <p><span className="text-white/90 font-medium">Budget:</span> {selectedSubmission.budgetRange}</p>
                    <p><span className="text-white/90 font-medium">Timeline:</span> {selectedSubmission.timeline}</p>
                    {selectedSubmission.servicesNeeded && selectedSubmission.servicesNeeded.length > 0 && (
                      <div>
                        <span className="text-white/90 font-medium">Services Needed:</span>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                          {selectedSubmission.servicesNeeded.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-6">
                  <h3 className="text-white font-medium text-[16px] md:text-[18px] mb-4">Project Description</h3>
                  <p className="text-white/70 bg-black/20 border border-white/10 p-4 rounded-lg text-[14px] md:text-[16px] leading-relaxed">
                    {selectedSubmission.projectDescription}
                  </p>
                </div>

                {/* Status Management */}
                <div className="mb-6">
                  <h3 className="text-white font-medium text-[16px] md:text-[18px] mb-4">Status Management</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['pending', 'reviewed', 'contacted', 'completed'].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(selectedSubmission._id, status)}
                        className={`relative px-4 py-2.5 text-[12px] md:text-[14px] border rounded-lg overflow-hidden group transition-colors duration-200 ${
                          selectedSubmission.status === status
                            ? `text-black ${getStatusActiveColors(status)}`
                            : 'text-white border-white/30 hover:text-black'
                        }`}
                      >
                        <span className={`absolute inset-x-0 bottom-0 h-0 transition-all duration-500 ease-in-out ${
                          selectedSubmission.status === status ? `h-full ${status === 'pending' ? 'bg-yellow-500' : status === 'reviewed' ? 'bg-blue-500' : status === 'contacted' ? 'bg-purple-500' : 'bg-green-500'}` : `bg-gradient-to-t ${getStatusHoverColors(status)} group-hover:h-full`
                        }`}></span>
                        <span className="relative z-10">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Metadata */}
                <div className="text-white/50 text-[12px] md:text-[14px] space-y-2 pt-4 border-t border-white/10">
                  <p><span className="text-white/70 font-medium">Submitted:</span> {formatDate(selectedSubmission.createdAt)}</p>
                  <p><span className="text-white/70 font-medium">Last Updated:</span> {formatDate(selectedSubmission.updatedAt)}</p>
                  <p><span className="text-white/70 font-medium">ID:</span> {selectedSubmission._id}</p>
                </div>
              </div>
            ) : (
              <div className="bg-[#1d1d1f] border border-white/10 rounded-xl p-8 text-center">
                <p className="text-white/70 text-[16px]">Select a submission to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminPanel;
