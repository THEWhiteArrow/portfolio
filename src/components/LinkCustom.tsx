import { Link, LinkProps, useLocation } from "react-router-dom"

export default function LinkCustom(props: LinkProps) {
    const location = useLocation().pathname
    const to = props.to != '' ? props.to : location
    return <Link {...props} to={to}>{props.children}</Link>
}