// Import folders; folders define size. Filenames can be anything; we derive product key
const boxFront = import.meta.glob('../assets/boxfront/*', { eager: true, import: 'default' });
const boxBack = import.meta.glob('../assets/boxback/*', { eager: true, import: 'default' });
const packet500 = import.meta.glob('../assets/Packet_front_back/*', { eager: true, import: 'default' });

function fileToKey(path) {
  const name = (path.split('/').pop() || '').toLowerCase();
  return name
    .replace(/\.(png|jpe?g|webp|svg)$/i, '')
    .replace(/edited/g, '')
    .replace(/\s+/g, '')
    .replace(/[_\-]+/g, '')
    .replace(/front|back/g, '');
}

function buildByKey() {
  const map = {};
  const ensure = (k) => {
    if (!map[k]) map[k] = { '100g': { front: null, back: null }, '500g': { front: null, back: null } };
  };

  // Process 100g images from boxfront and boxback
  for (const [p, url] of Object.entries(boxFront)) {
    const k = fileToKey(p);
    ensure(k);
    map[k]['100g'].front = url;
  }
  for (const [p, url] of Object.entries(boxBack)) {
    const k = fileToKey(p);
    ensure(k);
    map[k]['100g'].back = url;
  }

  // Process 500g images from Packet_front_back
  for (const [p, url] of Object.entries(packet500)) {
    const fileName = p.split('/').pop().toLowerCase();
    
    // Extract product name and determine if it's front or back
    let productName = fileName
      .replace(/\.(png|jpe?g|webp|svg)$/i, '')
      .replace(/\s+/g, '');
    
    const isBack = productName.includes('back');
    const isFront = productName.includes('front');
    
    // Remove front/back from product name to get clean key
    productName = productName.replace(/front|back/g, '');
    
    ensure(productName);
    
    if (isFront) {
      map[productName]['500g'].front = url;
    } else if (isBack) {
      map[productName]['500g'].back = url;
    }
  }

  // Don't clean up incomplete entries - keep them for fallback
  // Only remove entries that have no 100g images at all
  for (const [key, sizes] of Object.entries(map)) {
    const has100g = sizes['100g'] && (sizes['100g'].front || sizes['100g'].back);
    if (!has100g) {
      delete map[key];
    }
  }

  return map;
}

const imagesByKey = buildByKey();

function findKeyByAnyUrl(url) {
  if (!url) return '';
  for (const [key, sizes] of Object.entries(imagesByKey)) {
    for (const size of Object.keys(sizes)) {
      const entry = sizes[size];
      if (entry && (entry.front === url || entry.back === url)) return key;
    }
  }
  return deriveKeyFromImageUrl(url);
}

function deriveKeyFromImageUrl(imgUrl) {
  if (!imgUrl) return '';
  try {
    const fname = imgUrl.split('/').pop() || '';
    return fileToKey(fname);
  } catch {
    return '';
  }
}

export function getPacketImagesByImageUrl(frontImageUrl) {
  const key = findKeyByAnyUrl(frontImageUrl);
  const entry = imagesByKey[key] || {};
  const result = {};
  
  // Always include both sizes if product exists
  if (entry['100g']) {
    result['100g'] = { ...entry['100g'] };
  }
  
  if (entry['500g']) {
    // If 500g images exist, use them
    result['500g'] = { ...entry['500g'] };
  } else if (entry['100g']) {
    // If 500g images don't exist, fallback to 100g images
    result['500g'] = { ...entry['100g'] };
  }
  
  return result;
}

export function getAvailableSizesByImageUrl(frontImageUrl) {
  const key = findKeyByAnyUrl(frontImageUrl);
  const entry = imagesByKey[key] || {};
  
  // Always return both sizes if the product exists
  if (entry['100g']) {
    return ['100g', '500g'];
  }
  
  return [];
}

// New function to check if a specific size has real images
export function hasRealImagesForSize(frontImageUrl, size) {
  const key = findKeyByAnyUrl(frontImageUrl);
  const entry = imagesByKey[key] || {};
  
  if (size === '100g') {
    return !!(entry['100g'] && entry['100g'].front && entry['100g'].back);
  }
  
  if (size === '500g') {
    return !!(entry['500g'] && entry['500g'].front && entry['500g'].back);
  }
  
  return false;
}

// Debug function to check what's being loaded (remove in production)
export function debugImageLoader() {
  console.log('Loaded images by key:', imagesByKey);
  console.log('Packet 500g imports:', packet500);
}