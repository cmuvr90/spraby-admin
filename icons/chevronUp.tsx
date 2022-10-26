export const ChevronUp = ({width = '24', height = "24", color = null, stroke = '#272738 '}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
        <path d="M3.5 9.5L8 5L12.5 9.5" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
}