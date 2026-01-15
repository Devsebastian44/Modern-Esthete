export const products = [
    {
        id: 1,
        name: "Minimalist Timepiece",
        category: "Accessories",
        price: 240.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA64c3upl95w_TTnVGuWNu_ac0zTrIa-IUi0UrAa5uWklAFy586zVIYOx3nbVlna7z5jskJINdA7BefqYgcv5nMTG2HGvoq966Sujh_LmEkJ6LT7mmqGdeL3n0yUKDI8lQ_tVICPvE-22sjzMhWvosPzBeQsNqxNGSPh8-DvuG5hCadJvtZLnGfBLbgFOfPMkbxJP2-pIrh4K5AoUWWvN4nelENW3AkgmqbqkgPCLnpiOJrswwpsodK2Z4AQhScWWRR9723xBS8W4yK",
        new: false
    },
    {
        id: 2,
        name: "Structured Tote",
        category: "Leather Goods",
        price: 180.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaa4jgGKoutcX8kELx10tAbmMSWLEcnp97e0jRSXNGajYS5yI7MUhwM6hss2MzYTDS8ojVpDDl66QZrjxabOuCWYLl2VqbGopGwOm8bVNJrrH2Qe2z2NrDVSDB8ERRIZSzQyqRm3PwGLfjlgKGwzuWXlx1xoa5DW4HTWORPnAnM_AAnRuY8Mdc0p264sHRBWexKS6b7StfZ3ubERzOb76hyS4ZobF9tv1IlKhJKJT5gNIxLd5wfEkmFe9IqDuYHNJqk0yVeq-gbEcD",
        new: false
    },
    {
        id: 3,
        name: "Leather Tech Folio",
        category: "Tech Essentials",
        price: 120.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB80dme41NkN4fKAvuDlo7lnZo2i3P0NLajXAyFn70wKwO1ZoNnXtESxQY6xDaPR5xW4oY9UHzGErvmHY73A_hjkgi_FuCAMNnYDlIpvXXqbwJzw-E5TYoQvUQyG8pIcTzmUY2R1lTQjnpuEiRdKs5WMDvS3RuSOZu4HfgPeUE_FboPrOswZqNJ8ZSajhZoWlLJzYxYNuROghFB9WjiWCAmyJwHd0JQKUjeEXHbp7Dr9wSfU57idAwlZ0yXHZDsc1c8h48sLn7CkQTW",
        new: false
    },
    {
        id: 4,
        name: "Executive Blazer",
        category: "Apparel",
        price: 350.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAddQJvkB5uBIca_mY0BF3GwwIDllieJedxnGRCIcOjl89hGVGShXmVNxpMQP3Cn4Uxma54ysjuPw2h0W1-F23xyyHAbBw18GegwpHfUaoVZ_CRwkhlEl8LJmWmwUWYIs18vOHeQFRO6IwvVaWpEpvIAb1V1cVEPuxThq_udfNanVh_RzSqCt9zJxVdtQfUNBp0mJ5PJfffUxZFBeVP7sRKlzhARbQVUoCUtoAfz1wc9WwqqUIO_RriehWrEdv6jyiOM1w6TSSSIKbM",
        new: false
    },
    // Shop Page Additions
    {
        id: 5,
        name: "Technical Shell Jacket",
        category: "APPAREL",
        price: 295.00,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1887&auto=format&fit=crop", // Placeholder for orange bag/jacket based on image context
        new: true
    },
    {
        id: 6,
        name: "Minimalist Silk Shirt",
        category: "APPAREL",
        price: 185.00,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop", // Beige shirt
        new: false
    },
    {
        id: 7,
        name: "Titanium Chronograph",
        category: "ACCESSORIES",
        price: 420.00,
        originalPrice: 550.00,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop", // Black watch
        new: false
    },
    {
        id: 8,
        name: "Architectural Trainer",
        category: "FOOTWEAR",
        price: 210.00,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop", // Brown sneakers
        new: false
    },
    {
        id: 9,
        name: "The Weekender Bag",
        category: "ACCESSORIES",
        price: 350.00,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop", // Brown bag
        new: false
    },
    {
        id: 10,
        name: "Lightweight Linen Trouser",
        category: "APPAREL",
        price: 140.00,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1897&auto=format&fit=crop", // Pants
        new: false
    },
];

export const categories = [
    {
        id: 1,
        name: "Apparel",
        description: "Timeless silhouettes",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2000&auto=format&fit=crop", // Leather jacket vibe
        size: "large"
    },
    {
        id: 2,
        name: "Home Office",
        description: "Curated workspace",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop", // Green wall desk
        size: "large"
    },
    {
        id: 3,
        name: "Accessories",
        description: "The finishing touches",
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000&auto=format&fit=crop", // Green flat lay
        size: "large"
    }
];
