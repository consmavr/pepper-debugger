
import $ from "jquery";

export function addDebugger(){
    require('./pepper.js');
    const div = `<div id="debugger"></div>`;
    $('body').append(div);

    $('#debugger').css({"position":"fixed",
                       "height": "fit-content",
                       "width": "fit-content",
                       "background-color": "red",
                       "color":"white",
                       "font-size": "2rem",
                       "text-align":"center"
    });
}