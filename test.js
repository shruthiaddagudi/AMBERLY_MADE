
    /* ============================================================
       SCROLL-REVEAL (existing)
       ============================================================ */
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    /* ============================================================
       CONFIG — change WhatsApp number here
       ============================================================ */
    const WA_NUMBER = '919346908155'; // Country code + number, no + or spaces

    /* ============================================================
       PRODUCT DATA
       ============================================================ */
    const PRODUCT_DATA = {
      'earpods-case': {
        title: 'Earpods Case',
        products: [
          { id: 'ep1', name: 'Flower ear pods case', price: 299, img: 'https://i.pinimg.com/webp/736x/38/00/c6/3800c66d3bc7780820aa3c195f61381d.webp' },
          { id: 'ep2', name: 'Floral Granny Square Pouch', price: 349, img: 'https://i.pinimg.com/1200x/90/1f/b5/901fb5d7c66071d3f116d2445bfb954f.jpg' },
          { id: 'ep3', name: 'Lazy Daisy pouch', price: 329, img: 'https://i.pinimg.com/736x/58/8c/7c/588c7c3c118fa9fa146866b4b3cb487e.jpg' },
          { id: 'ep4', name: 'pods Case', price: 279, img: 'https://i.pinimg.com/736x/fc/42/ab/fc42abba1fd7a1a22ca40d809afe5785.jpg' },
          { id: 'ep5', name: 'Star Case', price: 399, img: 'https://i.pinimg.com/webp/1200x/06/fd/bc/06fdbc1bb71fa6b2ef84506035326bf9.webp' },
          { id: 'ep6', name: 'Granny Square Pouch', price: 399, img: 'https://i.pinimg.com/736x/a5/ab/8c/a5ab8ce8ae73eedafc4212f0695cf4b1.jpg' }
        ]
      },
      'hanging-decor': {
        title: 'Hanging Decor',
        products: [
          { id: 'hd1', name: 'Sunflower Serenity Wall Hanging', price: 599, img: 'https://i.pinimg.com/webp/1200x/3d/95/bc/3d95bc83532ae2178e85ab9535836dd7.webp' },
          { id: 'hd2', name: 'Luna Lace Wall Hanging', price: 499, img: 'https://i.pinimg.com/736x/8a/9c/0b/8a9c0b482dcef812394bdc3cb13e37a4.jpg' },
          { id: 'hd3', name: 'Lazy Daisy Wall Hanging', price: 599, img: 'https://i.pinimg.com/webp/1200x/3a/06/23/3a0623a62e2d907ad72d3791d6f0e367.webp' },
          { id: 'hd4', name: 'Granny Square Floral Wall Hanging', price: 599, img: 'https://i.pinimg.com/1200x/4c/0b/6a/4c0b6ad6449ab64cdedf9284541d6fb9.jpg' },
          { id: 'hd5', name: 'Sunburst floral wall hanging', price: 799, img: 'https://i.pinimg.com/webp/736x/2c/e3/dc/2ce3dcc737b538ad6d025c7500cba051.webp' },
          { id: 'hd6', name: 'Cozy Home Wall Hanging', price: 499, img: 'https://i.pinimg.com/736x/10/8d/e3/108de3608ee20a95d91ae81b8fbe3921.jpg' }
        ]
      },
      'large-scrunchie': {
        title: 'Scrunchie',
        products: [
          { id: 'ls1', name: 'Heart Petal Scrunchie', price: 199, img: 'https://i.pinimg.com/736x/a5/07/6a/a5076a8e329676756ea9020215a9409a.jpg' },
          { id: 'ls2', name: 'Scrunchie', price: 199, img: 'https://i.pinimg.com/736x/d4/91/1a/d4911a7fa43b7c963267d240b3818ac3.jpg' },
          { id: 'ls3', name: 'Scrunchie', price: 199, img: 'https://i.pinimg.com/736x/11/08/92/110892634e798abb6c63da45088a1297.jpg' },
          { id: 'ls4', name: 'Scrunchie', price: 199, img: 'https://i.pinimg.com/1200x/fd/7c/40/fd7c40c2c716503a2eeac943b4d9bd07.jpg' },
          { id: 'ls5', name: 'Scrunchie', price: 199, img: 'https://i.pinimg.com/736x/1b/c2/20/1bc2206cd21bfdfac5da285c09c73909.jpg' }
        ]
      },

      'kindle-case': {
        title: 'Kindle Case',
        products: [
          { id: 'kc1', name: 'Classic Bow Kindle Sleeve', price: 499, img: 'https://i.pinimg.com/webp/1200x/5e/22/65/5e2265fa93a0b40e763f728a66f0e290.webp' },
          { id: 'kc2', name: 'Granny Square Kindle Sleeve', price: 599, img: 'https://i.pinimg.com/736x/65/9d/4f/659d4f5e8f8ef536841655eabcb4a38a.jpg' },
          { id: 'kc3', name: 'Granny Square Envelope Kindle Cover', price: 549, img: 'https://i.pinimg.com/736x/0f/78/c3/0f78c3a9a117ae6ec1922d4b29bb3940.jpg' },
          { id: 'kc4', name: 'Cozy Kindle Pouch', price: 499, img: 'https://i.pinimg.com/736x/94/cd/a5/94cda5a869e41a50137552f73f6f7ff2.jpg' },
          { id: 'kc5', name: 'Heart Kindle Sleeve', price: 599, img: 'https://i.pinimg.com/736x/3e/1a/d3/3e1ad392280b2cebec739ebf4b08c48b.jpg' }
        ]
      },
      'bookmark': {
        title: 'Bookmark',
        products: [
          { id: 'bk1', name: 'Classic Crochet Bookmark', price: 149, img: 'https://i.pinimg.com/736x/e7/06/18/e70618a74c7d119e31a2544d9029709a.jpg' },
          { id: 'bk2', name: 'Heart Bookmark', price: 149, img: 'https://i.pinimg.com/736x/e1/bf/1c/e1bf1c5e4c71998afafd5830a8669caf.jpg' },
          { id: 'bk3', name: 'Tassel Bookmark', price: 149, img: 'https://i.pinimg.com/webp/736x/ee/d2/ab/eed2ab1207503b1c279dbb973f8a04b9.webp' },
          { id: 'bk4', name: 'Granny Square Bookmark', price: 149, img: 'https://i.pinimg.com/736x/5e/e2/4c/5ee24ce91120811da5d3ac1733758253.jpg' },
          { id: 'bk5', name: 'Tassel Bookmark', price: 149, img: 'https://i.pinimg.com/webp/1200x/d0/1b/7c/d01b7c698164c56f517fb62289a7b6f4.webp' }
        ]
      },
      'flower-bookmarks': {
        title: 'Flower Bookmarks',
        products: [
          { id: 'fb1', name: 'Daisy Bookmark', price: 180, img: 'https://i.pinimg.com/webp/1200x/3b/31/fa/3b31fa589fa0e1e2bd0ba852a7dd34cd.webp' },
          { id: 'fb2', name: 'Blossom Bookmark', price: 129, img: 'https://i.pinimg.com/736x/9e/18/9f/9e189f6d9b6ba398083a36744ceebbd7.jpg' },
          { id: 'fb3', name: 'Rose Bookmark', price: 199, img: 'https://i.pinimg.com/webp/736x/ee/1e/8e/ee1e8e669204e6a25db56246258768d9.webp' },
          { id: 'fb4', name: 'Sunflower Bookmark', price: 199, img: 'https://i.pinimg.com/webp/1200x/97/02/64/9702645ff14d6c6e3aae2d235c17917a.webp' },
          { id: 'fb5', name: 'Lavender Bookmark', price: 199, img: 'https://i.pinimg.com/1200x/47/83/e6/4783e6cbd9a7a0d7edf0ef0776450f7d.jpg' },
          { id: 'fb6', name: 'Tulip Bookmark', price: 199, img: 'https://i.pinimg.com/1200x/1c/e6/95/1ce695a3a69451ee2722ceb46906e15f.jpg' }
        ]
      },
      'keychains': {
        title: 'Keychains',
        products: [
          { id: 'ky1', name: 'Blossom Keychain', price: 99, img: 'https://i.pinimg.com/webp/1200x/4c/c3/87/4cc38703a1e83a1261b26b78d6309874.webp' },
          { id: 'ky2', name: 'Flower Keychain', price: 129, img: 'https://i.pinimg.com/736x/bb/5e/b0/bb5eb0ed4d048906b3ae9d1b3463ea0b.jpg' },
          { id: 'ky3', name: 'Mini Bow Keychain', price: 169, img: 'https://i.pinimg.com/736x/8c/5b/bb/8c5bbbbbaae9e23066ed40b62b1f100f.jpg' },
          { id: 'ky4', name: 'Mini Flower Bouquet Keychain', price: 199, img: 'https://i.pinimg.com/webp/736x/b4/a9/2d/b4a92de2e895f3b80bab2bca776b485f.webp' },
          { id: 'ky5', name: 'Mini Octopus Keychain', price: 199, img: 'https://i.pinimg.com/736x/08/f8/20/08f8206435a8584f68c87d2d6f206f48.jpg' }
        ]
      },
      'phone-charms': {
        title: 'Phone Charms',
        products: [
          { id: 'pc1', name: 'Flower Phone Charm', price: 99, img: 'https://i.pinimg.com/1200x/84/77/84/847784281eab50f49e97e397817c9946.jpg' },
          { id: 'pc2', name: 'Mini Octopus Phone Charm', price: 149, img: 'https://i.pinimg.com/1200x/93/89/00/938900d76b49bf79dc93c5558da966d0.jpg' },
          { id: 'pc3', name: 'Sunflower Phone Charm', price: 129, img: 'https://i.pinimg.com/736x/db/5d/50/db5d507711598933370629939e0d1d09.jpg' },
          { id: 'pc4', name: 'Daisy Phone Charm', price: 129, img: 'https://i.pinimg.com/736x/17/b6/4c/17b64c5e71f64a9ee5f7baa2c5ddb99b.jpg' },
          { id: 'pc5', name: 'Mini Heart Phone Charm', price: 99, img: 'https://i.pinimg.com/1200x/55/4b/e9/554be9ce6a2fd73f3c8405d2a4da6965.jpg' }
        ]
      },
      'bag-charms': {
        title: 'Bag Charms',
        products: [
          { id: 'bc1', name: 'Sunflower Bag Charm', price: 129, img: 'https://i.pinimg.com/736x/c2/8f/7c/c28f7ce8b8dfc191670d36a7d7338a82.jpg' },
          { id: 'bc2', name: 'Flower Bag Charm', price: 149, img: 'https://i.pinimg.com/736x/a7/e4/5a/a7e45a9821f27ca810fa90b6d0bd074e.jpg' },
          { id: 'bc3', name: 'Heart Bag Charm', price: 129, img: 'https://i.pinimg.com/1200x/a0/53/09/a053093721099c0ea9d22c4ec1e28c70.jpg' },
          { id: 'bc4', name: 'Lavender Bag Charm', price: 149, img: 'https://i.pinimg.com/736x/cf/1f/84/cf1f842b17552cd91e79a02116be75ae.jpg' },
          { id: 'bc5', name: 'Tulip Bag Charm', price: 199, img: 'https://i.pinimg.com/736x/9d/40/8f/9d408ff67fdd34cbbf0b76adf5d10411.jpg' },
          { id: 'bc6', name: 'Cherry Bag Charm', price: 199, img: 'https://i.pinimg.com/736x/5d/cf/02/5dcf02813902c7826ba4ff5796f4ff74.jpg' }
        ]
      },
      'claw-clips': {
        title: 'Claw Clips',
        products: [
          { id: 'cc1', name: 'Daisy Claw Clip', price: 199, img: 'https://i.pinimg.com/736x/c6/98/64/c6986446615d19eea360d9be01a8c1b3.jpg' },
          { id: 'cc2', name: 'Single Daisy Claw Clip', price: 159, img: 'https://i.pinimg.com/736x/b7/06/8e/b7068e24b9e714bb44f76054149619aa.jpg' },
          { id: 'cc3', name: 'Sunflower Claw Clip', price: 159, img: 'https://i.pinimg.com/736x/77/ce/7c/77ce7cd0f3e2acfea6073ff8bcdb59ea.jpg' },
          { id: 'cc4', name: 'Mini Sunflower Claw Clip', price: 129, img: 'https://i.pinimg.com/736x/26/67/63/266763b62b6d9caa374064fbbc8bc4d6.jpg' },
          { id: 'cc5', name: 'Butterfly Claw Clip', price: 159, img: 'https://i.pinimg.com/736x/32/ee/24/32ee24357f15aa3964ea4f3f5794634f.jpg' }
        ]
      },

      /* ---- NEW: Crochet Bouquets ---- */
      'crochet-bouquets': {
        title: ' Crochet Bouquets',
        products: [
          {
            id: 'cbq1',
            name: ' Lily Bouquet',
            price: 899,
            img: 'https://i.pinimg.com/736x/69/8c/41/698c419940870b421646fc3f904936df.jpg',
            details: {
              handmade: 'Each bouquet is carefully handcrafted.',
              care: '• Keep away from moisture.\n• Clean gently with a soft brush.\n• Indoor decorative use recommended.'
            }
          },
          {
            id: 'cbq2',
            name: 'Tulip Bouquet',
            price: 599,
            img: 'https://i.pinimg.com/736x/18/85/78/18857864c88b26b97b6fd396105e3f22.jpg',
            details: {
              handmade: 'Each bouquet is carefully handcrafted.',
              care: '• Keep away from moisture.\n• Clean gently with a soft brush.\n• Indoor decorative use recommended.'
            }
          },
          {
            id: 'cbq3',
            name: 'Daisy Bouquet',
            price: 699,
            img: 'https://i.pinimg.com/736x/39/93/9e/39939e6eb7b927e394cef355eaf67801.jpg',
            details: {
              handmade: 'Each bouquet is carefully handcrafted.',
              care: '• Keep away from moisture.\n• Clean gently with a soft brush.\n• Indoor decorative use recommended.'
            }
          },
          {
            id: 'cbq4',
            name: 'Lavender Bouquet',
            price: 799,
            img: 'https://i.pinimg.com/736x/3d/c0/29/3dc0293a8922ec3e13c6799f186272ac.jpg',
            details: {
              handmade: 'Each bouquet is carefully handcrafted.',
              care: '• Keep away from moisture.\n• Clean gently with a soft brush.\n• Indoor decorative use recommended.'
            }
          },
          {
            id: 'cbq5',
            name: 'SunFlower Bouquet',
            price: 699,
            img: 'https://i.pinimg.com/736x/96/0d/af/960daf209b1182f8dc862c81d754b2bb.jpg',
            details: {
              handmade: 'Each bouquet is carefully handcrafted.',
              care: '• Keep away from moisture.\n• Clean gently with a soft brush.\n• Indoor decorative use recommended.'
            }
          }
        ]
      },

      /* ---- NEW: Crochet Sling Bags ---- */
      'crochet-sling-bags': {
        title: ' Crochet Sling Bags',
        products: [
          {
            id: 'csb1',
            name: 'Blossom Bloom Phone Sling Bag',
            price: 999,
            img: 'https://i.pinimg.com/736x/e1/8d/70/e18d70b88a36b3953988831c111873e7.jpg',
            details: {
              handmade: 'Lovingly handcrafted with premium cotton yarn.',
              care: '• Hand wash only.\n• Dry flat in shade.\n• Do not bleach.'
            }
          },
          {
            id: 'csb2',
            name: 'Sunflower Sling Bag',
            price: 899,
            img: 'https://i.pinimg.com/1200x/95/0b/3f/950b3ffdcc6c4c98b5b7a74267c14c43.jpg',
            details: {
              handmade: 'Lovingly handcrafted with premium cotton yarn.',
              care: '• Hand wash only.\n• Dry flat in shade.\n• Do not bleach.'
            }
          },
          {
            id: 'csb3',
            name: 'Granny Square Sling Bag',
            price: 999,
            img: 'https://i.pinimg.com/736x/27/f3/fd/27f3fdbba9cedd4a656b90db3db64eaf.jpg',
            details: {
              handmade: 'Lovingly handcrafted with premium cotton yarn.',
              care: '• Hand wash only.\n• Dry flat in shade.\n• Do not bleach.'
            }
          },
          {
            id: 'csb4',
            name: 'Crochet Sling Bag',
            price: 799,
            img: 'https://i.pinimg.com/vwebp/736x/e7/4a/b9/e74ab9a128f2444157129e6951128e3c.webp',
            details: {
              handmade: 'Lovingly handcrafted with premium cotton yarn.',
              care: '• Hand wash only.\n• Dry flat in shade.\n• Do not bleach.'
            }
          },
          {
            id: 'csb5',
            name: 'Daisy Granny Square Sling Bag',
            price: 899,
            img: 'https://i.pinimg.com/736x/7e/68/49/7e6849a227cef1a3dac40500f5ca3b68.jpg',
            details: {
              handmade: 'Lovingly handcrafted with premium cotton yarn.',
              care: '• Hand wash only.\n• Dry flat in shade.\n• Do not bleach.'
            }
          }
        ]
      }
    };


    /* ============================================================
       TOAST
       ============================================================ */
    function getToastIcon(type) {
      switch (type) {
        case 'error': return '✕';
        case 'warning': return '⚠';
        case 'info': return '✦';
        default: return '✓';
      }
    }

    function showToast(titleOrMessage, messageOrType, type = 'success') {
      const container = document.getElementById('am-toast');
      if (!container) return;

      let title = '';
      let message = '';
      let toastType = type;

      if (arguments.length === 1) {
        message = titleOrMessage;
      } else if (arguments.length === 2) {
        if (['success', 'error', 'info', 'warning'].includes(messageOrType)) {
          toastType = messageOrType;
          message = titleOrMessage;
        } else {
          title = titleOrMessage;
          message = messageOrType;
        }
      } else {
        title = titleOrMessage;
        message = messageOrType;
        toastType = type;
      }

      const toast = document.createElement('div');
      toast.className = `am-toast ${toastType}`;
      toast.innerHTML = `
        ${title ? `<div class="toast-title"><span>${getToastIcon(toastType)}</span>${title}</div>` : ''}
        <div class="toast-message">${message}</div>
      `;

      container.appendChild(toast);
      setTimeout(() => {
        toast.classList.add('is-leaving');
        setTimeout(() => toast.remove(), 240);
      }, 2800);
    }

    /* ============================================================
       MODAL HELPERS
       ============================================================ */
    function openOverlay(id) {
      document.getElementById(id).classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeOverlay(id) {
      document.getElementById(id).classList.remove('open');
      document.body.style.overflow = '';
    }

    /* ============================================================
       CATEGORY MODAL
       ============================================================ */
    function openCategoryModal(categoryKey) {
      const data = PRODUCT_DATA[categoryKey];
      if (!data) return;

      document.getElementById('cat-modal-title').textContent = data.title;

      const grid = document.getElementById('product-grid');
      grid.innerHTML = data.products.map(p => {
        const isWished = wishlist.some(w => w.id === p.id);
        return `
      <div class="product-card">
        <img
          class="product-img"
          src="${p.img}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'"
        />
        <button
          class="wish-btn${isWished ? ' wished' : ''}"
          data-product-id="${p.id}"
          data-product-name="${p.name}"
          data-product-price="${p.price}"
          data-product-img="${p.img}"
          data-category="${categoryKey}"
          aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}"
          title="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}"
        >${isWished ? '&#9829;' : '&#9825;'}</button>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-price">&#8377;${p.price}</div>
          <button
            class="add-to-cart-btn"
            id="atc-${p.id}"
            data-product-id="${p.id}"
            data-category="${categoryKey}"
            aria-label="View ${p.name}"
          >View Product</button>
        </div>
      </div>
    `;
      }).join('');

      // Attach View Product button listeners — open product detail overlay
      grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const pid = btn.dataset.productId;
          const catKey = btn.dataset.category;
          openProductDetail(pid, catKey);
        });
      });

      // Attach wishlist button listeners
      grid.querySelectorAll('.wish-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          toggleWishlist(
            btn.dataset.productId,
            btn.dataset.productName,
            btn.dataset.productPrice,
            btn.dataset.productImg,
            btn.dataset.category,
            btn
          );
        });
      });

      openOverlay('cat-overlay');
    }


    /* ============================================================
       PRODUCT DETAIL OVERLAY LOGIC
       ============================================================ */
    const colorPalette = [
      { name: 'Blush Pink', hex: '#f0d5cc' },
      { name: 'Sage Green', hex: '#8fae8b' },
      { name: 'Dusty Rose', hex: '#c0604a' },
      { name: 'Cream', hex: '#fdf6f0' },
      { name: 'Lavender', hex: '#b8a9c9' },
      { name: 'Honey Gold', hex: '#c9972c' },
      { name: 'Midnight Navy', hex: '#2b3a6b' },
      { name: 'Warm Beige', hex: '#d4b896' },
      { name: 'Teal', hex: '#3a7d6e' },
      { name: 'Wine', hex: '#6b2737' }
    ];

    let pdProductId = '';
    let pdCategoryKey = '';
    let pdCurrentPrice = 0;  // tracks the currently active price (changes with size)
    let pdSelectedSize = ''; // tracks selected size label for scrunchies
    let checkoutMode = 'cart';

    function isScrunchieCategory(categoryKey) {
      return categoryKey === 'large-scrunchie';
    }

    function openProductDetail(productId, categoryKey) {
      const data = PRODUCT_DATA[categoryKey];
      const product = data && data.products.find(p => p.id === productId);
      if (!product) return;

      pdProductId = productId;
      pdCategoryKey = categoryKey;

      document.getElementById('pd-img').src = product.img;
      document.getElementById('pd-img').alt = product.name;
      document.getElementById('pd-name').textContent = product.name;

      // ---- Feature 2: Scrunchie size selector ----
      const sizeWrap = document.getElementById('pd-size-wrap');
      const isScrunchie = isScrunchieCategory(categoryKey);

      if (isScrunchie) {
        sizeWrap.style.display = 'block';

        // Restore saved size from localStorage
        const savedSize = localStorage.getItem('am_scrunchie_size') || 'Medium';
        pdSelectedSize = savedSize;

        // Apply selection UI
        const medOpt = document.getElementById('size-medium');
        const lrgOpt = document.getElementById('size-large');
        medOpt.classList.toggle('selected', savedSize === 'Medium');
        lrgOpt.classList.toggle('selected', savedSize === 'Large');

        pdCurrentPrice = savedSize === 'Large' ? 259 : 199;
      } else {
        sizeWrap.style.display = 'none';
        pdCurrentPrice = product.price;
        pdSelectedSize = '';
      }

      document.getElementById('pd-price').innerHTML = '&#8377;' + pdCurrentPrice;

      // Render color swatches
      const swatchContainer = document.getElementById('pd-swatches');
      swatchContainer.innerHTML = colorPalette.map(c =>
        `<div class="color-swatch" data-color-name="${c.name}" style="background:${c.hex}" title="${c.name}"></div>`
      ).join('');

      // Reset selections
      document.getElementById('pd-color-name').textContent = '';
      document.getElementById('pd-custom-req').value = '';

      // Swatch click listeners
      swatchContainer.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
          swatchContainer.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
          swatch.classList.add('selected');
          document.getElementById('pd-color-name').textContent = swatch.dataset.colorName;
          showToast('Color Selected', `Selected: ${swatch.dataset.colorName}`, 'success');
        });
      });

      // Update Product Details card dynamically for category-specific details
      const pdDetailsCard = document.querySelector('.pd-details-card');
      if (pdDetailsCard) {
        const handmadeRow = pdDetailsCard.querySelector('.pd-details-row:nth-child(2) .pd-details-text');
        const careSpan = pdDetailsCard.querySelector('.pd-details-care');
        if (categoryKey === 'crochet-bouquets') {
          if (handmadeRow) handmadeRow.innerHTML = '<strong>Handmade</strong>Each bouquet is carefully handcrafted.';
          if (careSpan) careSpan.innerHTML = '• Keep away from moisture.<br>• Clean gently with a soft brush.<br>• Indoor decorative use recommended.';
        } else if (categoryKey === 'crochet-sling-bags') {
          if (handmadeRow) handmadeRow.innerHTML = '<strong>Handmade</strong>Lovingly handcrafted with premium cotton yarn.';
          if (careSpan) careSpan.innerHTML = '• Hand wash only.<br>• Dry flat in shade.<br>• Do not bleach.';
        } else {
          if (handmadeRow) handmadeRow.innerHTML = '<strong>Handmade</strong>Every piece is carefully handmade with love.';
          if (careSpan) careSpan.innerHTML = '• Hand wash only<br>• Do not bleach<br>• Dry flat in shade';
        }
      }

      // Open overlay
      document.getElementById('pd-overlay').classList.add('open');
    }

    // ---- Feature 2: Size option click handler ----
    document.querySelectorAll('.size-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelectorAll('.size-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        pdSelectedSize = opt.dataset.size;
        pdCurrentPrice = parseInt(opt.dataset.price, 10);
        document.getElementById('pd-price').innerHTML = '&#8377;' + pdCurrentPrice;
        try { localStorage.setItem('am_scrunchie_size', pdSelectedSize); } catch (e) { }
        showToast('Size Updated', `${pdSelectedSize} selected.`, 'success');
      });
    });

    document.getElementById('pd-custom-req').addEventListener('change', () => {
      const value = document.getElementById('pd-custom-req').value.trim();
      if (value) {
        showToast('Customization Selected', 'Your custom color request has been saved.', 'success');
      }
    });

    function closeProductDetail() {
      document.getElementById('pd-overlay').classList.remove('open');
    }

    function validateProductDetailSelection() {
      const activeSwatch = document.querySelector('#pd-swatches .color-swatch.selected');
      const isScrunchie = isScrunchieCategory(pdCategoryKey);
      const hasColor = !!activeSwatch;
      const hasSize = !isScrunchie || !!pdSelectedSize;
      return {
        isValid: hasColor && hasSize,
        hasColor,
        hasSize,
        selectedColor: activeSwatch ? activeSwatch.dataset.colorName : ''
      };
    }

    function getDirectOrderSummary() {
      const data = PRODUCT_DATA[pdCategoryKey];
      const product = data && data.products.find(p => p.id === pdProductId);
      if (!product) return null;

      const activeSwatch = document.querySelector('#pd-swatches .color-swatch.selected');
      const selectedColor = activeSwatch ? activeSwatch.dataset.colorName : 'Not selected';
      const isScrunchie = isScrunchieCategory(pdCategoryKey);
      const selectedSize = isScrunchie && pdSelectedSize ? pdSelectedSize : '';
      const effectivePrice = pdCurrentPrice || product.price;
      const customRequest = (document.getElementById('pd-custom-req').value || '').trim();

      return {
        productName: product.name,
        productImage: product.img,
        selectedColor,
        selectedSize,
        quantity: 1,
        price: effectivePrice,
        customRequest
      };
    }

    function renderCheckoutSummary() {
      const summaryBox = document.getElementById('checkout-order-summary');
      if (!summaryBox) return;

      if (checkoutMode !== 'direct') {
        summaryBox.style.display = 'none';
        summaryBox.innerHTML = '';
        return;
      }

      const summary = getDirectOrderSummary();
      if (!summary) {
        summaryBox.style.display = 'none';
        summaryBox.innerHTML = '';
        return;
      }

      summaryBox.style.display = 'block';
      summaryBox.innerHTML = `
        <div style="font-family:'Jost',sans-serif;font-size:0.68rem;font-weight:400;letter-spacing:0.16em;text-transform:uppercase;color:rgba(240,213,204,0.45);margin-bottom:10px;">Order Summary</div>
        <div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(240,213,204,0.12);border-radius:14px;padding:12px 14px;">
          <img src="${summary.productImage}" alt="${summary.productName}" style="width:54px;height:54px;border-radius:10px;object-fit:cover;border:1px solid rgba(240,213,204,0.12);" onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'" />
          <div style="flex:1;min-width:0;">
            <div style="font-family:'Cormorant Garamond',serif;font-size:0.98rem;color:#fff;font-weight:600;line-height:1.3;">${summary.productName}</div>
            <div style="font-family:'Jost',sans-serif;font-size:0.74rem;color:rgba(240,213,204,0.65);margin-top:4px;">Color: ${summary.selectedColor}${summary.selectedSize ? `<br>Size: ${summary.selectedSize}` : ''}<br>Qty: ${summary.quantity}<br>Price: ₹${summary.price}</div>
          </div>
        </div>
      `;
    }

    /* ============================================================
       FEATURE 5 — WHATSAPP ORDER
       ============================================================ */
    function buildWhatsAppMessage() {
      const data = PRODUCT_DATA[pdCategoryKey];
      const product = data && data.products.find(p => p.id === pdProductId);
      if (!product) return null;

      const activeSwatch = document.querySelector('#pd-swatches .color-swatch.selected');
      const selectedColor = activeSwatch ? activeSwatch.dataset.colorName : 'Not selected';
      const customRequest = (document.getElementById('pd-custom-req').value || '').trim();
      const isScrunchie = isScrunchieCategory(pdCategoryKey);
      const effectivePrice = pdCurrentPrice || product.price;
      const hasCustom = customRequest.length > 0;

      let msg = `Hello AmberlyMade! 🌸\n\nI'd like to order:\n\nProduct:\n${product.name}`;
      msg += `\n\nColor:\n${selectedColor}`;
      if (isScrunchie && pdSelectedSize) {
        msg += `\n\nSize:\n${pdSelectedSize}`;
      }
      msg += `\n\nPrice:\n\u20B9${effectivePrice}`;
      msg += `\n\nCustomization:\n${hasCustom ? 'Yes' : 'No'}`;
      if (hasCustom) {
        msg += `\n\nCustom Color Request:\n${customRequest}`;
      }
      msg += `\n\nPlease let me know the next steps.\nThank you! 🤍`;
      return msg;
    }

    const waOrderBtn = document.getElementById('pd-wa-btn');
    if (waOrderBtn) {
      waOrderBtn.addEventListener('click', () => {
        const msg = buildWhatsAppMessage();
        if (!msg) return;
        const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
        window.open(url, '_blank');
      });
    }

    /* ============================================================
       FEATURE 3 — WISHLIST
       ============================================================ */
    // wishlist stores full product objects: { id, name, price, img, category }
    let wishlist = [];

    function loadWishlist() {
      try {
        const saved = localStorage.getItem('am_wishlist_v2');
        wishlist = saved ? JSON.parse(saved) : [];
      } catch (e) { wishlist = []; }
    }

    function saveWishlist() {
      try { localStorage.setItem('am_wishlist_v2', JSON.stringify(wishlist)); } catch (e) { }
    }

    function updateWishBadge() {
      const badge = document.getElementById('wish-badge');
      badge.textContent = wishlist.length;
      if (wishlist.length > 0) badge.classList.add('visible');
      else badge.classList.remove('visible');
    }

    function renderWishlistPanel() {
      const list = document.getElementById('wish-items-list');
      const empty = document.getElementById('wish-empty-msg');
      if (wishlist.length === 0) {
        list.innerHTML = '';
        empty.style.display = 'block';
        return;
      }
      empty.style.display = 'none';
      list.innerHTML = wishlist.map(item => `
        <div class="cart-item" data-wish-id="${item.id}">
          <img class="cart-item-img" src="${item.img}" alt="${item.name}"
            onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'" />
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">&#8377;${item.price}</div>
          </div>
          <button class="cart-remove-btn" data-wish-remove="${item.id}" aria-label="Remove from wishlist" title="Remove">&times;</button>
        </div>
      `).join('');

      // Remove listeners
      list.querySelectorAll('[data-wish-remove]').forEach(btn => {
        btn.addEventListener('click', () => {
          const pid = btn.dataset.wishRemove;
          wishlist = wishlist.filter(w => w.id !== pid);
          saveWishlist();
          updateWishBadge();
          renderWishlistPanel();
          // Update heart icon in product grid if visible
          const gridBtn = document.querySelector(`.wish-btn[data-product-id="${pid}"]`);
          if (gridBtn) {
            gridBtn.classList.remove('wished');
            gridBtn.innerHTML = '&#9825;';
            gridBtn.setAttribute('aria-label', 'Add to wishlist');
          }
          const removedItem = wishlist.find(w => w.id === pid);
          showToast('Removed from Wishlist', `${removedItem ? removedItem.name : 'Item'} has been removed from your wishlist.`, 'success');
        });
      });
    }

    function toggleWishlist(productId, productName, productPrice, productImg, categoryKey, btnEl) {
      const existingIdx = wishlist.findIndex(w => w.id === productId);
      if (existingIdx === -1) {
        wishlist.push({ id: productId, name: productName, price: productPrice, img: productImg, category: categoryKey });
        btnEl.classList.add('wished');
        btnEl.innerHTML = '&#9829;';
        btnEl.setAttribute('aria-label', 'Remove from wishlist');
        btnEl.setAttribute('title', 'Remove from wishlist');
        showToast('Added to Wishlist', `${productName} has been added to your wishlist.`, 'success');
      } else {
        wishlist.splice(existingIdx, 1);
        btnEl.classList.remove('wished');
        btnEl.innerHTML = '&#9825;';
        btnEl.setAttribute('aria-label', 'Add to wishlist');
        btnEl.setAttribute('title', 'Add to wishlist');
        showToast('Removed from Wishlist', `${productName} has been removed from your wishlist.`, 'success');
      }
      saveWishlist();
      updateWishBadge();
    }

    /* ============================================================
       CART SYSTEM
       ============================================================ */
    let cart = [];

    function loadCart() {
      try {
        const saved = localStorage.getItem('am_cart_v1');
        cart = saved ? JSON.parse(saved) : [];
      } catch (e) { cart = []; }
    }

    function saveCart() {
      try { localStorage.setItem('am_cart_v1', JSON.stringify(cart)); } catch (e) { }
    }

    function getCartCount() {
      return cart.reduce((sum, item) => sum + item.qty, 0);
    }

    function updateCartBadge() {
      const badge = document.getElementById('cart-badge');
      const count = getCartCount();
      badge.textContent = count;
      badge.classList.toggle('visible', count > 0);
    }

    function addToCart() {
      const data = PRODUCT_DATA[pdCategoryKey];
      const product = data && data.products.find(p => p.id === pdProductId);
      if (!product) return;

      const activeSwatch = document.querySelector('#pd-swatches .color-swatch.selected');
      const selectedColor = activeSwatch ? activeSwatch.dataset.colorName : 'Not selected';
      const customRequest = (document.getElementById('pd-custom-req').value || '').trim();
      const isScrunchie = isScrunchieCategory(pdCategoryKey);
      const effectivePrice = pdCurrentPrice || product.price;
      const size = isScrunchie ? pdSelectedSize : '';

      // Check for duplicate (same product + color + size + customization)
      const existingIdx = cart.findIndex(item =>
        item.id === product.id &&
        item.color === selectedColor &&
        item.size === size &&
        item.customRequest === customRequest
      );

      if (existingIdx !== -1) {
        cart[existingIdx].qty += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: effectivePrice,
          img: product.img,
          category: pdCategoryKey,
          categoryTitle: data.title,
          color: selectedColor,
          size: size,
          customization: customRequest ? 'Yes' : 'No',
          customRequest: customRequest,
          qty: 1
        });
      }

      saveCart();
      updateCartBadge();

      // Button feedback
      const btn = document.getElementById('pd-add-to-cart-btn');
      btn.textContent = '\u2713 Added to Cart';
      btn.classList.add('added');
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.classList.remove('added');
      }, 1800);

      showToast('Added to Cart', `${product.name} has been added to your cart.`, 'success');
    }

    function openCartDrawer() {
      renderCartDrawer();
      document.getElementById('cart-drawer-overlay').classList.add('open');
      document.getElementById('cart-drawer').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCartDrawer() {
      document.getElementById('cart-drawer-overlay').classList.remove('open');
      document.getElementById('cart-drawer').classList.remove('open');
      document.body.style.overflow = '';
    }

    function renderCartDrawer() {
      const list = document.getElementById('cart-items-list');
      const emptyState = document.getElementById('cart-empty-state');
      const footer = document.getElementById('cart-footer');

      if (cart.length === 0) {
        list.innerHTML = '';
        emptyState.style.display = 'block';
        footer.style.display = 'none';
        return;
      }

      emptyState.style.display = 'none';
      footer.style.display = 'flex';

      list.innerHTML = cart.map((item, idx) => `
        <div class="cart-item" data-cart-index="${idx}">
          <img class="cart-item-img" src="${item.img}" alt="${item.name}"
            onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'" />
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-meta">
              <span class="cart-item-meta-row">Color: ${item.color}</span>
              ${item.size ? `<span class="cart-item-meta-row">Size: ${item.size}</span>` : ''}
              ${item.customRequest ? `<span class="cart-item-meta-row">Custom: ${item.customRequest}</span>` : ''}
            </div>
            <div class="cart-item-price">&#8377;${item.price * item.qty}</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-action="decrease" data-index="${idx}" aria-label="Decrease">&#8722;</button>
            <span class="qty-count">${item.qty}</span>
            <button class="qty-btn" data-action="increase" data-index="${idx}" aria-label="Increase">+</button>
          </div>
          <button class="cart-remove-btn" data-remove-index="${idx}" aria-label="Remove" title="Remove">&#128465;</button>
        </div>
      `).join('');

      updateCartTotals();
      attachCartListeners();
    }

    function attachCartListeners() {
      const list = document.getElementById('cart-items-list');
      list.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index);
          changeQty(idx, btn.dataset.action === 'increase' ? 1 : -1);
        });
      });
      list.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          removeCartItem(parseInt(btn.dataset.removeIndex));
        });
      });
    }

    function updateCartTotals() {
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      document.getElementById('cart-subtotal').textContent = '\u20B9' + subtotal;
      document.getElementById('cart-total').textContent = '\u20B9' + subtotal;
    }

    function changeQty(index, delta) {
      if (index < 0 || index >= cart.length) return;
      cart[index].qty += delta;
      if (cart[index].qty <= 0) { removeCartItem(index); return; }
      saveCart();
      updateCartBadge();
      renderCartDrawer();
      showToast('Cart Updated', 'Quantity updated successfully.', 'success');
    }

    function removeCartItem(index) {
      if (index < 0 || index >= cart.length) return;
      const el = document.querySelector(`.cart-item[data-cart-index="${index}"]`);
      if (el) {
        el.classList.add('removing');
        setTimeout(() => {
          cart.splice(index, 1);
          saveCart();
          updateCartBadge();
          renderCartDrawer();
        }, 300);
      } else {
        cart.splice(index, 1);
        saveCart();
        updateCartBadge();
        renderCartDrawer();
      }
      showToast('Removed from Cart', 'Item removed from your cart.', 'success');
    }

    /* ============================================================
       CHECKOUT
       ============================================================ */
    function openCheckoutModal(mode = 'cart') {
      checkoutMode = mode;
      closeCartDrawer();
      renderCheckoutSummary();
      setTimeout(() => {
        document.getElementById('checkout-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
      }, 200);
    }

    function closeCheckoutModal() {
      document.getElementById('checkout-overlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    function placeOrder() {
      const name = document.getElementById('co-name').value.trim();
      const phone = document.getElementById('co-phone').value.trim();
      const email = document.getElementById('co-email').value.trim();
      const address = document.getElementById('co-address').value.trim();
      const city = document.getElementById('co-city').value.trim();
      const state = document.getElementById('co-state').value.trim();
      const pin = document.getElementById('co-pin').value.trim();
      const notes = document.getElementById('co-notes').value.trim();

      if (!name || !phone || !address || !city || !state || !pin) {
        showToast('Required Fields', 'Please fill in all required fields.', 'warning');
        return;
      }

      if (checkoutMode === 'direct') {

        const summary = getDirectOrderSummary();
        if (!summary) {
          showToast('Order Error', 'Please reopen the product detail and try again.', 'error');
          return;
        }

        let msg = `Hello AmberlyMade! 🌸\n\nI'd like to place an order.\n\nProduct:\n${summary.productName}\n\nColor:\n${summary.selectedColor}`;
        if (summary.selectedSize) {
          msg += `\n\nSize:\n${summary.selectedSize}`;
        }
        msg += `\n\nPrice:\n₹${summary.price}\n\nCustomer Name:\n${name}\n\nPhone:\n${phone}`;
        if (email) msg += `\n\nEmail:\n${email}`;
        msg += `\n\nDelivery Address:\n${address}, ${city}, ${state} - ${pin}`;
        msg += `\n\nOrder Notes:\n${notes || 'None'}`;
        msg += `\n\nPlease let me know the payment details.\nThank you! 🤍`;

        window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
        document.getElementById('checkout-form').reset();
        closeCheckoutModal();
        showToast('Order Sent', 'Your order has been sent via WhatsApp.', 'success');
        return;
      }

      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      let msg = `Hello AmberlyMade! \uD83C\uDF38\n\nI'd like to place an order.\n\nItems:`;

      cart.forEach(item => {
        msg += `\n\n\u2022 ${item.name}`;
        msg += `\nColor: ${item.color}`;
        if (item.size) msg += `\nSize: ${item.size}`;
        if (item.customRequest) msg += `\nCustom: ${item.customRequest}`;
        msg += `\nQty: ${item.qty}`;
        msg += `\n\u20B9${item.price * item.qty}`;
      });

      msg += `\n\nSubtotal: \u20B9${subtotal}`;
      msg += `\n\nCustomer Name: ${name}`;
      msg += `\nPhone: ${phone}`;
      if (email) msg += `\nEmail: ${email}`;
      msg += `\nAddress: ${address}, ${city}, ${state} - ${pin}`;
      if (notes) msg += `\n\nOrder Notes: ${notes}`;
      msg += `\n\nPlease let me know the payment details.\nThank you! \uD83E\uDD0D`;

      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');

      // Clear cart and form after order
      cart = [];
      saveCart();
      updateCartBadge();
      document.getElementById('checkout-form').reset();
      closeCheckoutModal();
      showToast('Order Sent', 'Your order has been sent via WhatsApp.', 'success');
    }

    /* ============================================================
       EVENT LISTENERS
       ============================================================ */

    // Wishlist nav button
    document.getElementById('wish-open-btn').addEventListener('click', () => {
      renderWishlistPanel();
      openOverlay('wish-overlay');
    });
    document.getElementById('wish-close-btn').addEventListener('click', () => closeOverlay('wish-overlay'));
    document.getElementById('wish-overlay').addEventListener('click', e => {
      if (e.target === document.getElementById('wish-overlay')) closeOverlay('wish-overlay');
    });

    // Catalogue card clicks
    document.getElementById('catalogue-grid').addEventListener('click', e => {
      const card = e.target.closest('.item-card');
      if (!card) return;
      const category = card.dataset.category;
      if (category) openCategoryModal(category);
    });

    // Category modal — back & close
    document.getElementById('cat-back-btn').addEventListener('click', () => closeOverlay('cat-overlay'));
    document.getElementById('cat-close-btn').addEventListener('click', () => closeOverlay('cat-overlay'));
    document.getElementById('cat-overlay').addEventListener('click', e => {
      if (e.target === document.getElementById('cat-overlay')) closeOverlay('cat-overlay');
    });

    // Custom creations modal
    const customOpenBtn = document.getElementById('custom-open-btn');
    const customOverlay = document.getElementById('custom-request-overlay');
    const customCloseBtn = document.getElementById('custom-request-close');
    const customForm = document.getElementById('custom-request-form');

    function openCustomRequestModal() {
      if (customOverlay) {
        customOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeCustomRequestModal() {
      if (customOverlay) {
        customOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    }

    if (customOpenBtn) customOpenBtn.addEventListener('click', openCustomRequestModal);
    if (customCloseBtn) customCloseBtn.addEventListener('click', closeCustomRequestModal);
    if (customOverlay) {
      customOverlay.addEventListener('click', e => {
        if (e.target === customOverlay) closeCustomRequestModal();
      });
    }
    if (customForm) {
      customForm.addEventListener('submit', e => {
        e.preventDefault();
        const fullName = document.getElementById('custom-full-name').value.trim();
        const phone = document.getElementById('custom-phone').value.trim();
        if (!fullName || !phone) {
          showToast('Required Fields', 'Please add your name and phone number.', 'warning');
          return;
        }
        customForm.reset();
        closeCustomRequestModal();
        showToast('Custom Request Sent', 'Thank you for sharing your idea. We will review your request and contact you shortly to discuss your handmade creation.', 'success');
      });
    }

    // Product detail overlay — close
    document.getElementById('pd-close-btn').addEventListener('click', closeProductDetail);
    document.getElementById('pd-overlay').addEventListener('click', e => {
      if (e.target === document.getElementById('pd-overlay')) closeProductDetail();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeProductDetail();
        closeOverlay('cat-overlay');
        closeOverlay('wish-overlay');
        closeCartDrawer();
        closeCheckoutModal();
      }
    });

    // Cart drawer
    document.getElementById('cart-open-btn').addEventListener('click', openCartDrawer);
    document.getElementById('cart-close-btn').addEventListener('click', closeCartDrawer);
    document.getElementById('cart-drawer-overlay').addEventListener('click', closeCartDrawer);
    document.getElementById('cart-continue-btn').addEventListener('click', closeCartDrawer);
    document.getElementById('cart-empty-continue-btn').addEventListener('click', closeCartDrawer);
    document.getElementById('checkout-btn').addEventListener('click', openCheckoutModal);

    // Checkout
    document.getElementById('checkout-close-btn').addEventListener('click', closeCheckoutModal);
    document.getElementById('back-to-cart-btn').addEventListener('click', () => {
      closeCheckoutModal();
      if (checkoutMode === 'direct') {
        setTimeout(() => {
          document.getElementById('pd-overlay').classList.add('open');
          document.body.style.overflow = 'hidden';
        }, 200);
      } else {
        setTimeout(openCartDrawer, 200);
      }
    });
    document.getElementById('place-order-btn').addEventListener('click', placeOrder);
    document.getElementById('checkout-overlay').addEventListener('click', e => {
      if (e.target === document.getElementById('checkout-overlay')) closeCheckoutModal();
    });

    // Add to Cart from product detail
    document.getElementById('pd-add-to-cart-btn').addEventListener('click', addToCart);
    document.getElementById('pd-order-now-btn').addEventListener('click', () => {

      checkoutMode = 'direct';
      closeProductDetail();
      openCheckoutModal('direct');
    });

    /* ============================================================
       HAMBURGER MENU
       ============================================================ */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    function toggleMobileMenu() {
      hamburgerBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
      // Prevent body scroll when menu is open
      if (navLinks.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        // Only restore if no other overlay is open
        const anyOverlayOpen = document.querySelector('.am-overlay.open, .pd-overlay.open, .cart-drawer.open, .checkout-overlay.open, .custom-request-overlay.open');
        if (!anyOverlayOpen) document.body.style.overflow = '';
      }
    }

    function closeMobileMenu() {
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('open');
      const anyOverlayOpen = document.querySelector('.am-overlay.open, .pd-overlay.open, .cart-drawer.open, .checkout-overlay.open, .custom-request-overlay.open');
      if (!anyOverlayOpen) document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on Escape (extend existing handler)
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Mobile wishlist + cart buttons (duplicated for always-visible mobile bar)
    const wishOpenMobile = document.getElementById('wish-open-btn-mobile');
    const cartOpenMobile = document.getElementById('cart-open-btn-mobile');

    if (wishOpenMobile) {
      wishOpenMobile.addEventListener('click', () => {
        closeMobileMenu();
        document.getElementById('wish-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }

    if (cartOpenMobile) {
      cartOpenMobile.addEventListener('click', () => {
        closeMobileMenu();
        openCartDrawer();
      });
    }

    // Sync mobile badges with desktop badges
    function syncMobileBadges() {
      const wishBadge = document.getElementById('wish-badge');
      const wishBadgeMobile = document.getElementById('wish-badge-mobile');
      const cartBadge = document.getElementById('cart-badge');
      const cartBadgeMobile = document.getElementById('cart-badge-mobile');

      if (wishBadge && wishBadgeMobile) {
        wishBadgeMobile.textContent = wishBadge.textContent;
        wishBadgeMobile.className = wishBadge.className;
      }
      if (cartBadge && cartBadgeMobile) {
        cartBadgeMobile.textContent = cartBadge.textContent;
        cartBadgeMobile.className = cartBadge.className;
      }
    }

    // Override updateWishBadge and updateCartBadge to also sync mobile
    const _origUpdateWishBadge = updateWishBadge;
    updateWishBadge = function () {
      _origUpdateWishBadge();
      syncMobileBadges();
    };

    const _origUpdateCartBadge = updateCartBadge;
    updateCartBadge = function () {
      _origUpdateCartBadge();
      syncMobileBadges();
    };

    /* ============================================================
       INIT
       ============================================================ */
    loadWishlist();
    updateWishBadge();
    loadCart();
    updateCartBadge();
    syncMobileBadges();

    /* ============================================================
       AMBERLY ASSISTANT CHATBOT
       ============================================================ */
    (function () {
      'use strict';

      /* ---- helpers to access existing site functions ---- */
      function _openProduct(productId, categoryKey) {
        if (typeof openProductDetail === 'function') {
          // Close chatbot first for clean UX
          closeChatWindow();
          openProductDetail(productId, categoryKey);
        }
      }

      function _openCustom() {
        if (typeof openCustomRequestModal === 'function') {
          closeChatWindow();
          openCustomRequestModal();
        } else {
          // fallback: scroll to section
          closeChatWindow();
          document.querySelector('.custom-creations-section') && document.querySelector('.custom-creations-section').scrollIntoView({ behavior: 'smooth' });
        }
      }

      function _scrollToCatalogue() {
        closeChatWindow();
        const el = document.getElementById('catalogue');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }

      /* ---- flatten all products for easy search ---- */
      function getAllProducts() {
        const all = [];
        Object.entries(PRODUCT_DATA).forEach(([catKey, catData]) => {
          catData.products.forEach(p => {
            all.push({ ...p, categoryKey: catKey, categoryTitle: catData.title });
          });
        });
        return all;
      }

      /* ---- STATE ---- */
      let chatOpen = false;
      let hasGreeted = false;
      let typingTimer = null;

      /* ---- DOM REFS ---- */
      const chatBtn   = document.getElementById('am-chat-btn');
      const chatWin   = document.getElementById('am-chat-window');
      const chatClose = document.getElementById('am-chat-close');
      const chatBody  = document.getElementById('am-chat-body');
      const chatInput = document.getElementById('am-chat-input');
      const chatSend  = document.getElementById('am-chat-send');

      /* ---- open / close ---- */
      function openChatWindow() {
        chatOpen = true;
        chatBtn.classList.add('am-chat-btn--open');
        chatWin.classList.add('am-chat-window--open');
        chatBtn.setAttribute('aria-expanded', 'true');
        if (!hasGreeted) { hasGreeted = true; showWelcome(); }
        setTimeout(() => chatInput.focus(), 350);
      }

      function closeChatWindow() {
        chatOpen = false;
        chatBtn.classList.remove('am-chat-btn--open');
        chatWin.classList.remove('am-chat-window--open');
        chatBtn.setAttribute('aria-expanded', 'false');
      }

      chatBtn.addEventListener('click', () => chatOpen ? closeChatWindow() : openChatWindow());
      chatClose.addEventListener('click', closeChatWindow);

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && chatOpen) closeChatWindow();
      });

      /* ---- message helpers ---- */
      function scrollBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
      }

      function addUserMsg(text) {
        const div = document.createElement('div');
        div.className = 'am-msg am-msg--user';
        div.innerHTML = `<div class="am-bubble am-bubble--user">${escapeHtml(text)}</div>`;
        chatBody.appendChild(div);
        requestAnimationFrame(scrollBottom);
      }

      function addBotMsg(html, extraClass = '') {
        const div = document.createElement('div');
        div.className = 'am-msg am-msg--bot' + (extraClass ? ' ' + extraClass : '');
        div.innerHTML = `<div class="am-bubble am-bubble--bot">${html}</div>`;
        chatBody.appendChild(div);
        requestAnimationFrame(scrollBottom);
      }

      function showTyping() {
        removeTyping();
        const div = document.createElement('div');
        div.className = 'am-msg am-msg--bot am-typing-row';
        div.id = 'am-typing-indicator';
        div.innerHTML = '<div class="am-bubble am-bubble--bot"><span class="am-typing"><span></span><span></span><span></span></span></div>';
        chatBody.appendChild(div);
        scrollBottom();
      }

      function removeTyping() {
        const t = document.getElementById('am-typing-indicator');
        if (t) t.remove();
      }

      function botReply(htmlFn, delay = 900) {
        showTyping();
        typingTimer = setTimeout(() => {
          removeTyping();
          htmlFn();
          scrollBottom();
        }, delay);
      }

      function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }

      /* ---- quick-action buttons ---- */
      function makeQuickBtns(actions) {
        const wrap = document.createElement('div');
        wrap.className = 'am-quick-btns';
        actions.forEach(({ label, onClick }) => {
          const b = document.createElement('button');
          b.className = 'am-quick-btn';
          b.textContent = label;
          b.addEventListener('click', () => {
            wrap.remove(); // dismiss button row
            onClick();
          });
          wrap.appendChild(b);
        });
        chatBody.appendChild(wrap);
        scrollBottom();
      }

      /* ---- welcome ---- */
      function showWelcome() {
        addBotMsg('Hi! Welcome to AmberlyMade \uD83E\uDDF6<br><br>I\'m here to help you find something handmade and special.<br><br>What are you looking for?');
        setTimeout(() => {
          makeQuickBtns([
            { label: '🛍 Browse Products',  onClick: () => handleInput('show me all products') },
            { label: '🎁 Find a Gift',       onClick: () => handleInput('gift ideas') },
            { label: '🎨 Custom Order',      onClick: () => handleInput('custom order') },
            { label: '💬 Ask a Question',    onClick: () => { chatInput.focus(); } }
          ]);
        }, 300);
      }

      /* ---- product recommendation card ---- */
      function makeProductCard(product) {
        const div = document.createElement('div');
        div.className = 'am-product-card';
        div.innerHTML = `
          <img class="am-product-card__img" src="${product.img}" alt="${escapeHtml(product.name)}" loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'">
          <div class="am-product-card__info">
            <div class="am-product-card__name">${escapeHtml(product.name.trim())}</div>
            <div class="am-product-card__price">&#8377;${product.price}</div>
            <button class="am-product-card__btn" data-pid="${product.id}" data-cat="${product.categoryKey}">View Product</button>
          </div>`;
        div.querySelector('.am-product-card__btn').addEventListener('click', () => {
          _openProduct(product.id, product.categoryKey);
        });
        return div;
      }

      function showProductCards(products, limit = 3) {
        const shown = products.slice(0, limit);
        const wrap = document.createElement('div');
        wrap.className = 'am-product-cards-row';
        shown.forEach(p => wrap.appendChild(makeProductCard(p)));
        chatBody.appendChild(wrap);
        scrollBottom();
      }

      /* ---- INTENT ENGINE ---- */
      function parseIntent(text) {
        const t = text.toLowerCase().trim();
        // Greeting
        if (/^(hi|hello|hey|hii|howdy|namaste|good morning|good afternoon|good evening|sup|yo|hola)/.test(t)) return 'greeting';
        // Farewell
        if (/(bye|goodbye|take care|thanks|thank you|thnx|thx|ok bye|see you)/.test(t)) return 'farewell';
        // Price budget
        if (/under|below|less than|budget|cheap|within|max/.test(t) && /\d/.test(t)) return 'budget';
        // Cheapest
        if (/cheapest|lowest price|most affordable|least expensive/.test(t)) return 'cheapest';
        // Most expensive
        if (/most expensive|costliest|expensive|premium|high.end/.test(t)) return 'expensive';
        // Category browse
        if (/sling bag|bag/.test(t) && !/charm/.test(t)) return 'cat:crochet-sling-bags';
        if (/bouquet|flowers?|floral/.test(t)) return 'cat:crochet-bouquets';
        if (/scrunchie|hair tie/.test(t)) return 'cat:large-scrunchie';
        if (/keychain|key chain/.test(t)) return 'cat:keychains';
        if (/earpod|earphone|airpod|pouch.*ear/.test(t)) return 'cat:earpods-case';
        if (/kindle|book sleeve|book case/.test(t)) return 'cat:kindle-case';
        if (/bookmark|book mark/.test(t) && !/flower/.test(t)) return 'cat:bookmark';
        if (/flower bookmark|floral bookmark/.test(t)) return 'cat:flower-bookmarks';
        if (/wall hang|hanging decor|decor/.test(t)) return 'cat:hanging-decor';
        if (/phone charm|phone strap/.test(t)) return 'cat:phone-charms';
        if (/bag charm/.test(t)) return 'cat:bag-charms';
        if (/claw clip|hair clip/.test(t)) return 'cat:claw-clips';
        // All products
        if (/all product|show product|what do you (have|sell|offer|make)|browse|catalogue|catalog|collection/.test(t)) return 'all-products';
        // Gift
        if (/gift|present|anniversary|birthday|friend|sister|mother|mom|dad/.test(t)) return 'gift';
        // Custom order
        if (/custom|customis|customi[sz]|bespoke|personaliz|personalise|your own|make.*for me/.test(t)) return 'custom';
        // Care
        if (/care|wash|clean|maintain|how.*keep|maintenance/.test(t)) return 'care';
        // Material / made of
        if (/material|made (of|from|with)|yarn|cotton|fabric|what is it made/.test(t)) return 'material';
        // Processing time
        if (/how long|time|days|delivery|dispatch|when|how.*get|process/.test(t)) return 'processing';
        // Colors
        if (/colou?r|shade|hue|available in|tint/.test(t)) return 'colors';
        // Sizes
        if (/size|dimension|big|small|large|medium|fit/.test(t)) return 'sizes';
        // How to order
        if (/how.*order|place.*order|buy|purchase|how.*add|how.*cart|ordering|steps/.test(t)) return 'how-to-order';
        // Cart
        if (/cart|add to cart|basket/.test(t)) return 'cart-info';
        // Wishlist
        if (/wishlist|wish list|save|favourite|favorite/.test(t)) return 'wishlist-info';
        // Price of specific product (generic)
        if (/price|cost|how much|rate|fees|charge/.test(t)) return 'price-info';
        return 'unknown';
      }

      /* ---- extract budget from text ---- */
      function extractBudget(text) {
        const m = text.match(/(\d[\d,]*)/);
        if (!m) return null;
        return parseInt(m[1].replace(/,/g, ''), 10);
      }

      /* ---- RESPONSE HANDLERS ---- */
      function handleInput(rawText) {
        if (!rawText.trim()) return;
        addUserMsg(rawText);
        const intent = parseIntent(rawText);
        respond(intent, rawText);
      }

      function respond(intent, raw) {
        if (intent === 'greeting') {
          botReply(() => {
            addBotMsg('Hi there! \uD83C\uDF38 I\'m Amberly Assistant, your little crochet shopping buddy. How can I help you today?');
            makeQuickBtns([
              { label: '🛍 Browse Products', onClick: () => handleInput('show me all products') },
              { label: '🎨 Custom Order',     onClick: () => handleInput('custom order') }
            ]);
          }, 700);
          return;
        }
        if (intent === 'farewell') {
          botReply(() => addBotMsg('Thank you for visiting AmberlyMade 🧶 It was lovely chatting with you! Come back anytime for something handmade and special. 🌸'), 700);
          return;
        }
        if (intent === 'all-products') {
          const all = getAllProducts();
          botReply(() => {
            addBotMsg(`We have <strong>${all.length} handmade creations</strong> across ${Object.keys(PRODUCT_DATA).length} categories! Here are a few highlights:`);
            // Show 1 product per category, max 6
            const highlights = Object.values(PRODUCT_DATA).slice(0, 6).map(c => c.products[0]);
            const enriched = highlights.map(p => {
              const catKey = Object.entries(PRODUCT_DATA).find(([k, v]) => v.products.some(pr => pr.id === p.id))?.[0] || '';
              const catTitle = PRODUCT_DATA[catKey]?.title || '';
              return { ...p, categoryKey: catKey, categoryTitle: catTitle };
            });
            showProductCards(enriched, 6);
            makeQuickBtns([
              { label: '🎀 Sling Bags',    onClick: () => handleInput('show me sling bags') },
              { label: '💐 Bouquets',      onClick: () => handleInput('show me bouquets') },
              { label: '🔖 Bookmarks',     onClick: () => handleInput('show me bookmarks') },
              { label: '🛒 Browse All',    onClick: _scrollToCatalogue }
            ]);
          });
          return;
        }
        if (intent.startsWith('cat:')) {
          const catKey = intent.replace('cat:', '');
          const catData = PRODUCT_DATA[catKey];
          if (!catData) { respond('unknown', raw); return; }
          botReply(() => {
            addBotMsg(`Here are our <strong>${catData.title.trim()}</strong> — all handcrafted with love 🧶`);
            const enriched = catData.products.map(p => ({ ...p, categoryKey: catKey, categoryTitle: catData.title }));
            showProductCards(enriched, catData.products.length);
            makeQuickBtns([
              { label: '🎨 Customise One',  onClick: () => handleInput('custom order') },
              { label: '🛒 Browse All',     onClick: _scrollToCatalogue }
            ]);
          });
          return;
        }
        if (intent === 'gift') {
          const all = getAllProducts();
          const giftPicks = all.filter(p => p.price <= 599).slice(0, 6);
          botReply(() => {
            if (giftPicks.length === 0) {
              addBotMsg('Every AmberlyMade piece makes a wonderful gift! 🎁 Let me show you some of our creations:');
              showProductCards(all.slice(0, 3), 3);
            } else {
              addBotMsg('Every AmberlyMade piece makes a wonderful gift! 🎁 Here are some beautiful options:');
              showProductCards(giftPicks, 3);
            }
            makeQuickBtns([
              { label: '🎀 Under ₹300',   onClick: () => handleInput('show me products under 300') },
              { label: '🎀 Under ₹500',   onClick: () => handleInput('show me products under 500') },
              { label: '🎨 Custom Gift',   onClick: () => handleInput('custom order') }
            ]);
          });
          return;
        }
        if (intent === 'budget') {
          const budget = extractBudget(raw);
          if (!budget) { respond('unknown', raw); return; }
          const all = getAllProducts();
          const matches = all.filter(p => p.price <= budget);
          botReply(() => {
            if (matches.length === 0) {
              addBotMsg(`I couldn't find anything under ₹${budget} right now, but you can explore our full collection. 🧶`);
              makeQuickBtns([{ label: '🛒 Browse Collection', onClick: _scrollToCatalogue }]);
            } else {
              addBotMsg(`Here are ${matches.length > 3 ? 'some' : matches.length} AmberlyMade pieces under ₹${budget}:`);
              showProductCards(matches, 3);
              if (matches.length > 3) {
                makeQuickBtns([{ label: `See more under ₹${budget}`, onClick: _scrollToCatalogue }]);
              }
            }
          });
          return;
        }
        if (intent === 'cheapest') {
          const all = getAllProducts();
          const sorted = all.slice().sort((a, b) => a.price - b.price);
          botReply(() => {
            addBotMsg(`Our most affordable pieces start from just <strong>₹${sorted[0].price}</strong>! 🌸 Here are our lowest-priced items:`);
            showProductCards(sorted, 3);
          });
          return;
        }
        if (intent === 'expensive') {
          const all = getAllProducts();
          const sorted = all.slice().sort((a, b) => b.price - a.price);
          botReply(() => {
            addBotMsg('Looking for our premium pieces? Here are some of our finest creations 🌟');
            showProductCards(sorted, 3);
          });
          return;
        }
        if (intent === 'custom') {
          botReply(() => {
            addBotMsg('Absolutely! We love bringing custom ideas to life. \uD83C\uDFA8<br><br>Tell us what you have in mind \u2014 a special colour, a unique design, or a personalised gift \u2014 and we\'ll handcraft it just for you.');
            const wrap = document.createElement('div');
            wrap.className = 'am-quick-btns';
            const b = document.createElement('button');
            b.className = 'am-quick-btn am-quick-btn--primary';
            b.textContent = '🎨 Create Your Custom Order';
            b.addEventListener('click', _openCustom);
            wrap.appendChild(b);
            chatBody.appendChild(wrap);
            scrollBottom();
          });
          return;
        }
        if (intent === 'care') {
          botReply(() => {
            addBotMsg(`<strong>Care Instructions 🧶</strong><br><br>For most of our crochet creations:<br>• Hand wash only in cold water<br>• Do not bleach<br>• Dry flat in the shade<br><br>For our <em>Crochet Bouquets</em>:<br>• Keep away from moisture<br>• Clean gently with a soft dry brush<br>• Indoor decorative use recommended`);
            makeQuickBtns([{ label: '🛒 Browse Products', onClick: _scrollToCatalogue }]);
          });
          return;
        }
        if (intent === 'material') {
          botReply(() => {
            addBotMsg(`<strong>Materials 🪡</strong><br><br>Our pieces are handcrafted using:<br>• <strong>Premium cotton yarn</strong> — soft, durable, and skin-friendly<br>• High-quality crochet threads for intricate designs<br><br>Each item is made with love and attention to detail. 🌸<br><br>For product-specific details, feel free to open any product card — or contact us through Custom Order for more information.`);
            makeQuickBtns([{ label: '🛒 Browse Products', onClick: _scrollToCatalogue }]);
          });
          return;
        }
        if (intent === 'processing') {
          botReply(() => {
            addBotMsg(`<strong>Processing Time ⏱</strong><br><br>Since everything at AmberlyMade is lovingly handmade to order:<br>• Standard items: <strong>3–7 business days</strong><br>• Custom creations: <strong>7–14 business days</strong> depending on complexity<br><br>For exact timelines on your specific order, please reach out through our Custom Creations section and we'll let you know! 🌸`);
            makeQuickBtns([
              { label: '🎨 Custom Order',   onClick: () => handleInput('custom order') },
              { label: '🛒 Browse Products', onClick: _scrollToCatalogue }
            ]);
          });
          return;
        }
        if (intent === 'colors') {
          botReply(() => {
            addBotMsg(`<strong>Colour Options 🎨</strong><br><br>Most AmberlyMade pieces can be made in your choice of colour, including:<br><br>Blush Pink · Sage Green · Dusty Rose · Cream · Lavender · Honey Gold · Midnight Navy · Warm Beige · Teal · Wine<br><br>Simply open any product, select your colour, and add it to your cart. Or let us know your preference through a Custom Order! 🌸`);
            makeQuickBtns([
              { label: '🛒 Browse Products', onClick: _scrollToCatalogue },
              { label: '🎨 Custom Order',    onClick: () => handleInput('custom order') }
            ]);
          });
          return;
        }
        if (intent === 'sizes') {
          botReply(() => {
            addBotMsg(`<strong>Sizes ✂️</strong><br><br>Most of our accessories are one-size. Our <strong>Scrunchies</strong> are available in two sizes:<br>• Medium — ₹199<br>• Large — ₹259<br><br>For bags and other items, dimensions may vary — feel free to ask us via Custom Order for specific measurements.`);
            makeQuickBtns([
              { label: '🛍 View Scrunchies', onClick: () => handleInput('show me scrunchies') },
              { label: '🎨 Custom Order',    onClick: () => handleInput('custom order') }
            ]);
          });
          return;
        }
        if (intent === 'how-to-order') {
          botReply(() => {
            addBotMsg('<strong>How to Order 🛒</strong><br><br>It\'s simple and easy!<br><br>1. Browse our collection and find something you love<br>2. Click <em>View Product</em> to open the product detail<br>3. Choose your preferred colour (and size if applicable)<br>4. Click <em>Add to Cart</em> or <em>Order Now</em><br>5. Fill in your details and place your order via WhatsApp 💬<br><br>We\'ll then confirm your order and get crafting! 🌸');
            const wrap = document.createElement('div');
            wrap.className = 'am-quick-btns';
            const b = document.createElement('button');
            b.className = 'am-quick-btn am-quick-btn--primary';
            b.textContent = '🛒 Browse Products';
            b.addEventListener('click', _scrollToCatalogue);
            wrap.appendChild(b);
            chatBody.appendChild(wrap);
            scrollBottom();
          });
          return;
        }
        if (intent === 'cart-info') {
          botReply(() => {
            addBotMsg('To add something to your cart 🛒<br><br>Open any product, select your colour, then click <strong>Add to Cart</strong>. Your items will be saved and you can checkout whenever you\'re ready!');
            makeQuickBtns([{ label: '🛒 Browse Products', onClick: _scrollToCatalogue }]);
          });
          return;
        }
        if (intent === 'wishlist-info') {
          botReply(() => {
            addBotMsg('You can save products to your Wishlist 🤍 by clicking the heart icon on any product card. Your wishlist is accessible from the top navigation bar.');
            makeQuickBtns([{ label: '🛒 Browse Products', onClick: _scrollToCatalogue }]);
          });
          return;
        }
        if (intent === 'price-info') {
          const all = getAllProducts();
          const min = Math.min(...all.map(p => p.price));
          const max = Math.max(...all.map(p => p.price));
          botReply(() => {
            addBotMsg(`Our handmade creations are priced from <strong>₹${min}</strong> to <strong>₹${max}</strong>. 🌸<br><br>Use the catalogue to browse by category, or let me know your budget and I'll find the perfect piece for you!`);
            makeQuickBtns([
              { label: '💰 Under ₹200', onClick: () => handleInput('products under 200') },
              { label: '💰 Under ₹500', onClick: () => handleInput('products under 500') },
              { label: '🛒 Browse All',  onClick: _scrollToCatalogue }
            ]);
          });
          return;
        }
        // unknown
        botReply(() => {
          addBotMsg('I\'m still learning about AmberlyMade 🧶<br><br>I can help you with our <strong>products, prices, colours, customisation, care instructions, and ordering</strong>. Try asking me something like:<br><br>• "Show me sling bags"<br>• "Products under ₹500"<br>• "How do I order?"<br>• "Can I customise this?"');
          makeQuickBtns([
            { label: '🛒 Browse Products', onClick: _scrollToCatalogue },
            { label: '🎨 Custom Order',    onClick: () => handleInput('custom order') }
          ]);
        });
      }

      /* ---- send handler ---- */
      function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        chatInput.value = '';
        chatInput.style.height = 'auto';
        handleInput(text);
      }

      chatSend.addEventListener('click', sendMessage);
      chatInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
      });

      // auto-resize textarea
      chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = Math.min(chatInput.scrollHeight, 90) + 'px';
      });

    }());
  