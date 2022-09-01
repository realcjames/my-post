import { useState } from 'react'
import BackButton from '../../components/BackButton'
import PageHeader from '../../components/PageHeader';
import Editor from '../../components/Editor';
import { setStore, getStore } from '../../utils/store'
import uuid from '../../utils/uuid'
import { useNavigate } from 'react-router-dom';

export default function PostAdd() {
    const [post, setPost] = useState({
        title: '',
        content: '',
    })

    const navigate = useNavigate()

    function handleAddPost(post) {
        // TODO 非空检查 + 提示
        const postList = getStore('postList') || []
        setStore('postList',
            [...postList, {
                id: uuid(),
                ...post,
                isEditable: true,
                isDeletable: true,
                createTime: Date.now()
            }])

        navigate(-1)
    }


    return (
        <div>
            <BackButton />
            <PageHeader title='New Post' />
            <Editor
                post={post}
                handleChange={(title, content) => setPost({ title, content })}
                handleSave={handleAddPost} />
        </div>
    )
}