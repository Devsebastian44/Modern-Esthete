import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

// POST /api/orders
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { userId, addressId, items } = body

        // Transaction to ensure data consistency
        const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
            // 1. Calculate total
            // This requires fetching product prices to prevent frontend tampering
            // Simulating for now

            let total = 0

            // 2. Create Order
            const order = await tx.order.create({
                data: {
                    userId,
                    addressId,
                    total: 0, // Placeholder, usually calculated
                    status: 'PENDING',
                    items: {
                        create: items.map((item: any) => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            price: item.price // Should verify against DB
                        }))
                    }
                }
            })

            return order
        })

        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }
}
