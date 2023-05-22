import './Title.css'
type Props = {
    content: string,
    colorType: 'black' | 'white',
    className?: string
}
export default function Title(props: Props) {
    const { content, colorType, className } = props
    return (
        <h2 className={`Title Title-${colorType} ${className}`}>
            {content.split('').map(letter =>
                <span className={`Title-letter Title-letter-${colorType}`}>
                    {letter}
                </span>)
            }
        </h2>
    )

}