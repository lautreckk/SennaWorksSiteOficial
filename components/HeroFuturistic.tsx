'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const rotatingWords = ["Vende", "Converte", "Escala", "Domina"];
const logos = ["Rony Meisler", "Well Pires", "Itapema Ambiental", "Arthur Muniz", "DriveXperience", "Indaiá Eventos"];

// Raw Three.js WebGPU scene (no @react-three/fiber needed)
function WebGPUCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current || !containerRef.current) return;
    initRef.current = true;

    let disposed = false;
    let animId: number;

    (async () => {
      try {
        const THREE = await import('three/webgpu');
        const TSL = await import('three/tsl');
        const { bloom } = await import('three/examples/jsm/tsl/display/BloomNode.js');

        if (disposed || !containerRef.current) return;

        const container = containerRef.current;
        const w = container.clientWidth;
        const h = container.clientHeight;

        // Renderer
        const renderer = new THREE.WebGPURenderer({ antialias: true });
        await renderer.init();
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.inset = '0';

        // Scene & Camera
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        // Load textures
        const loader = new THREE.TextureLoader();
        const [rawMap, depthMap] = await Promise.all([
          loader.loadAsync('https://i.postimg.cc/XYwvXN8D/img-4.png'),
          loader.loadAsync('https://i.postimg.cc/2SHKQh2q/raw-4.webp'),
        ]);

        if (disposed) { renderer.dispose(); return; }

        // Uniforms
        const uPointer = TSL.uniform(new THREE.Vector2(0));
        const uProgress = TSL.uniform(0);

        // Shader
        const strength = 0.01;
        const tDepthMap = TSL.texture(depthMap);
        const tMap = TSL.texture(rawMap, TSL.uv().add(tDepthMap.r.mul(uPointer).mul(strength)));

        const WIDTH = 300, HEIGHT = 300;
        const aspect = TSL.float(WIDTH).div(HEIGHT);
        const tUv = TSL.vec2(TSL.uv().x.mul(aspect), TSL.uv().y);
        const tiling = TSL.vec2(120.0);
        const tiledUv = TSL.mod(tUv.mul(tiling), 2.0).sub(1.0);
        const brightness = TSL.mx_cell_noise_float(tUv.mul(tiling).div(2));
        const dist = TSL.float(tiledUv.length());
        const dot = TSL.float(TSL.smoothstep(0.5, 0.49, dist)).mul(brightness);
        const depth = tDepthMap;
        const flow = TSL.oneMinus(TSL.smoothstep(0, 0.02, TSL.abs(depth.sub(uProgress))));
        const mask = dot.mul(flow).mul(TSL.vec3(10, 0, 0));
        const final = TSL.blendScreen(tMap, mask);

        const material = new THREE.MeshBasicNodeMaterial({ colorNode: final });

        // Mesh with aspect ratio
        const imgAspect = WIDTH / HEIGHT;
        const screenAspect = w / h;
        let scaleX: number, scaleY: number;
        if (screenAspect > imgAspect) {
          scaleX = 0.6;
          scaleY = 0.6 * (screenAspect / imgAspect);
        } else {
          scaleX = 0.6 * (imgAspect / screenAspect);
          scaleY = 0.6;
        }

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(scaleX, scaleY, 1);
        scene.add(mesh);

        // Post processing
        const postProcessing = new THREE.PostProcessing(renderer as any);
        const scenePass = TSL.pass(scene, camera);
        const scenePassColor = scenePass.getTextureNode('output');
        const bloomPass = bloom(scenePassColor, 1, 0.5, 1);

        const uScanProgress = TSL.uniform(0);
        const scanPos = TSL.float(uScanProgress.value);
        const uvY = TSL.uv().y;
        const scanWidth = TSL.float(0.05);
        const scanLine = TSL.smoothstep(0, scanWidth, TSL.abs(uvY.sub(scanPos)));
        const redOverlay = TSL.vec3(0.87, 0.05, 0.16).mul(TSL.oneMinus(scanLine)).mul(0.4);
        const withScan = TSL.mix(
          scenePassColor,
          TSL.add(scenePassColor, redOverlay),
          TSL.smoothstep(0.9, 1.0, TSL.oneMinus(scanLine))
        );
        postProcessing.outputNode = withScan.add(bloomPass);

        // Pointer
        const pointer = new THREE.Vector2(0);
        const onMouseMove = (e: MouseEvent) => {
          pointer.x = (e.clientX / w) * 2 - 1;
          pointer.y = -(e.clientY / h) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        // Resize
        const onResize = () => {
          const nw = container.clientWidth;
          const nh = container.clientHeight;
          renderer.setSize(nw, nh);
        };
        window.addEventListener('resize', onResize);

        // Animate
        const clock = new THREE.Clock();
        const animate = () => {
          if (disposed) return;
          animId = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();
          uProgress.value = Math.sin(t * 0.5) * 0.5 + 0.5;
          uScanProgress.value = Math.sin(t * 0.5) * 0.5 + 0.5;
          uPointer.value = pointer;
          postProcessing.renderAsync();
        };
        animate();

        // Cleanup
        return () => {
          disposed = true;
          cancelAnimationFrame(animId);
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', onResize);
          renderer.dispose();
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        };
      } catch (err) {
        console.warn('WebGPU not supported, falling back to static background', err);
      }
    })();

    return () => { disposed = true; cancelAnimationFrame(animId); };
  }, []);

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />;
}

export default function HeroFuturistic() {
  const titleWords = ['CRIAMOS', 'O', 'DIGITAL', 'QUE'];
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [logosVisible, setLogosVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [delays] = useState(() => titleWords.map(() => Math.random() * 0.07));

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 400);
      return () => clearTimeout(timeout);
    } else {
      const t1 = setTimeout(() => setSubtitleVisible(true), 600);
      const t2 = setTimeout(() => setButtonsVisible(true), 1200);
      const t3 = setTimeout(() => setLogosVisible(true), 1800);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [visibleWords, titleWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100svh', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
      <WebGPUCanvas />

      {/* Fallback gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(221,12,41,0.08) 0%, transparent 60%)',
      }} />

      {/* Vignette overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '0 24px', textAlign: 'center', pointerEvents: 'none',
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: subtitleVisible ? 1 : 0, y: subtitleVisible ? 0 : -10 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 32, pointerEvents: 'auto' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 100,
            padding: '4px 16px 4px 4px', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              backgroundColor: '#DD0C29', color: '#fff', fontSize: 11, fontWeight: 600,
              padding: '4px 10px', borderRadius: 100,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#4ADE80', display: 'inline-block' }} />
              Novo
            </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>IA para WhatsApp — Atendimento 24/7</span>
          </div>
        </motion.div>

        {/* Title */}
        <div style={{ marginBottom: 8 }}>
          <div className="hero-title-line" style={{
            display: 'flex', gap: '0.35em', justifyContent: 'center', flexWrap: 'wrap',
            fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 800, textTransform: 'uppercase',
            letterSpacing: '-2px', lineHeight: 1,
          }}>
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{
                  opacity: index < visibleWords ? 1 : 0,
                  y: index < visibleWords ? 0 : 30,
                  filter: index < visibleWords ? 'blur(0px)' : 'blur(8px)',
                }}
                transition={{ duration: 0.5, delay: index * 0.13 + delays[index], ease: [0.22, 1, 0.36, 1] }}
                style={{ color: '#fff', display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Rotating word line */}
          <div className="hero-title-line" style={{
            fontSize: 'clamp(36px, 7vw, 80px)', fontWeight: 800, textTransform: 'uppercase',
            letterSpacing: '-2px', lineHeight: 1.1, marginTop: 4,
            display: 'flex', justifyContent: 'center', gap: '0.35em',
          }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]}
                initial={{ y: 40, opacity: 0, rotateX: -40, filter: 'blur(6px)' }}
                animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
                exit={{ y: -40, opacity: 0, rotateX: 40, filter: 'blur(6px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ color: '#DD0C29', display: 'inline-block', textShadow: '0 0 40px rgba(221,12,41,0.4)' }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: subtitleVisible ? 1 : 0 }}
              style={{ color: '#fff', display: 'inline-block' }}
            >
              DE VERDADE
            </motion.span>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: subtitleVisible ? 1 : 0, y: subtitleVisible ? 0 : 16 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.55)',
            maxWidth: 560, margin: '24px auto 0', lineHeight: 1.6,
          }}
        >
          Sites que convertem. Sistemas com IA. Tráfego que dá retorno.
          <br />
          <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Tudo em um só lugar.</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: buttonsVisible ? 1 : 0, y: buttonsVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="hero-buttons"
          style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center', pointerEvents: 'auto' }}
        >
          <Link href="#pricing" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: '#DD0C29', color: '#fff', fontSize: 16, fontWeight: 600,
            padding: '16px 32px', borderRadius: 16, letterSpacing: '-0.3px',
            boxShadow: 'rgba(221,12,41,0.4) 0px 20px 40px -10px, rgba(255,255,255,0.15) 0px 0px 20px 1.64px inset',
            transition: 'transform 0.2s, opacity 0.2s',
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            Solicitar Orçamento Grátis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link href="#testimonials" style={{
            display: 'inline-flex', alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 16, fontWeight: 500,
            padding: '16px 32px', borderRadius: 16, letterSpacing: '-0.3px',
            border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
            transition: 'transform 0.2s, background-color 0.2s',
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
          >
            Ver Nossos Cases
          </Link>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: logosVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: 64, pointerEvents: 'auto' }}
        >
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginBottom: 20, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Empresas que já cresceram com a Sena Works
          </p>
          <div className="hero-logos" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {logos.map((logo, i) => (
              <span key={i} style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.25)', letterSpacing: '-0.3px', whiteSpace: 'nowrap' }}>
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: logosVisible ? 1 : 0 }}
        transition={{ delay: 0.5 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '1px', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14" /><path d="M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}