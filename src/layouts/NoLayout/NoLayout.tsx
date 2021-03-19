import React from 'react'

interface NoLayoutProps {
}

export const NoLayout: React.FC<NoLayoutProps> = ({children}) => {
    return <div className="no-layout"> {children} </div>
}