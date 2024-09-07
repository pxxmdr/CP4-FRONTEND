import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, main, article, nav, aside, section,
    header, footer, address, div,
    h1, h2, h3, h4, h5, h6, p, blockquote, ol, ul, li, dl, dt, dd,
    hr, pre, figure, figcaption,
    table, caption, thead, tbody, tfoot, tr, th, td, col, colgroup,
    form, fieldset, legend, label, input, button, select, datalist,
    optgroup, option, textarea, progress, meter,
    img, iframe, embed, object, param, video, audio, source,
    canvas, track, map, area, del, ins,
    a, em, strong, i, b, u, s, small, abbr, q, cite, dfn, sub, sup,
    time, code, kbd, samp, var, bdi, bdo, ruby, rt, rp, wbr,
    mark, span, br {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding: 0;
        margin: 0;
        font-size: 100%;
        font-style: normal;
        font-weight: normal;
        vertical-align: baseline;
        background: transparent;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    body {
        padding: 80px 40px;
    }

    a {
        text-decoration: none;

    }

    button {
        border: none;
    }
    `
