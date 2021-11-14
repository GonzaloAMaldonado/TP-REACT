export default function Pagination(info, onNextPressed = () =>{}, onPrevPressed = () => {}){
    console.log(info)
    const { count, pages, next, prev } = info || {};

    return <>
    <span> La cantidad de episodios es: {count} en {pages} paginas </span>
            <button onClick={() => onPrevPressed(prev)}>previous</button>
            <button onClick={() => onNextPressed(next)}>siguiente</button>
            </>
}