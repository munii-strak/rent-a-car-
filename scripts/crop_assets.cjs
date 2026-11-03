const { execSync } = require('child_process');
const fs = require('fs');

const input = 'public/assets/aistudio/image_9e4ee8d4.png';

// Let's create helper to crop
function crop(outName, w, h, x, y) {
  const outPath = `public/assets/images/${outName}`;
  const cmd = `convert "${input}" -crop ${w}x${h}+${x}+${y} +repage "${outPath}"`;
  execSync(cmd);
  console.log(`Cropped: ${outName} (${w}x${h}+${x}+${y})`);
}

// 1. Hero car background:
// Total image width is 1706.
// Hero banner is around top 0 to 800.
// The car itself occupies the right side of the hero, or we can crop the hero car backdrop:
crop('hero_car.png', 1050, 520, 600, 150);
crop('hero_bg_wide.png', 1706, 750, 0, 0);

// 2. Silhouettes (around Y: 1050 to 1350)
// 6 cards horizontally distributed:
// Total width ~ 1500 centered (approx x=100 to 1600).
// Let's crop individual silhouettes:
crop('silhouette_sedan.png', 210, 100, 140, 1140);
crop('silhouette_coupe.png', 210, 100, 390, 1140);
crop('silhouette_suv.png', 210, 100, 640, 1140);
crop('silhouette_truck.png', 210, 100, 890, 1140);
crop('silhouette_hatchback.png', 210, 100, 1140, 1140);
crop('silhouette_convertible.png', 210, 100, 1390, 1140);

// 3. Featured Inventory Vehicle Cards:
// 4 cards across ~ Y: 1750 to 2050
// Card 1: Toyota RAV4
crop('car_rav4.png', 340, 230, 145, 1785);
// Card 2: Honda Accord
crop('car_accord.png', 340, 230, 525, 1785);
// Card 3: Ford F-150
crop('car_f150.png', 340, 230, 905, 1785);
// Card 4: Chevy Camaro
crop('car_camaro.png', 340, 230, 1285, 1785);

// 4. Metropolitan Matrix dispatch banner:
crop('dispatch_banner.png', 1480, 280, 113, 2460);

// 5. How It Works illustration cards:
// 3 cards around Y: 3600 to 3900
crop('how_it_works_1.png', 380, 260, 270, 3680);
crop('how_it_works_2.png', 380, 260, 690, 3680);
crop('how_it_works_3.png', 380, 260, 1110, 3680);

// 6. Testimonial avatars:
crop('avatar_ahmed.png', 64, 64, 128, 6080);
crop('avatar_ayesha.png', 64, 64, 528, 6080);
crop('avatar_usman.png', 64, 64, 928, 6080);

// 7. Airport location cards:
// 5 cards around Y: 6450 to 6650
crop('airport_karachi.png', 280, 190, 60, 6480);
crop('airport_lahore.png', 280, 190, 365, 6480);
crop('airport_islamabad.png', 280, 190, 670, 6480);
crop('airport_faisalabad.png', 280, 190, 975, 6480);
crop('airport_peshawar.png', 280, 190, 1280, 6480);

console.log("All sample crops completed!");
