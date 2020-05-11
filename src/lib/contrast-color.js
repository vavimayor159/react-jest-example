/**
 * Calculate the contrast of a color to determine the appropriate opposing text color.
 * @author  D. Condrey
 * @param  rgb {string|object} - element background-color or element
 * @return {string}
 *   white - if background is a dark shade color
 *   black - if background is a light shade color
 */
export const contrast = (rgb) => {
  // check if we are receiving an string
  if (typeof rgb !== 'string') {
    return;
  }

  // @TODO check for HEX value
  // All browsers should return an rgb value so this isn't critical

  // Strip everything except the integers eg. "rgb(" and ")" and " "
  rgb = rgb.split(/\(([^)]+)\)/)[1].replace(/ /g, '');

  // map RGB values to variables
  let r = parseInt(rgb.split(',')[0], 10),
    g = parseInt(rgb.split(',')[1], 10),
    b = parseInt(rgb.split(',')[2], 10);

  // calculate contrast of color (standard grayscale algorithmic formula)
  let contrast = (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000;

  return (contrast >= 128) ? 'black' : 'white';
};