import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/cart
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId') // In real app, get from session

    if (!userId) {
        return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    try {
        const cart = await prisma.cart.findUnique({
            where: { userId },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        })

        return NextResponse.json(cart || { items: [] })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch cart' }, { status: 500 })
    }
}

// POST /api/cart
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { userId, productId, quantity } = body

        // Simple logic: Upsert cart, then upsert item
        // In production, handle stock checks etc.

        let cart = await prisma.cart.findUnique({ where: { userId } })

        if (!cart) {
            cart = await prisma.cart.create({
                data: { userId }
            })
        }

        const cartItem = await prisma.cartItem.create({
            data: {
                cartId: cart.id,
                productId,
                quantity
            }
        })

        return NextResponse.json(cartItem)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to add to cart' }, { status: 500 })
    }
}
