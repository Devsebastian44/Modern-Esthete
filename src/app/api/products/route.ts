import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/products
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const category = searchParams.get('category')

        // Example filter
        const whereClause = category ? { category: { slug: category } } : {}

        const products = await prisma.product.findMany({
            where: whereClause,
            include: {
                category: true,
            }
        })

        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}

// POST /api/products
export async function POST(request: Request) {
    try {
        const body = await request.json()
        // TODO: Add validation (e.g., Zod)

        const product = await prisma.product.create({
            data: {
                name: body.name,
                description: body.description,
                price: body.price,
                stock: body.stock,
                slug: body.slug,
                images: body.images || [],
                categoryId: body.categoryId
            }
        })

        return NextResponse.json(product, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
    }
}
