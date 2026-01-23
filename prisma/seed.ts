import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // 1. Create Categories
    const categoriesData = [
        {
            name: "Apparel",
            slug: "apparel",
        },
        {
            name: "Home Office",
            slug: "home-office",
        },
        {
            name: "Accessories",
            slug: "accessories",
        },
        {
            name: "Footwear",
            slug: "footwear",
        },
        {
            name: "Leather Goods",
            slug: "leather-goods",
        },
        {
            name: "Tech Essentials",
            slug: "tech-essentials",
        }
    ];

    const categories = [];
    for (const cat of categoriesData) {
        const created = await prisma.category.upsert({
            where: { name: cat.name },
            update: {},
            create: cat,
        });
        categories.push(created);
        console.log(`Created/Updated category: ${created.name}`);
    }

    // 2. Create/Find User for association
    const userEmail = "zhunay@gmail.com";
    const user = await prisma.user.upsert({
        where: { email: userEmail },
        update: {},
        create: {
            email: userEmail,
            password: "hashedpassword123", // In real scenario, use a properly hashed password
            name: "Zhunay",
            role: "ADMIN"
        }
    });
    console.log(`Using user: ${user.email} for product association`);

    // 3. Create Products
    const productsData = [
        {
            name: "Minimalist Timepiece",
            categoryName: "Accessories",
            price: 240.00,
            images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA64c3upl95w_TTnVGuWNu_ac0zTrIa-IUi0UrAa5uWklAFy586zVIYOx3nbVlna7z5jskJINdA7BefqYgcv5nMTG2HGvoq966Sujh_LmEkJ6LT7mmqGdeL3n0yUKDI8lQ_tVICPvE-22sjzMhWvosPzBeQsNqxNGSPh8-DvuG5hCadJvtZLnGfBLbgFOfPMkbxJP2-pIrh4K5AoUWWvN4nelENW3AkgmqbqkgPCLnpiOJrswwpsodK2Z4AQhScWWRR9723xBS8W4yK"],
            slug: "minimalist-timepiece",
            stock: 50
        },
        // ... (other products)
    ];

    // Note: To keep the script clean, I'll associate ALL current products to this user.
    for (const prod of productsData) {
        const cat = categories.find(c => c.name.toLowerCase() === prod.categoryName.toLowerCase());
        if (cat) {
            await prisma.product.upsert({
                where: { slug: prod.slug },
                update: {
                    userId: user.id
                },
                create: {
                    name: prod.name,
                    description: `Highlighting the essence of modern style, the ${prod.name} represents our commitment to design and quality.`,
                    price: prod.price,
                    images: prod.images,
                    slug: prod.slug,
                    stock: prod.stock,
                    categoryId: cat.id,
                    userId: user.id
                }
            });
            console.log(`Created/Updated product: ${prod.name} (Assigned to ${user.email})`);
        }
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
