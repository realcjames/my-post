import { Route, Routes } from 'react-router-dom';
import PostList from '../pages/PostList';
import PostEdit from '../pages/PostEdit';
import PostAdd from '../pages/PostAdd';

export default function Router() {
    return (
        <Routes>
            <Route
                path='/'
                element={<PostList />}
            />
            <Route
                path='/edit'
                element={<PostEdit />}
            />
            <Route
                path='/add'
                element={<PostAdd />}
            />
        </Routes>
    );
}
