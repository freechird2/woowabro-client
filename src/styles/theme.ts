import { DefaultTheme } from 'styled-components'

export const _colors = {
    default: '#281912',
    placeholder: '#BCA261',
    green_title: '#004B2E',
    gold_title: '#FFAC00',
    gold_text: '#A8811E',
    deep_green: '#004828',
    navy_title: '#08304D',
}

export const _size = {
    btn_height: '54px',
    header_height: '70px',
    container_width: '1200px',
    container_padding_inline: '16px',
    paper_padding_inline: '30px',
}

const theme: DefaultTheme = {
    colors: _colors,
    size: _size,
}

export default theme
