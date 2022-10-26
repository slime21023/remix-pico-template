
export default function Card({ imageUrl="", header="", footer="" }) {
    return (
        <article>
            <header>{header}</header>
            <img src={imageUrl} />
            <footer>{footer}</footer>
        </article>
    )
}