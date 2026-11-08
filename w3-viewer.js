document.addEventListener('DOMContentLoaded', () => {
  const viewer = document.getElementById('w3-model');
  const reset = document.getElementById('w3-reset-camera');
  const align = document.getElementById('w3-front-align');
  const status = document.getElementById('w3-viewer-status');
  if (!viewer) return;
  // Model geometry extends furthest towards -Z, so start at the -Z end (180°).
  // The adjust-front button allows correction after visually checking the actual nose.
  const candidates = [180, 0, 90, 270];
  let index = 0;
  const setFront = () => {
    const az = candidates[index];
    viewer.setAttribute('min-camera-orbit', `${az - 90}deg 45deg 12m`);
    viewer.setAttribute('max-camera-orbit', `${az + 90}deg 135deg 28m`);
    viewer.cameraOrbit = `${az}deg 90deg 18m`;
    viewer.jumpCameraToGoal();
  };
  reset?.addEventListener('click', setFront);
  align?.addEventListener('click', () => {
    index = (index + 1) % candidates.length;
    setFront();
    if (status) status.textContent = `Front alignment ${index + 1}/4 · ±90° horizontal, ±45° vertical. Select the view facing the nose.`;
  });
  viewer.addEventListener('load', () => {
    setFront();
    if (status) status.textContent = '3D model loaded · Drag to rotate. If the nose is not facing you, use ADJUST FRONT.';
  });
  viewer.addEventListener('error', () => {
    if (status) status.textContent = 'Unable to load the 3D model. Check the GLB path and GitHub Pages deployment.';
  });
});
