import React from 'react';

function ProfileImage() {
    const url='http://placekitten.com/600/400';
    return (
        <div>
            <p>
                <img src={url} alt='placeholder-img' />
            </p>
            <h1>This is a header H1</h1>
            <h2>This is a header H2</h2>
            <p>This is an example paragraph.</p>
        </div>
    );
}

export default ProfileImage;