// Import normalized packet folders. Filenames follow pattern:
//   <product>.(front|back)-100g.png
//   <product>.(front|back)-500g.png
const packets100 = import.meta.glob('../assets/packets/100g/*.png', { eager: true, import: 'default' });
const packets500 = import.meta.glob('../assets/packets/500g/*.png', { eager: true, import: 'default' });

function fileToKey(path) {
  const name = (path.split('/').pop() || '').toLowerCase();
  return name
    .replace(/\.(png|jpe?g|webp|svg)$/i, '')
    .replace(/\.(front|back)-(100g|500g)$/i, '');
}

function parsePacketFile(path) {
  const fname = (path.split('/').pop() || '').toLowerCase();
  const base = fname.replace(/\.(png|jpe?g|webp|svg)$/i, '');
  // Expect: <product>.(front|back)-(100g|500g)
  const m = base.match(/^(.+)\.(front|back)-(100g|500g)$/i);
  if (!m) return null;
  return { key: m[1], side: m[2].toLowerCase(), size: m[3].toLowerCase() };
}

function buildByKey() {
  const map = {};
  const ensure = (k) => {
    if (!map[k]) map[k] = { '100g': { front: null, back: null }, '500g': { front: null, back: null } };
  };

  console.log('=== BUILDING IMAGE MAP ===');
  
  // Process 100g packet images
  for (const [p, url] of Object.entries(packets100)) {
    const info = parsePacketFile(p);
    if (!info) continue;
    ensure(info.key);
    map[info.key]['100g'][info.side] = url;
  }

  // Process 500g packet images
  for (const [p, url] of Object.entries(packets500)) {
    const info = parsePacketFile(p);
    if (!info) continue;
    ensure(info.key);
    map[info.key]['500g'][info.side] = url;
  }

  console.log('Final map before cleanup:', JSON.stringify(map, null, 2));
  
  // Don't clean up incomplete entries - keep them for fallback
  // Only remove entries that have no 100g images at all
  for (const [key, sizes] of Object.entries(map)) {
    const has100g = sizes['100g'] && (sizes['100g'].front || sizes['100g'].back);
    if (!has100g) {
      delete map[key];
      console.log(`Removed ${key} - no 100g images`);
    }
  }

  console.log('Final map after cleanup:', JSON.stringify(map, null, 2));
  return map;
}

const imagesByKey = buildByKey();

function findKeyByAnyUrl(url) {
  console.log('=== findKeyByAnyUrl called with:', url);
  if (!url) return '';
  for (const [key, sizes] of Object.entries(imagesByKey)) {
    for (const size of Object.keys(sizes)) {
      const entry = sizes[size];
      if (entry && (entry.front === url || entry.back === url)) {
        console.log(`Found match: ${url} → key: ${key}`);
        return key;
      }
    }
  }
  const derivedKey = deriveKeyFromImageUrl(url);
  console.log(`No direct match, derived key: ${derivedKey}`);
  return derivedKey;
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
  console.log('=== getPacketImagesByImageUrl called with:', frontImageUrl);
  const key = findKeyByAnyUrl(frontImageUrl);
  console.log('Found key:', key);
  const entry = imagesByKey[key] || {};
  console.log('Entry for key:', JSON.stringify(entry, null, 2));
  const result = {};
  
  // Always include both sizes if product exists
  if (entry['100g']) {
    result['100g'] = { ...entry['100g'] };
    console.log('Added 100g:', JSON.stringify(result['100g'], null, 2));
  }
  
  if (entry['500g'] && entry['500g'].front && entry['500g'].back) {
    // If 500g images exist and are complete, use them
    result['500g'] = { ...entry['500g'] };
    console.log('Added real 500g:', JSON.stringify(result['500g'], null, 2));
  } else if (entry['100g']) {
    // If 500g images don't exist or are incomplete, fallback to 100g images
    result['500g'] = { ...entry['100g'] };
    console.log('Added fallback 500g (100g images):', JSON.stringify(result['500g'], null, 2));
  }
  
  console.log('Final result:', JSON.stringify(result, null, 2));
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
  console.log(`=== hasRealImagesForSize called with: ${frontImageUrl}, size: ${size}`);
  const key = findKeyByAnyUrl(frontImageUrl);
  console.log('Key found:', key);
  const entry = imagesByKey[key] || {};
  console.log('Entry:', JSON.stringify(entry, null, 2));
  
  if (size === '100g') {
    const hasReal = !!(entry['100g'] && entry['100g'].front && entry['100g'].back);
    console.log(`100g has real images: ${hasReal}`);
    console.log(`100g front: ${entry['100g']?.front}`);
    console.log(`100g back: ${entry['100g']?.back}`);
    return hasReal;
  }
  
  if (size === '500g') {
    const hasReal = !!(entry['500g'] && entry['500g'].front && entry['500g'].back);
    console.log(`500g has real images: ${hasReal}`);
    console.log(`500g front: ${entry['500g']?.front}`);
    console.log(`500g back: ${entry['500g']?.back}`);
    return hasReal;
  }
  
  return false;
}

// Debug function to check what's being loaded (remove in production)
export function debugImageLoader() {
  console.log('=== IMAGE LOADER DEBUG ===');
  console.log('Final mapping:', imagesByKey);
  
  // Test dhaniya specifically
  console.log('Dhaniya test:');
  console.log('- Key from dhaniafront.png:', fileToKey('dhaniafront.png'));
  console.log('- Key from dhaniyaback.png:', fileToKey('dhaniyaback.png'));
  console.log('- Dhaniya entry:', imagesByKey['dhaniya']);
}