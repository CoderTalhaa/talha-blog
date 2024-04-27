import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 0.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  ` varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,

  ` 
    
      varying vec2 vUv;
      uniform sampler2D tex;
      uniform sampler2D tex2;
      uniform sampler2D disp;
      uniform float dispFactor;
      uniform float effectFactor;
  
      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
  
        vec2 distortedPosition = vec2(uv.y + dispFactor * (disp.r*effectFactor), uv.x);
        vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
  
        vec4 _texture = texture2D(tex, uv);
        vec4 _texture2 = texture2D(tex2, distortedPosition2);
        
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
        
        gl_FragColor = finalTexture;
        // gl_FragColor = vec4(mix(_texture.rgb, vec3(0., 1.0, 0.), 0.9) , 1.0);
  
  
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
);

extend({ ImageFadeMaterial });
