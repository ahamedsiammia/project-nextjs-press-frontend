import React from 'react';

const AuthorLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <h1>this is author special layout of the dericodriy</h1>
            {children}
        </div>
    );
};

export default AuthorLayout;