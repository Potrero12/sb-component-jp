import './mylabel.css';

export interface Props {
    /**
    * Este es el mensaje a mostrar en la etiqueda
   */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
   */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Este es el mayuscula o minucula
   */
    allCaps?: boolean;
    /**
     * Este es el mayuscula o minucula
   */
    color?: 'primary'|'secondary'|'tertiary';
    /**
     * Cambiar el el color del fondo
    */
    fontColor?: string
    
}

export const MyLabel = ({ 
    label = 'No label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
 }:Props) => {
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
        { allCaps ? label.toUpperCase() : label}
    </span>
  )
}
