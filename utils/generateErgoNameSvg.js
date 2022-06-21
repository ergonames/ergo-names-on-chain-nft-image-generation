const D3Node = require("d3-node");
const { JSDOM } = require("jsdom");
const { SVG_ENCODING: encoding = "base64"  } = process.env;

function generateRawSvg(ergoname) {
    const d3n = new D3Node();
    const fakeDom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

    const body = d3n.d3.select(fakeDom.window.document).select('body');

    // Make an SVG Container
    let svgContainer = body.append('div').attr('class', 'container')
        .append("svg")
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .attr("width", 500)
        .attr("height", 500);

    // Append square, black background
    svgContainer.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 500)
        .attr("height", 500)
        .attr("fill", "black");

    // Append text container to svg container
    const textContainer = svgContainer.append("text")
        .attr("x", "50%")
        .attr("y", "50%")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", 42)
        .attr("font-family", "Monospace")

    // Append tilde to text container
    textContainer.append("tspan")
        .text("~")
        .attr("fill", "orange")
        .attr("font-weight", "bolder")

    // Append provided ergoname to text container
    textContainer.append("tspan")
        .text(ergoname)
        .attr("fill", "white")

    // Return SVG
    return body.select('.container').html();
}

function generateEncodedSvg(ergoname) {
    const rawSvg = generateRawSvg(ergoname);
    return Buffer.from(rawSvg).toString(encoding);
}

function generateSvgUrl(ergoname) {
    const encodedSvg = generateEncodedSvg(ergoname);
    return `data:image/svg+xml;base64,${encodedSvg}`;
}

const generateErgoNameSvg = {
    raw: generateRawSvg,
    encoded: generateEncodedSvg,
    url: generateSvgUrl
}

module.exports = generateErgoNameSvg;