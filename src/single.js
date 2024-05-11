import Tesla from './data/tesla.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const tesla = Tesla.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{tesla.name}</h1>
        <hr></hr>
        <img src={tesla.picture}></img>
        <p>{tesla.description}</p>
    </>);
}

export default Single;