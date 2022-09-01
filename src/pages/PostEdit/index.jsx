import { useState } from 'react'
import Editor from '../../components/Editor';
import { setStore, getStore } from '../../utils/store'
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function PostAdd() {
    const [post, setPost] = useState(useLocation().state.post)

    const navigate = useNavigate()

    const handleEditPost = post => {
        // TODO 非空检查 + 提示
        const postList = getStore('postList') || []
        const index = postList.findIndex(p => p.id === post.id)
        postList.splice(index, 1, { ...post, modifyTime: Date.now() })
        setStore('postList', postList)
        navigate(-1)
    }

    return (
        <WrapperDiv>
            <div className='header'>Edit Post</div>
            <Editor
                post={post}
                handleChange={(title, content) => setPost({ ...post, title, content })}
                handleSave={handleEditPost}
            />
        </WrapperDiv>
    )
}

const WrapperDiv = styled.div`
    padding: 24px;
    background: #FFFFFF;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    .header {
        font-weight: 700;
        font-size: 16px;
        color: #030303;
    }
`