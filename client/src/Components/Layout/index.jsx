import './layout.css'

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <>
            <div className="layout">
                { children }
            </div>
        </>
    )
}

export default Layout