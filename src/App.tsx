import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout } from './components';
import { RequireAuth } from './features/auth/RequireAuth';
import {
    About,
    Chapters,
    Contact,
    ContactThank,
    Course,
    Courses,
    Error404NotFound,
    Home,
    Lessons,
    Login,
    Signup,
    SubLesson,
    Welcome,
} from './pages';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/thank" element={<ContactThank />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Learn section routes */}
                <Route path="/learn" element={<Courses />} />
                <Route path="/learn/:course" element={<Course />} />
                <Route path="/learn/:course/chapters" element={<Chapters />} />
                <Route
                    path="/learn/:course/chapters/:chapter/lessons"
                    element={<Lessons />}
                />
                <Route
                    path="/learn/:course/chapters/:chapter/lessons/:lesson/sub-lessons/:sublesson"
                    element={<SubLesson />}
                />

                {/* Practice section routes */}

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path="welcome" element={<Welcome />} />
                </Route>

                {/* catch-all route for 404 */}
                <Route path="/not-found" element={<Error404NotFound />} />
                <Route
                    path="*"
                    element={<Navigate to="/not-found" replace />}
                />
            </Route>
        </Routes>
    );
};

export default App;
