document.addEventListener('DOMContentLoaded', () => {
    // WebGL Gradient Setup
    var c = document.getElementById("canvas"),
        gl = c.getContext("webgl2"),
        vs = document.getElementById("vert-shader").text,
        fs = document.getElementById("frag-shader").text,
        programInfo = twgl.createProgramInfo(gl, [vs, fs]),
        arrays = {
            position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
        },
        bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

    function render(time) {
        twgl.resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        
        var uniforms = {
            iTime: time * 0.002, // Very slow animation
            iResolution: [gl.canvas.width, gl.canvas.height],
        };
        
        gl.useProgram(programInfo.program);
        twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
        twgl.setUniforms(programInfo, uniforms);
        twgl.drawBufferInfo(gl, bufferInfo);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Service Items Animation
    const serviceItems = document.querySelectorAll('.service-item');

    function animateServices() {
        serviceItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    setTimeout(animateServices, 500);
});