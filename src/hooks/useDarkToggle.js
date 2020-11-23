import {useContext} from 'react'
import {  darkMode } from './../App'
function useDarkToggle() {
    return useContext(darkMode)
}

export {useDarkToggle}
