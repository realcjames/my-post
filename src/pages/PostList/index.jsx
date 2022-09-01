import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import LinkToProfile from './LinkToProfile';
import SwitchTab from './SwitchTab';
import PostItem from './PostItem';
import ToCreate from './ToCreate';
import { setStore, getStore } from '../../utils/store'
import { useNavigate } from 'react-router-dom';

const link = 'https://twitter.com/p/12345'

export default function PostList() {
    const [postList, setPostList] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        setPostList(getStore('postList') || [])
    }, [])

    const handleSavePostList = postList => {
        setPostList(postList)
        setStore('postList', postList)
    }

    const handleEditBtnClick = post => {
        navigate('edit', { state: { post }, replace: false })
    }

    const handleDelPost = postId => {
        // TODO modal 确认
        handleSavePostList(postList.filter(post => post.id !== postId))
    }

    return (
        <div style={{ position: 'relative' }}>
            <PageHeader title='Manage Post' />
            <LinkToProfile link={link} />
            <SwitchTab postCount={postList.length} />
            {postList && postList.map(post => <PostItem post={post} key={post.id} handleEditBtnClick={handleEditBtnClick} handleDeleteBtnClick={handleDelPost} />)}
            <ToCreate />
        </div>
    )
}

