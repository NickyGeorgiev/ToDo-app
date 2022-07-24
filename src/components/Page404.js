import error from './assets/error.png'

export const Page404 = () => {
    return(
        <div className='page404'>
            <h1>Page not found!</h1>
            <img src={error} />
        </div>
    )
}