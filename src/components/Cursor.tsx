import React from "react";

export default function Cursor() {
    const mousePosition = useMousePosition();
    const size = 40
    const border = 6
    const mX = mousePosition.x == null ? 0 : mousePosition.x - size / 2;
    const mY = mousePosition.y == null ? 0 : mousePosition.y - size / 2;

    if (mX < 0 || mY < 0) return (<></>)

    return (
        <div
            className="Cursor"
            style={{
                pointerEvents: 'none',
                zIndex: 1000,
                position: 'fixed',
                width: size + 'px',
                height: size + 'px',
                top: mY + 'px',
                left: mX + 'px',
                backdropFilter: 'invert(100%)',
                clipPath: `polygon(0% 0%, 0% 100%, ${border}% 100%, ${border}% ${border}%, ${100 - border}% ${border}%, ${100 - border}% ${100 - border}%, ${border}% ${100 - border}%, ${border}% 100%, 100% 100%, 100% 0%)`
            }}
        />
    )
}

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({ x: null, y: null });

    React.useEffect(() => {
        const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};