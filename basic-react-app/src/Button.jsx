function printHello() {
    console.log("Hello");
}
function printBye() {
    console.log("Bye");
}

function handleMouseOver() {
    console.log("mouse is over");
}
function doubleClick() {
    console.log("button was clicked ");
}
export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={printBye}>This paragraph is for event demo</p>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo nostrum blanditiis earum optio, cum mollitia reiciendis. Recusandae quas laboriosam inventore harum totam animi magnam similique hic iste! Culpa, maiores!</p>
            <button onDoubleClick={doubleClick}>double click me!</button>
        </div>
    )
}