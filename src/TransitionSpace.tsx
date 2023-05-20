interface Props {
    rotate?: Number,
    height?: Number,
}
export default function TransitionSpace(props: Props) {

    const { rotate = 0, height = 200 } = props
    return (
        <div
            className="TransitionSpace"
            style={{
                height: height + 'px',
                width: '100%',
                background: `linear-gradient(${rotate}deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0.867) 100%)`
            }} />
    )
}
