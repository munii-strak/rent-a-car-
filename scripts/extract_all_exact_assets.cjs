const { execSync } = require('child_process');
const fs = require('fs');

const input = 'public/assets/aistudio/image_9e4ee8d4.png';
const dir = 'public/assets/extracted';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function crop(name, w, h, x, y) {
  const out = `${dir}/${name}`;
  execSync(`convert "${input}" -crop ${w}x${h}+${x}+${y} +repage "${out}"`);
}

// 1. Hero background & car
crop('hero_full.png', 1706, 750, 0, 0);

// 2. Silhouettes (exact car icons)
crop('silhouette_sedan.png', 150, 75, 142, 1210);
crop('silhouette_coupe.png', 150, 75, 358, 1210);
crop('silhouette_suv.png', 150, 75, 574, 1210);
crop('silhouette_truck.png', 150, 75, 790, 1210);
crop('silhouette_hatchback.png', 150, 75, 1006, 1210);
crop('silhouette_convertible.png', 150, 75, 1222, 1210);

// 3. Featured Inventory Car Photos (clean rounded vehicle card photos)
crop('car_rav4.png', 256, 165, 152, 1912);
crop('car_accord.png', 256, 165, 452, 1912);
crop('car_f150.png', 256, 165, 752, 1912);
crop('car_camaro.png', 256, 165, 1050, 1912);

// 4. Dispatch Hub Matrix Banner
crop('dispatch_hub_banner.png', 1602, 330, 52, 2448);

// 5. How It Works 3 Graphic Illustrations
crop('step1_search_art.png', 300, 230, 275, 3570);
crop('step2_select_art.png', 300, 230, 670, 3570);
crop('step3_book_art.png', 300, 230, 1060, 3570);

// 6. Testimonial Avatars
crop('avatar_ahmed.png', 56, 56, 124, 6074);
crop('avatar_ayesha.png', 56, 56, 526, 6074);
crop('avatar_usman.png', 56, 56, 928, 6074);

// 7. Airport Locations (5 images)
crop('airport_karachi.png', 242, 165, 66, 6420);
crop('airport_lahore.png', 242, 165, 342, 6420);
crop('airport_islamabad.png', 242, 165, 616, 6420);
crop('airport_faisalabad.png', 242, 165, 892, 6420);
crop('airport_peshawar.png', 242, 165, 1168, 6420);

console.log('Fine-tuned crops ready!');
