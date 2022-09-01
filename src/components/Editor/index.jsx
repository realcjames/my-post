import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';
import './index.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SaveButton from '../SaveButton';
import CancelButton from './CancelButton';

export default function MyEditor(props) {
    const editorRef = useRef(null);
    const { post, handleChange, handleSave } = props
    const isAdd = post.id === undefined
    const { title } = post
    const [content, setContent] = useState(post.content)

    return (
        <div className='my-editor'>
            <WrapperInput
                style={{
                    marginTop: isAdd ? '48px' : '24px',
                    width: '100%'
                }}
                maxLength='50'
                placeholder='Input post title'
                value={title}
                onChange={e => {
                    handleChange(e.target.value, post.content)
                }}
            />
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                apiKey='oljnl3zdxzpkwn9hr1s983th9wfb5wzo50kfpazll13y15ds'
                value={content}
                init={{
                    width: '100%',
                    height: 500,
                    min_height: 300,
                    max_height: 800,
                    menubar: false,
                    statusbar: false,
                    toolbar: `blockquote formatselect | bold italic underline backcolor | alignleft aligncenter
                           | alignright alignjustify | outdent indent`,
                    content_style: 'body { font-family:Poppins; font-size:14px }',
                    body_class: 'my_editor_class'
                }}
                onEditorChange={content => {
                    setContent(content)
                    handleChange(title, content)
                }}
            />
            <div
                className='flex-row justify-between align-center'
                style={{
                    marginTop: '24px'
                }}
            >
                <SaveButton text={isAdd ? 'Post' : 'Save'} onClick={() => handleSave({
                    ...post,
                    title,
                    content,
                })} />
                {!isAdd && <CancelButton />}
            </div>
        </div>
    );
}

MyEditor.propTypes = {
    post: PropTypes.object.isRequired,
    handleSave: PropTypes.func.isRequired
};

const WrapperInput = styled.input`
    height: 40px;
    padding: 0 16px;
    font-size: 12px;
    color: #606060;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
`