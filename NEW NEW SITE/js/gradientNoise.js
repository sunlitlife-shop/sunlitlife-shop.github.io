class GradientNoise {
    constructor(canvas) {
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl');
        if (!this.gl) {
            console.error('WebGL not supported, falling back on experimental-webgl');
            this.gl = canvas.getContext('experimental-webgl');
        }
        if (!this.gl) {
            alert('Your browser does not support WebGL');
            return;
        }

        this.resize();
        this.initShaders();
        this.initBuffers();

        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    initShaders() {
        const vertexShaderSource = `
            attribute vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0, 1);
            }
        `;

        const fragmentShaderSource = `
            precision mediump float;
            uniform vec2 u_resolution;
            uniform float u_time;

            // 2D Random
            float random (in vec2 st) {
                return fract(sin(dot(st.xy,
                                     vec2(12.9898,78.233)))
                             * 43758.5453123);
            }

            // 2D Noise based on Morgan McGuire @morgan3d
            // https://www.shadertoy.com/view/4dS3Wd
            float noise (in vec2 st) {
                vec2 i = floor(st);
                vec2 f = fract(st);

                float a = random(i);
                float b = random(i + vec2(1.0, 0.0));
                float c = random(i + vec2(0.0, 1.0));
                float d = random(i + vec2(1.0, 1.0));

                vec2 u = f*f*(3.0-2.0*f);

                return mix(a, b, u.x) +
                        (c - a)* u.y * (1.0 - u.x) +
                        (d - b) * u.x * u.y;
            }

            void main() {
                vec2 st = gl_FragCoord.xy/u_resolution.xy;
                
                // Gradient from white to orange
                vec3 color1 = vec3(1.0, 1.0, 1.0);  // White
                vec3 color2 = vec3(1.0, 0.65, 0.0);  // Orange
                vec3 gradientColor = mix(color1, color2, st.x + st.y);
                
                // Noise
                float n = noise(st * 4.0 + u_time * 0.1);
                
                // Mix gradient with noise
                vec3 finalColor = mix(gradientColor, vec3(n), 0.1);
                
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const vertexShader = this.compileShader(this.gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.compileShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource);

        this.program = this.gl.createProgram();
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);

        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            console.error('Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(this.program));
            return;
        }

        this.gl.useProgram(this.program);
    }

    compileShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('An error occurred compiling the shaders: ' + this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    initBuffers() {
        const positions = new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            1, 1
        ]);

        const positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);

        const positionAttributeLocation = this.gl.getAttribLocation(this.program, 'a_position');
        this.gl.enableVertexAttribArray(positionAttributeLocation);
        this.gl.vertexAttribPointer(positionAttributeLocation, 2, this.gl.FLOAT, false, 0, 0);
    }

    animate() {
        this.render();
        requestAnimationFrame(() => this.animate());
    }

    render() {
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        const timeUniformLocation = this.gl.getUniformLocation(this.program, 'u_time');
        this.gl.uniform1f(timeUniformLocation, performance.now() / 1000);

        const resolutionUniformLocation = this.gl.getUniformLocation(this.program, 'u_resolution');
        this.gl.uniform2f(resolutionUniformLocation, this.canvas.width, this.canvas.height);

        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    }
}

// Initialize the gradient noise when the script loads
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gradient-canvas');
    if (canvas) {
        new GradientNoise(canvas);
    } else {
        console.error('Canvas element not found');
    }
});