import styles from './ColorSwatch.module.css'
import ColorSwatch from './ColorSwatch'

export default function ColorSwatchGroup({ colors, direction, copy = false, addToPalette, palette }) {
    return (
        <div className={direction === "h" ? styles.hgroup : styles.vgroup}>
            {colors.map((color, index) => 
                (<ColorSwatch key={`${color}-${index}`} color={color} copy={copy} addToPalette={addToPalette} palette={palette}></ColorSwatch>)
            )}
        </div>
    )
        
}