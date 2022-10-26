export const Cart = ({width = '24', height = "24", color = null, stroke = '#272738 '}) => {
    return <svg width={width} height={height} viewBox="0 0 24 24" fill={color ? color : 'none'}
                xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3.81818V22H22V3.81818" stroke={stroke ? stroke : 'none'} strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M17 10.1818C17 12.7273 14.8 14.7273 12 14.7273C9.2 14.7273 7 12.7273 7 10.1818"
              stroke={stroke ? stroke : 'none'}
              strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
        <path
            d="M20 5.63636H4C2.9 5.63636 2 4.81818 2 3.81818C2 2.81818 2.9 2 4 2H20C21.1 2 22 2.81818 22 3.81818C22 4.81818 21.1 5.63636 20 5.63636Z"
            stroke={stroke ? stroke : 'none'} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>;
};