import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {

        const users = await prisma.user.findMany({
            include: { posts: true }, // Include related posts
        });
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {

        const { name, email, age } = await req.json();

        const userExists = await prisma.user.findFirst({
            where: { email }
        })

        if (userExists) {
            return NextResponse.json("User Already Exists", { status: 400 });
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                age
            }
        })

        return NextResponse.json(user, { status: 201 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}