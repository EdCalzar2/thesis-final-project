import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './components/pages/Login.css';
import Login from './components/pages/Login';
import MainPage from './MainPage';
import { Story, Safety_map } from './components/pages';
import ManageStories from './components/pages/ManageStories';
import SignUp from './components/pages/SignUp';

function App() {
  const [stories, setStories] = useState([]); // Approved stories
  const [pendingStories, setPendingStories] = useState([]); // Stories awaiting moderation
  
  // Function to add a new story to pending queue (from Form component)
  const addPendingStory = (newStoryText) => {
    const storyWithId = {
      id: Date.now(), // Simple ID generation
      text: newStoryText,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    setPendingStories(prev => [...prev, storyWithId]);
  };

  // Function to approve a story (move from pending to approved)
  const approveStory = (storyId) => {
    const storyToApprove = pendingStories.find(story => story.id === storyId);
    if (storyToApprove) {
      // Add the story text to the approved stories array (matching your existing format)
      setStories(prev => [...prev, storyToApprove.text]);
      setPendingStories(prev => prev.filter(story => story.id !== storyId));
    }
  };

  // Function to reject/delete a pending story
  const rejectStory = (storyId) => {
    setPendingStories(prev => prev.filter(story => story.id !== storyId));
  };

  // Function to delete an approved story (matching your existing format)
  const deleteApprovedStory = (storyText) => {
    setStories(prev => prev.filter(story => story !== storyText));
  };

  return (
    <Routes>
      {/* Route for the login page */}
      <Route path="/" element={<Login />} />
      {/* Route for the story page, wrapped in MainPage layout */}
      <Route path="/story" element={<MainPage><Story stories={stories} setStories={setStories} onAddStory={addPendingStory} /></MainPage>} />
      {/* Route for the safety map page, wrapped in MainPage layout */}
      <Route path="/safety_map" element={<MainPage><Safety_map /></MainPage>} />
      {/* Route for the admin page, NO MainPage layout (no NavBar) */}
      <Route 
        path="/manageStories" 
        element={
          <ManageStories 
            pendingStories={pendingStories}
            approvedStories={stories}
            onApprove={approveStory}
            onReject={rejectStory}
            onDelete={deleteApprovedStory}
          />
        } 
      />
      {/* Route for the sign up page */}
      <Route 
        path="/signUp" 
        element={
          <SignUp 
            onSubmitStory={addPendingStory}
          />
        } 
      />
    </Routes>
  );
}

export default App;
