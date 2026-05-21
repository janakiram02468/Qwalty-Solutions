"use strict";

const catElectronics = "11111111-1111-1111-1111-111111111111";
const catHome = "22222222-2222-2222-2222-222222222222";

/** @param {import('sequelize').QueryInterface} queryInterface */
module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("categories", [
      {
        id: catElectronics,
        name: "Electronics",
        slug: "electronics",
        description: "Devices and accessories",
        created_at: now,
        updated_at: now,
      },
      {
        id: catHome,
        name: "Home & Living",
        slug: "home-living",
        description: "Furniture and decor",
        created_at: now,
        updated_at: now,
      },
    ]);

    await queryInterface.bulkInsert("products", [
      {
        id: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
        name: "Wireless Headphones",
        slug: "wireless-headphones",
        description: "Noise-cancelling over-ear headphones",
        price: 199.99,
        sku: "SKU-HP-001",
        category_id: catElectronics,
        created_at: now,
        updated_at: now,
      },
      {
        id: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
        name: "USB-C Hub",
        slug: "usb-c-hub",
        description: "7-in-1 portable hub",
        price: 49.5,
        sku: "SKU-HUB-002",
        category_id: catElectronics,
        created_at: now,
        updated_at: now,
      },
      {
        id: "cccccccc-cccc-cccc-cccc-cccccccccccc",
        name: "Desk Lamp",
        slug: "desk-lamp",
        description: "LED adjustable arm lamp",
        price: 35.0,
        sku: "SKU-LAMP-003",
        category_id: catHome,
        created_at: now,
        updated_at: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("categories", null, {});
  },
};
